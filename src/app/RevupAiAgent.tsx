import { useEffect, useMemo, useRef, useState } from "react";
import { AlertTriangle, ArrowLeft, ArrowRight, AtSign, Bot, Send, X } from "lucide-react";
import {
  type Note,
  type PosAlert,
  TYPE_LABEL,
  SeverityDot,
  StatusBadge,
  CURRENT_USER,
  TEAMMATES,
  TEAMMATE_HANDLES,
  HANDLE_TO_TEAMMATE,
} from "./posShared";

type Mode = "closed" | "banner" | "chat";

const PANEL_BG = "#19191B";
const RAISED_BG = "#242428";
const AMBER = "#ffbf5f";

interface ChatMessage {
  id: string;
  from: "ai" | "user";
  text: string;
}

function findAlertByName(query: string, alerts: PosAlert[]): PosAlert | undefined {
  const q = query.toLowerCase();
  return alerts.find((a) => q.includes(a.distributor.toLowerCase()) || a.distributor.toLowerCase().includes(q.trim()));
}

function replyFor(question: string, alerts: PosAlert[]): string {
  const match = findAlertByName(question, alerts);
  if (match) {
    const latestNote = match.notes[0];
    return `${match.distributor} (${match.branch}): ${TYPE_LABEL[match.type]}, ${match.daysSince} days since last file, cadence ${match.cadence}. ${
      latestNote ? `Latest note — "${latestNote.text}"` : "No notes logged yet — this one hasn't been triaged."
    }`;
  }
  if (/vda|cutoff/i.test(question)) {
    const critical = alerts.filter((a) => a.severity === "critical");
    return `VDA cutoff risk: ${critical.length} critical distributor${critical.length === 1 ? "" : "s"} still missing files — ${critical
      .map((a) => `${a.distributor} (${a.daysSince}d)`)
      .join(", ")}. Recommend resolving before invoicing closes.`;
  }
  const critical = alerts.filter((a) => a.severity === "critical").length;
  const warning = alerts.filter((a) => a.severity === "warning").length;
  return `Right now there are ${critical} critical and ${warning} warning POS alerts open. Ask me about a specific distributor, or say "VDA cutoff risk" for the invoicing-deadline view.`;
}

const NOTE_TYPE_STYLE: Record<string, string> = {
  action: "bg-[#038487]/20 text-[#6fe3e3]",
  context: "bg-[#1a7a4c]/25 text-[#74e0a8]",
  status: "bg-white/10 text-white/60",
};

function AlertView({
  alert,
  onAddNote,
}: {
  alert: PosAlert;
  onAddNote?: (alertId: string, note: Note) => void;
}) {
  const [composeMode, setComposeMode] = useState<"triage" | "compose" | null>(alert.notes.length === 0 ? "triage" : null);
  const [noteType, setNoteType] = useState<"status" | "action" | "context">("status");
  const [text, setText] = useState("");
  const [mentionQuery, setMentionQuery] = useState<string | null>(null);
  const [mentionStart, setMentionStart] = useState<number | null>(null);
  const [mentionActiveIndex, setMentionActiveIndex] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const mentionSuggestions = useMemo(() => {
    if (mentionQuery === null) return [];
    const q = mentionQuery.toLowerCase();
    return TEAMMATES.filter((name) => name.toLowerCase().includes(q) || TEAMMATE_HANDLES[name].includes(q));
  }, [mentionQuery]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);
    const cursor = e.target.selectionStart ?? value.length;
    const upToCursor = value.slice(0, cursor);
    const match = upToCursor.match(/@([a-zA-Z]*)$/);
    if (match) {
      setMentionQuery(match[1]);
      setMentionStart(cursor - match[1].length - 1);
      setMentionActiveIndex(0);
    } else {
      setMentionQuery(null);
      setMentionStart(null);
    }
  };

  const insertMention = (name: string) => {
    if (mentionStart === null || mentionQuery === null) return;
    const handle = TEAMMATE_HANDLES[name];
    const cursor = mentionStart + 1 + mentionQuery.length;
    const before = text.slice(0, mentionStart);
    const after = text.slice(cursor);
    const newText = `${before}@${handle} ${after}`;
    setText(newText);
    setMentionQuery(null);
    setMentionStart(null);
    const caretPos = before.length + handle.length + 2;
    requestAnimationFrame(() => {
      textareaRef.current?.focus();
      textareaRef.current?.setSelectionRange(caretPos, caretPos);
    });
  };

  const handleTextKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (mentionQuery === null || mentionSuggestions.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setMentionActiveIndex((i) => (i + 1) % mentionSuggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setMentionActiveIndex((i) => (i - 1 + mentionSuggestions.length) % mentionSuggestions.length);
    } else if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      insertMention(mentionSuggestions[mentionActiveIndex]);
    } else if (e.key === "Escape") {
      setMentionQuery(null);
      setMentionStart(null);
    }
  };

  const submit = () => {
    if (!text.trim() || !onAddNote) return;
    const handleMatches = [...text.matchAll(/@([a-zA-Z]+)/g)];
    const lastHandle = handleMatches.length ? handleMatches[handleMatches.length - 1][1].toLowerCase() : null;
    const mentionedName = lastHandle ? HANDLE_TO_TEAMMATE[lastHandle] : undefined;
    onAddNote(alert.id, {
      id: `n-${Date.now()}`,
      type: noteType,
      text: text.trim(),
      author: CURRENT_USER,
      mention: mentionedName,
      timestamp: "just now",
    });
    setText("");
    setComposeMode(null);
  };

  return (
    <div className="flex-1 overflow-auto px-[14px] py-[12px] flex flex-col gap-[12px]" style={{ background: PANEL_BG }}>
      <div className="flex items-center gap-[8px]">
        <StatusBadge status={alert.status} />
        <span className="text-[11px] text-white/45">
          {alert.branch} · {TYPE_LABEL[alert.type]} · {alert.daysSince}d · {alert.cadence}
        </span>
      </div>

      {alert.notes.length > 0 && (
        <div className="flex flex-col gap-[10px]">
          <p className="text-[11px] font-semibold text-white/55 uppercase tracking-wide">Past notes</p>
          {alert.notes.map((n) => (
            <div key={n.id} className="border border-white/10 rounded-[8px] p-[10px] flex flex-col gap-[6px]" style={{ background: RAISED_BG }}>
              <div className="flex items-center justify-between">
                <span
                  className={`px-[6px] py-[1px] rounded-[4px] text-[10px] font-['Lato:Bold',sans-serif] uppercase tracking-wide ${NOTE_TYPE_STYLE[n.type]}`}
                >
                  {n.type === "action" ? "Action required" : n.type === "context" ? "Context / no action" : "Status update"}
                </span>
                <span className="text-[11px] text-white/40">{n.timestamp}</span>
              </div>
              <p className="text-[12px] text-white/85 leading-[17px]">{n.text}</p>
              <div className="flex items-center justify-between text-[11px] text-white/45">
                <span>— {n.author}</span>
                {n.mention && (
                  <span className="flex items-center gap-[2px] font-semibold" style={{ color: AMBER }}>
                    <AtSign size={11} /> {n.mention}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {composeMode === "triage" && (
        <div className="border border-white/10 rounded-[8px] p-[12px] flex flex-col gap-[8px]" style={{ background: RAISED_BG }}>
          <p className="text-[12px] font-semibold text-white">No prior notes — is this a real issue?</p>
          <div className="flex gap-[6px]">
            <button
              onClick={() => {
                setNoteType("action");
                setComposeMode("compose");
              }}
              className="flex-1 px-[8px] py-[7px] rounded-[8px] text-[11px] font-semibold text-white"
              style={{ background: "#c0342d" }}
            >
              Yes — needs attention
            </button>
            <button
              onClick={() => {
                setNoteType("context");
                setComposeMode("compose");
              }}
              className="flex-1 px-[8px] py-[7px] rounded-[8px] text-[11px] font-semibold text-[#74e0a8] border border-[#1a7a4c]/60"
            >
              No — false positive
            </button>
          </div>
        </div>
      )}

      {composeMode === "compose" && (
        <div className="border border-white/10 rounded-[8px] p-[12px] flex flex-col gap-[8px]" style={{ background: RAISED_BG }}>
          <div className="flex gap-[4px] flex-wrap">
            {(["status", "action", "context"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setNoteType(t)}
                className={`px-[7px] py-[4px] rounded-[6px] text-[10px] font-semibold ${
                  noteType === t ? "text-[#092425]" : "bg-white/8 text-white/55"
                }`}
                style={noteType === t ? { background: AMBER } : undefined}
              >
                {t === "status" ? "Status update" : t === "action" ? "Action required" : "Context / do not action"}
              </button>
            ))}
          </div>
          <div className="relative">
            <textarea
              ref={textareaRef}
              value={text}
              onChange={handleTextChange}
              onKeyDown={handleTextKeyDown}
              onBlur={() => {
                setTimeout(() => {
                  setMentionQuery(null);
                  setMentionStart(null);
                }, 120);
              }}
              placeholder="What did you find? What should happen next? Type @ to mention someone."
              className="w-full border border-white/15 rounded-[8px] p-[8px] text-[12px] min-h-[64px] resize-none text-white placeholder:text-white/35 outline-none"
              style={{ background: PANEL_BG }}
            />
            {mentionQuery !== null && mentionSuggestions.length > 0 && (
              <div className="absolute left-[8px] right-[8px] bottom-full mb-[4px] border border-white/15 rounded-[8px] shadow-lg overflow-hidden z-10" style={{ background: RAISED_BG }}>
                {mentionSuggestions.map((name, i) => (
                  <button
                    key={name}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      insertMention(name);
                    }}
                    className={`w-full flex items-center gap-[8px] px-[10px] py-[7px] text-left text-[12px] ${
                      i === mentionActiveIndex ? "bg-white/10" : ""
                    }`}
                  >
                    <span className="h-[20px] w-[20px] rounded-full text-[#092425] text-[10px] font-semibold flex items-center justify-center shrink-0" style={{ background: AMBER }}>
                      {name.charAt(0)}
                    </span>
                    <span className="text-white font-medium">{name}</span>
                    <span className="text-white/45">@{TEAMMATE_HANDLES[name]}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex justify-end gap-[6px]">
            <button onClick={() => setComposeMode(null)} className="px-[10px] py-[5px] rounded-[8px] text-[11px] text-white/50">
              Cancel
            </button>
            <button
              onClick={submit}
              className="px-[10px] py-[5px] rounded-[8px] text-[11px] font-semibold text-[#092425]"
              style={{ background: AMBER }}
            >
              Add note
            </button>
          </div>
        </div>
      )}

      {composeMode === null && (
        <button
          onClick={() => setComposeMode("compose")}
          className="px-[10px] py-[8px] rounded-[8px] text-[12px] font-semibold text-white border border-white/15 hover:bg-white/10"
        >
          + Add another note
        </button>
      )}
    </div>
  );
}

export default function RevupAiAgent({
  alerts,
  onOpenAlert,
  activeAlertId = null,
  onBackToAgent,
  onAddNote,
}: {
  alerts: PosAlert[];
  onOpenAlert: (alertId: string) => void;
  activeAlertId?: string | null;
  onBackToAgent?: () => void;
  onAddNote?: (alertId: string, note: Note) => void;
}) {
  const [mode, setMode] = useState<Mode>(activeAlertId ? "chat" : "closed");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (activeAlertId) setMode("chat");
  }, [activeAlertId]);

  const criticalAlerts = useMemo(() => alerts.filter((a) => a.severity === "critical"), [alerts]);
  const activeAlert = activeAlertId ? alerts.find((a) => a.id === activeAlertId) ?? null : null;

  const summaryLine = useMemo(() => {
    return `${criticalAlerts.length} critical alerts detected: ${criticalAlerts
      .map((a) => `${a.distributor} (${a.daysSince}d)`)
      .join(", ")}.`;
  }, [criticalAlerts]);

  const openChat = () => {
    setMode("chat");
    if (messages.length === 0) {
      setMessages([{ id: "m0", from: "ai", text: `POS File Report — ${summaryLine} Ask me for details on any of them, or how they affect the VDA cutoff.` }]);
    }
  };

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: ChatMessage = { id: `u-${Date.now()}`, from: "user", text };
    const aiMsg: ChatMessage = { id: `a-${Date.now()}`, from: "ai", text: replyFor(text, alerts) };
    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInput("");
  };

  const closeEntirely = () => {
    setMode("closed");
    onBackToAgent?.();
  };

  return (
    <div className="fixed bottom-[20px] right-[20px] z-[90] flex flex-col items-end gap-[12px]" style={{ fontFamily: "'Lato', sans-serif" }}>
      {mode === "banner" && (
        <div className="w-[300px] rounded-[12px] shadow-2xl p-[16px] flex flex-col gap-[10px] border border-white/10" style={{ background: PANEL_BG }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[8px] text-white">
              <Bot size={16} style={{ color: AMBER }} />
              <p className="text-[12px] font-bold uppercase tracking-wide">POS File Report</p>
            </div>
            <button onClick={() => setMode("closed")} className="text-white/60 hover:text-white">
              <X size={14} />
            </button>
          </div>
          <div className="flex items-start gap-[6px]">
            <AlertTriangle size={14} style={{ color: AMBER }} className="mt-[2px] shrink-0" />
            <p className="text-[12px] text-white/85 leading-[16px]">{summaryLine} Immediate attention needed before VDA cutoff.</p>
          </div>
          <button
            onClick={openChat}
            className="w-full text-center px-[10px] py-[8px] rounded-[8px] text-[12px] font-semibold text-[#092425]"
            style={{ background: AMBER }}
          >
            View in AI Agent
          </button>
        </div>
      )}

      {mode === "chat" && (
        <div className="w-[340px] h-[440px] rounded-[14px] shadow-2xl flex flex-col overflow-hidden border border-white/10" style={{ background: PANEL_BG }}>
          <div className="flex items-center justify-between px-[16px] py-[12px] border-b border-white/10 shrink-0" style={{ background: PANEL_BG }}>
            {activeAlert ? (
              <div className="flex items-center gap-[10px] text-white min-w-0">
                <button onClick={() => onBackToAgent?.()} className="text-white/60 hover:text-white shrink-0" title="Back to AI Agent">
                  <ArrowLeft size={16} />
                </button>
                <SeverityDot severity={activeAlert.severity} />
                <p className="text-[13px] font-semibold truncate">{activeAlert.distributor}</p>
              </div>
            ) : (
              <div className="flex items-center gap-[8px] text-white">
                <Bot size={16} style={{ color: AMBER }} />
                <p className="text-[13px] font-semibold">RevUP AI Agent</p>
              </div>
            )}
            <button onClick={closeEntirely} className="text-white/60 hover:text-white shrink-0">
              <X size={16} />
            </button>
          </div>

          {activeAlert ? (
            <AlertView key={activeAlert.id} alert={activeAlert} onAddNote={onAddNote} />
          ) : (
            <>
              <div className="flex-1 overflow-auto px-[14px] py-[12px] flex flex-col gap-[10px]" style={{ background: PANEL_BG }}>
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`text-[12px] leading-[16px] rounded-[10px] px-[10px] py-[8px] max-w-[85%] ${
                      m.from === "ai" ? "border border-white/10 text-white/85 self-start" : "text-[#092425] self-end font-medium"
                    }`}
                    style={m.from === "ai" ? { background: RAISED_BG } : { background: AMBER }}
                  >
                    {m.text}
                  </div>
                ))}

                <div className="flex flex-col gap-[6px] mt-[4px]">
                  {criticalAlerts.map((a) => (
                    <button
                      key={a.id}
                      onClick={() => onOpenAlert(a.id)}
                      className="flex items-center justify-between px-[10px] py-[7px] rounded-[8px] text-[12px] font-medium text-white border border-white/15 hover:bg-white/10"
                    >
                      Take me to {a.distributor}
                      <ArrowRight size={13} className="text-white/50" />
                    </button>
                  ))}
                  <button
                    onClick={() => send("VDA cutoff risk")}
                    className="flex items-center justify-between px-[10px] py-[7px] rounded-[8px] text-[12px] font-medium text-[#ff9a90] border border-[#c0342d]/50 hover:bg-[#c0342d]/15"
                  >
                    VDA cutoff risk
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-[8px] p-[10px] border-t border-white/10">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") send(input);
                  }}
                  placeholder="Ask about file health, VDA risk, anomalies…"
                  className="flex-1 border border-white/15 rounded-[8px] px-[10px] py-[7px] text-[12px] outline-none text-white placeholder:text-white/35"
                  style={{ background: RAISED_BG }}
                />
                <button
                  onClick={() => send(input)}
                  className="shrink-0 h-[32px] w-[32px] rounded-[8px] flex items-center justify-center"
                  style={{ background: AMBER }}
                >
                  <Send size={14} className="text-[#092425]" />
                </button>
              </div>
            </>
          )}
        </div>
      )}

      <button
        onClick={() => setMode((m) => (m === "closed" ? "banner" : "closed"))}
        title="RevUP AI Agent"
        className="h-[52px] w-[52px] rounded-full shadow-lg flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #ffbf5f, #f5821f)" }}
      >
        <Bot size={24} className="text-[#092425]" />
      </button>
    </div>
  );
}
