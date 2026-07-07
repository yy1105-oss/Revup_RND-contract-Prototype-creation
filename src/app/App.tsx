import { useState, lazy, Suspense, startTransition } from "react";
import CreateContractPanel from "./CreateContractPanel";
import AContractPageOperator from "@/imports/AContractPageOperator";
import BackToProgramList from "@/imports/BackToProgramList";
import B8 from "@/imports/B8";
import A45 from "@/imports/A45";
import B14 from "@/imports/B14";

import HomePage from "@/imports/HomePage";

const B8_1 = lazy(() => import("@/imports/B8-1"));
const MyContract = lazy(() => import("@/imports/MyContract"));

// MARKER-MAKE-KIT-INVOKED
// MARKER-MAKE-KIT-DISCOVERY-READ

type Screen =
  | "home"
  | "my-contracts"
  | "contract-operator"
  | "browse-catalog"
  | "item-tool"
  | "item-tool-alt"
  | "a45"
  | "notify-modal";

const SCREENS: { id: Screen; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "my-contracts", label: "My Contracts" },
  { id: "contract-operator", label: "Contract (Programs)" },
  { id: "a45", label: "Contract (Submit)" },
  { id: "item-tool", label: "Item Tool" },
  { id: "item-tool-alt", label: "Item Tool (Alt)" },
  { id: "browse-catalog", label: "Browse Catalog" },
  { id: "notify-modal", label: "Notify Modal" },
];

function PrototypeNav({
  current,
  onSelect,
}: {
  current: Screen;
  onSelect: (s: Screen) => void;
}) {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex items-center gap-1 px-3 py-1.5 overflow-x-auto"
      style={{ background: "rgba(9,36,37,0.93)", backdropFilter: "blur(8px)" }}
    >
      <span
        className="text-[10px] font-bold uppercase tracking-widest mr-2 shrink-0"
        style={{ color: "#ffbf5f" }}
      >
        Prototype
      </span>
      {SCREENS.map((s) => (
        <button
          key={s.id}
          onClick={() => onSelect(s.id)}
          className="shrink-0 px-3 py-1 rounded text-[11px] font-semibold transition-colors"
          style={{
            background: current === s.id ? "#ffbf5f" : "rgba(255,255,255,0.08)",
            color: current === s.id ? "#092425" : "#c6d8d8",
            border: current === s.id ? "none" : "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const navigate = (s: Screen) => startTransition(() => setScreen(s));
  const [createPanelOpen, setCreatePanelOpen] = useState(false);

  return (
    <div className="size-full relative" style={{ fontFamily: "'Lato', sans-serif" }}>
      <PrototypeNav current={screen} onSelect={navigate} />

      {/* Offset for nav bar */}
      <div className="pt-[36px] size-full">
        <div className="size-full overflow-auto">
          {screen === "home" && (
            <div className="relative" style={{ width: "100%", height: "calc(100vh - 36px)" }}>
              <HomePage />
              {/* "Contracts" sub-nav item → My Contracts
                  NavHeader(248) + Divider(16) + Home(48) + Spend(48) + Contract(48) = top 408, h=32 */}
              <div
                className="absolute cursor-pointer"
                style={{ top: 408, left: 0, width: 240, height: 32, zIndex: 10 }}
                onClick={() => navigate("my-contracts")}
                title="Contracts → My Contracts"
              />
            </div>
          )}

          {screen === "my-contracts" && (
            <Suspense fallback={<div className="size-full flex items-center justify-center text-sm" style={{ color: "#687576" }}>Loading…</div>}>
              <div className="relative" style={{ width: "100%", height: "calc(100vh - 36px)", overflow: "hidden" }}>
                <MyContract />

                {/* "Create Contract" button hotspot — global header 56px + page-header 56px */}
                {!createPanelOpen && (
                  <div
                    className="absolute cursor-pointer"
                    style={{ top: 60, right: 16, width: 130, height: 36, zIndex: 20 }}
                    onClick={() => setCreatePanelOpen(true)}
                    title="Create Contract"
                  />
                )}

                {/* Interactive Create New Contract panel — all fields start empty */}
                {createPanelOpen && (
                  <div className="absolute right-0 bottom-0 flex flex-col" style={{ top: 0, width: 320, zIndex: 20 }}>
                    <CreateContractPanel onClose={() => setCreatePanelOpen(false)} />
                  </div>
                )}
              </div>
            </Suspense>
          )}
          {screen === "contract-operator" && (
            <div
              className="relative"
              style={{ width: "100%", height: "calc(100vh - 36px)" }}
            >
              <AContractPageOperator />
              {/* Invisible hotspots for navigation */}
              {/* "Notify" button → notify modal */}
              <div
                className="absolute cursor-pointer"
                style={{ top: 97, right: 16, width: 96, height: 24, zIndex: 10 }}
                onClick={() => navigate("notify-modal")}
                title="Go to: Notify Modal"
              />
              {/* "Create Program" button in empty state */}
              <div
                className="absolute cursor-pointer"
                style={{ top: "48%", left: "50%", width: 120, height: 28, zIndex: 10 }}
                onClick={() => navigate("a45")}
                title="Go to: Contract (Submit)"
              />
            </div>
          )}
          {screen === "browse-catalog" && (
            <div
              className="relative"
              style={{ width: "100%", height: "calc(100vh - 36px)" }}
            >
              <BackToProgramList />
            </div>
          )}
          {screen === "item-tool" && (
            <div
              className="relative"
              style={{ width: "100%", height: "calc(100vh - 36px)" }}
            >
              <B8 />
              {/* Browse Catalog button hotspot */}
              <div
                className="absolute cursor-pointer"
                style={{ top: 149, right: 200, width: 120, height: 24, zIndex: 10 }}
                onClick={() => navigate("browse-catalog")}
                title="Go to: Browse Catalog"
              />
            </div>
          )}
          {screen === "item-tool-alt" && (
            <Suspense fallback={<div className="size-full flex items-center justify-center text-sm" style={{ color: "#687576" }}>Loading…</div>}>
              <div className="relative" style={{ width: "100%", height: "calc(100vh - 36px)" }}>
                <B8_1 />
              </div>
            </Suspense>
          )}
          {screen === "a45" && (
            <div
              className="relative"
              style={{ width: "100%", height: "calc(100vh - 36px)" }}
            >
              <A45 />
              {/* Submit → Item Tool */}
              <div
                className="absolute cursor-pointer"
                style={{ top: 97, right: 16, width: 96, height: 24, zIndex: 10 }}
                onClick={() => navigate("item-tool")}
                title="Go to: Item Tool"
              />
            </div>
          )}
          {screen === "notify-modal" && (
            <div
              className="relative"
              style={{ width: "100%", height: "calc(100vh - 36px)" }}
            >
              <B14 />
              {/* Cancel / backdrop → back to contract */}
              <div
                className="absolute inset-0 cursor-pointer"
                style={{ zIndex: 5 }}
                onClick={() => navigate("contract-operator")}
                title="Dismiss modal"
              />
              {/* Continue button — keep on top of backdrop */}
              <div
                className="absolute cursor-pointer"
                style={{ top: "50%", left: "50%", transform: "translate(-30px, 30px)", width: 96, height: 24, zIndex: 20 }}
                onClick={() => navigate("contract-operator")}
                title="Continue → Contract"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
