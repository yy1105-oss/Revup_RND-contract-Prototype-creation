import { useEffect, useState, lazy, Suspense, startTransition } from "react";
import CreateContractPanel from "./CreateContractPanel";
import PosDashboard from "./PosDashboard";
import RevupAiAgent from "./RevupAiAgent";
import AppSidebar from "./AppSidebar";
import { posHomeBridge } from "./posHomeBridge";
import { INITIAL_ALERTS } from "./posShared";
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
  | "notify-modal"
  | "pos-dashboard";

const SCREENS: { id: Screen; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "my-contracts", label: "My Contracts" },
  { id: "contract-operator", label: "Contract (Programs)" },
  { id: "a45", label: "Contract (Submit)" },
  { id: "item-tool", label: "Item Tool" },
  { id: "item-tool-alt", label: "Item Tool (Alt)" },
  { id: "browse-catalog", label: "Browse Catalog" },
  { id: "notify-modal", label: "Notify Modal" },
  { id: "pos-dashboard", label: "POS Reporting" },
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

function SidebarOverlay({
  activeSub,
  onNavigateHome,
  onNavigatePosDashboard,
  onNavigateContracts,
}: {
  activeSub?: "contracts" | "pos-dashboard";
  onNavigateHome: () => void;
  onNavigatePosDashboard: () => void;
  onNavigateContracts: () => void;
}) {
  return (
    <div className="absolute top-0 left-0 h-full" style={{ zIndex: 30 }}>
      <AppSidebar
        activeSub={activeSub}
        onNavigateHome={onNavigateHome}
        onNavigatePosDashboard={onNavigatePosDashboard}
        onNavigateContracts={onNavigateContracts}
      />
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const navigate = (s: Screen) => startTransition(() => setScreen(s));
  const [createPanelOpen, setCreatePanelOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const navOffset = navVisible ? 36 : 0;
  const [posFocusAlertId, setPosFocusAlertId] = useState<string | null>(null);

  useEffect(() => {
    posHomeBridge.onViewAll = () => {
      setPosFocusAlertId(null);
      navigate("pos-dashboard");
    };
    posHomeBridge.onOpenPosDashboardNav = () => {
      setPosFocusAlertId(null);
      navigate("pos-dashboard");
    };
    posHomeBridge.onOpenAlert = (alertId: string) => {
      setPosFocusAlertId(alertId);
      navigate("pos-dashboard");
    };
    posHomeBridge.onOpenContracts = () => navigate("my-contracts");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToPosAlert = (alertId: string) => {
    setPosFocusAlertId(alertId);
    navigate("pos-dashboard");
  };

  const goToPosDashboard = () => {
    setPosFocusAlertId(null);
    navigate("pos-dashboard");
  };
  const goHome = () => navigate("home");
  const goToContracts = () => navigate("my-contracts");

  return (
    <div className="size-full relative" style={{ fontFamily: "'Lato', sans-serif" }}>
      {navVisible && <PrototypeNav current={screen} onSelect={navigate} />}

      {/* Hidden toggle for the prototype nav bar — click this corner to bring it back */}
      <div
        onClick={() => setNavVisible((v) => !v)}
        title="Toggle prototype nav"
        style={{ position: "fixed", top: 0, left: 0, width: 14, height: 14, zIndex: 100, cursor: "pointer" }}
      />

      {/* Offset for nav bar only when visible */}
      <div className={navVisible ? "pt-[36px] size-full" : "size-full"}>
        <div className="size-full overflow-auto">
          {screen === "home" && (
            <div className="relative" style={{ width: "100%", height: `calc(100vh - ${navOffset}px)` }}>
              <HomePage />
            </div>
          )}

          {screen === "my-contracts" && (
            <Suspense fallback={<div className="size-full flex items-center justify-center text-sm" style={{ color: "#687576" }}>Loading…</div>}>
              <div className="relative" style={{ width: "100%", height: `calc(100vh - ${navOffset}px)`, overflow: "hidden" }}>
                <MyContract />
                <SidebarOverlay activeSub="contracts" onNavigateHome={goHome} onNavigatePosDashboard={goToPosDashboard} onNavigateContracts={goToContracts} />

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
              style={{ width: "100%", height: `calc(100vh - ${navOffset}px)` }}
            >
              <AContractPageOperator />
              <SidebarOverlay onNavigateHome={goHome} onNavigatePosDashboard={goToPosDashboard} onNavigateContracts={goToContracts} />
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
              style={{ width: "100%", height: `calc(100vh - ${navOffset}px)` }}
            >
              <BackToProgramList />
            </div>
          )}
          {screen === "item-tool" && (
            <div
              className="relative"
              style={{ width: "100%", height: `calc(100vh - ${navOffset}px)` }}
            >
              <B8 />
              <SidebarOverlay onNavigateHome={goHome} onNavigatePosDashboard={goToPosDashboard} onNavigateContracts={goToContracts} />
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
              <div className="relative" style={{ width: "100%", height: `calc(100vh - ${navOffset}px)` }}>
                <B8_1 />
                <SidebarOverlay onNavigateHome={goHome} onNavigatePosDashboard={goToPosDashboard} onNavigateContracts={goToContracts} />
              </div>
            </Suspense>
          )}
          {screen === "a45" && (
            <div
              className="relative"
              style={{ width: "100%", height: `calc(100vh - ${navOffset}px)` }}
            >
              <A45 />
              <SidebarOverlay onNavigateHome={goHome} onNavigatePosDashboard={goToPosDashboard} onNavigateContracts={goToContracts} />
              {/* Submit → Item Tool */}
              <div
                className="absolute cursor-pointer"
                style={{ top: 97, right: 16, width: 96, height: 24, zIndex: 10 }}
                onClick={() => navigate("item-tool")}
                title="Go to: Item Tool"
              />
            </div>
          )}
          {screen === "pos-dashboard" && (
            <div className="relative" style={{ width: "100%", height: `calc(100vh - ${navOffset}px)` }}>
              <PosDashboard onExitHome={() => navigate("home")} onNavigateContracts={goToContracts} focusAlertId={posFocusAlertId} />
            </div>
          )}
          {screen === "notify-modal" && (
            <div
              className="relative"
              style={{ width: "100%", height: `calc(100vh - ${navOffset}px)` }}
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

      {screen === "home" && <RevupAiAgent alerts={INITIAL_ALERTS} onOpenAlert={goToPosAlert} />}
    </div>
  );
}
