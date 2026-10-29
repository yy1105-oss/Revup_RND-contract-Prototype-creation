# POS Reporting File Monitor — Product Requirements Document

**Product area:** RevUP / Reports
**Status:** Draft (validated via interactive prototype)
**Owner:** Cameron Worthington (Director, Data Solutions & Analysis)
**Last updated:** 2026-09-11

---

## 1. Summary

POS Reporting is a proactive monitoring system for inbound distributor point-of-sale (POS) files. It replaces manual, reactive checking of a Power BI report with an alert-driven dashboard, an in-product notes/audit trail, and an AI agent that surfaces critical issues before they threaten invoicing.

## 2. Problem Statement

Operations Analysts have no way to know when a distributor stops transmitting files or when volume moves unexpectedly — until downstream invoicing fails, sometimes weeks later. A sudden spike can signal a data error just as much as a drop. There are no automated alerts, no proactive signals, and no shared record of who investigated what.

**Evidence from user research:**

- **Cameron Worthington** (Director, Data Solutions & Analysis) built and maintains the team's current Power BI monitoring dashboard himself. He has zero visibility into the FTP layer, no automated alerting, and can't distinguish a late file from a genuine volume drop — causing false-positive escalations to distributors and account managers.
- **Helen Foster** (Senior/POS Data Analyst) is the daily operator. She manually scans the dashboard every morning after the 6:30am data refresh. Her biggest frustration: no way to know if a colleague already investigated an anomaly, so the team sometimes calls the same distributor twice — which damages the relationship and looks disorganized.

> "If I can't see when the file arrived, I can't know if the problem started today or three weeks ago." — Cameron
> "I check this every morning — but by the time I find the problem, someone may have already called them." — Helen

## 3. Goal

Give analysts and directors a proactive early-warning system — surfacing critical file gaps and unexpected volume swings (up or down) before **VDA cutoff** — paired with a shared notes layer so the team can act on the right information without duplication or delay.

## 4. Glossary

| Term | Definition |
|---|---|
| **VDA cutoff** | The recurring Vendor Data Agreement deadline each billing period, after which POS submissions are treated as final for invoicing. Missing files after this point cause invoicing gaps or force estimates. |
| **Missing POS** | No file received for the active period within the distributor's expected cadence window. |
| **Stale POS** | A file *did* arrive, but its content date is older than the agreed cadence allows — late, not absent. |
| **Coverage gap** | The distributor (parent) has POS data, but one or more branches, or specific days within a period, are missing. |
| **Volume anomaly** | Sold Dollars / Cases / Weight deviates strongly from baseline (prior period or prior year). |
| **Data quality issue** | A file arrived but is unusable — processing errors above threshold, missing required columns, invalid dates, or a duplicate resend. |
| **Buyers Edge** | A GPO/distributor segment known for irregular, low-frequency transmission; flagged separately so its threshold expectations can differ from standard distributors. |

## 5. Personas

### Cameron Worthington — Director, Data Solutions & Analysis
- **Role:** Escalation owner and system architect, not the daily operator.
- **Goals:** Monitor upstream file receipt; detect hard stops early; distinguish real volume drops from late transmission; track run-rate trends by week; ensure all files arrive before VDA cutoff; oversee Helen's team.
- **Needs:** A system that tracks every inbound file (distributor, arrival date, record count, lag from invoice date), detects hard stops automatically, and gives a shared audit trail of who investigated what.

### Helen Foster — Senior POS Data Analyst
- **Role:** Day-to-day operator; first to see issues, first to triage them.
- **Goals:** Catch missing files and anomalies every morning without manually scanning the full report; avoid duplicate outreach; document findings for the next person.
- **Needs:** A note history per distributor/branch, an alert instead of a manual daily scan, and visibility into whether an anomaly already has a known, benign explanation (seasonal closure, EDI migration, manual transmitter) before she contacts anyone.

## 6. MVP Alert / Alarm Types

Five alarm types, evaluated per distributor/branch against a configurable threshold:

| # | Type | Trigger (MVP logic) | Severity |
|---|---|---|---|
| 1 | **Missing POS** | No file received by the expected cadence window + grace period (e.g., weekly: >8 days; monthly: >33 days) | Critical / Warning by days overdue |
| 2 | **Stale POS** | File received, but its content date is older than the cadence allows | Warning |
| 3 | **Coverage gap** | Parent has POS but a branch — or specific days within a period — has none | Warning |
| 4 | **Volume anomaly** | Sold $/Cases/Weight deviates from baseline: Warning >30% change, Critical >50% change (tunable per distributor) | Warning / Critical |
| 5 | **Data quality issue** | File arrived but processed with errors, missing required columns, invalid dates, or is a duplicate resend | Routed to data/mapping team |

Thresholds (grace days per cadence, warning/critical % change) are configurable per the "Configure threshold" control on the dashboard.

## 7. Notes / Annotation System

Every alert carries a running list of notes. Analysts classify each note into one of three types, matching how Cameron's team already communicates:

| Note type | Purpose | Example |
|---|---|---|
| **Status update** | Logged for the record; no action implied | "PFG Broadline resubmission confirmed for tomorrow. Hold off on invoicing until loaded and verified." |
| **Action required** | Someone needs to do something; supports an `@mention` | "Network Services hasn't sent a file in 9 days... Flagging before VDA cutoff. @hfoster please submit a ticket." |
| **Context / do not action** | Explains why an anomaly is expected or already understood, preventing duplicate outreach | "Sodexo Live units showing zero volume this week — stadium events paused. Expected. Not a transmission issue." |

**Triage flow:** when an alert has no prior notes, the first analyst to open it is asked *"Is this a real issue?"* — Yes routes into an Action-required note (with mention); No routes into a Context note and marks the alert as no-action. This is the mechanism that prevents the "someone may have already called them" problem Helen described.

**@Mention autocomplete:** typing `@` in the note composer opens a Slack-style suggestion list of teammates (name + handle, e.g. `@cyang`), filtered as you type, navigable by keyboard. The mention shown on a saved note is derived from the handle typed inline — no separate picker.

## 8. Functional Requirements

### 8.1 Home page — POS Data Alert widget
- Card on the Home dashboard, sorted critical-first, showing distributor, days since last file, and % change vs. prior period.
- Critical rows carry a "Critical" badge.
- "View All →" and each row link into the full report, deep-linking directly to that alert's detail view.

### 8.2 POS Reporting page
- **Header:** page title + breadcrumb (`All Distributors > {Distributor}`), consistent with the visual treatment of other list pages (e.g. Contracts) — primary action button top-right ("Configure threshold").
- **Toolbar:** filter icon + search-by-distributor input + active-filter pills + settings icon, matching the standard list-page toolbar pattern.
- **Filter panel:** opens to the left of the data table (not a modal) with three checkbox sections — **Severity** (Critical/Warning), **Buyers Edge** (Included/Not included), **Alert** (Has alert/No alerts). Selections apply to the table in real time; each active filter renders as a removable pill next to the search bar. "Clear all" resets the panel.
- **Trend chart:** stacked bar of open issues by age bucket (on-time, 0–3, 4–14, 15–60, 60+ days) per week, with a total-open-alerts trend line.
- **Table — Distributor level (default):** one row per distributor with worst severity, alert count, and max days overdue. Clicking drills into Branch level.
- **Table — Branch level:** one row per alert (branch, alert type, severity, days, status). Clicking opens the alert detail panel.
- **Threshold configuration:** modal for grace-day and volume % thresholds (see §6).

### 8.3 Alert detail / notes panel
- Shows distributor, branch, alert type, days since last file, cadence, and current status badge (Unreviewed / Action Needed / Escalated / No Action).
- Full note history, newest first, each tagged by type with author, timestamp, and `@mention` if present.
- Triage flow (§7) for alerts with no prior notes; "+ Add another note" for alerts already triaged.

### 8.4 RevUP AI Agent
- Persistent floating entry point (bottom-right) on Home and POS Reporting.
- **Banner state:** one-line summary of critical alerts with a "View in AI Agent" call to action.
- **Chat state:** welcome summary + one quick-action button per critical alert ("Take me to {distributor}") + a "VDA cutoff risk" quick action + free-text input that answers questions about a named distributor or about VDA risk generally.
- Selecting a distributor (from Home, or from within the chat on the POS Reporting page) opens that alert's detail view **in the same panel**, with a back arrow returning to the agent's default view — not a second, overlapping window.
- On the POS Reporting page, the agent is wired to the live alert/notes state, so it can add notes directly; on Home it hands off navigation to the POS Reporting page instead.

### 8.5 Navigation
- "POS Reporting" lives under a collapsible **Reports** section in the primary left nav, consistent across every screen in the app (not just the pages that happen to embed it natively).
- Nav sections are collapsed by default; the section containing the current page auto-expands; only one section is expanded at a time (accordion).
- A section only shows its "selected" (grey pill) state on an item that is genuinely the active page — never merely because its parent section is expanded.
- Clicking **Home** or the **Sodexo logo** in the left nav returns to the dashboard from anywhere.
- Clicking **Contracts** from within POS Reporting (or any other screen) navigates to the Contracts list.

## 9. Primary User Flow

1. Analyst opens RevUP; the Home page POS Data Alert widget and/or the AI Agent banner surface critical alerts without a manual check.
2. Analyst clicks an alert (from the widget, the AI Agent, or by drilling through the table) and lands on its detail panel.
3. If no prior notes exist, the analyst is asked whether it's a real issue (triage) — this single decision prevents duplicate outreach and produces the first note.
4. If prior notes exist, the analyst reads them first ("check past notes") before deciding whether to act again.
5. Analyst adds a note — status update, action required (with `@mention`), or context — closing the loop for the next person.
6. Before VDA cutoff, Cameron or Helen review the distributor-level table (optionally filtered to Critical + Has alert) to confirm every distributor required for invoicing has a clean status.

## 10. Data Model (prototype reference)

```ts
interface PosAlert {
  id: string;
  distributor: string;
  branch: string;
  buyersEdge: boolean;
  type: "missing" | "stale" | "gap" | "volume" | "quality";
  severity: "critical" | "warning";
  daysSince: number;
  cadence: "daily" | "weekly" | "monthly";
  status: "unreviewed" | "action_needed" | "escalated" | "context";
  notes: Note[];
}

interface Note {
  id: string;
  type: "status" | "action" | "context";
  text: string;
  author: string;
  mention?: string;
  timestamp: string;
}
```

## 11. Non-Functional Requirements

- **Consistency:** the left navigation, sidebar behavior, and page-header treatment must be identical across every screen in the app — no screen should carry a stale or divergent copy of shared chrome.
- **Responsiveness:** card and panel content must reflow within its container rather than being clipped or overflowing into a neighboring element at any reasonable viewport width.
- **Real-time filtering:** filter selections must update the visible data immediately; no separate "Apply" step.

## 12. Out of Scope (MVP)

- Real backend integration for file-arrival detection (FTP/EDI monitoring); the prototype uses representative mock data.
- Automated email/Slack alerting outside the product.
- AI/ML-based seasonal baselining (raised as a "wish" by Cameron; not built in this phase).
- Saved/named filter presets (present in some adjacent RevUP modules; not implemented here).
- Product-mapping progress tracking (raised in discovery; separate workstream).

## 13. Open Questions

- Who formally owns escalation ownership for Integra-managed vs. on-site distributors? (Flagged as unclear in discovery interviews.)
- Should "Buyers Edge" thresholds differ structurally from standard distributors, or only via the existing tunable grace-day/percent settings?
- Does Data Quality routing need its own queue/table distinct from the four other alert types, given it routes to a different team (ITN mapping/data) rather than to distributor outreach?

## 14. Appendix — Source Material

- Internal discovery notes: *POS reporting, Jan 16 2025* (Power BI reference report, 6-alarm-use-case draft).
- User Problem / Goal / Jira description one-pager.
- Persona sheets: Cameron Worthington, Helen Foster (iTradeNetwork Discovery Phase).
- User flow diagrams: Phase 1 (current design) and Phase 1.5/Phase 2 (AI + proactive alerts) prototypes.
- Sample analyst notes used to validate the three note-type taxonomy and to seed prototype mock data.
