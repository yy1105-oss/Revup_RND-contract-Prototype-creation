import { useEffect, useMemo, useState } from "react";
import AppSidebar from "./AppSidebar";
import RevupAiAgent from "./RevupAiAgent";
import PosReportMVP from "./PosReportMVP";
import PosHealthChart from "./PosHealthChart";
import { ChevronRight, Filter, Search, Settings2, X } from "lucide-react";
import {
  type Note,
  type PosAlert,
  INITIAL_ALERTS,
} from "./posShared";
import {
  type Granularity,
  GRANULARITY_KEY,
  PosReportPagination,
  PosReportTable,
  getBranchRows,
  getDistributorRows,
} from "./PosReportTable";
import { GroupByField, PosManufacturerTable, getManufacturerRows } from "./PosManufacturerTable";

function ThresholdModal({ onClose }: { onClose: () => void }) {
  const [weeklyGrace, setWeeklyGrace] = useState(1);
  const [monthlyGrace, setMonthlyGrace] = useState(3);
  const [warnPct, setWarnPct] = useState(30);
  const [critPct, setCritPct] = useState(50);

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center" style={{ background: "rgba(9,36,37,0.45)" }} onClick={onClose}>
      <div
        className="bg-white rounded-[12px] w-[420px] p-[24px] flex flex-col gap-[20px]"
        style={{ fontFamily: "'Lato', sans-serif" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <p className="text-[16px] font-semibold text-[#092425]">Configure alert thresholds</p>
          <button onClick={onClose} className="text-[#687576] hover:text-[#092425]">
            <X size={18} />
          </button>
        </div>

        <div className="flex flex-col gap-[8px]">
          <p className="text-[12px] font-semibold text-[#092425] uppercase tracking-wide">Missing POS — grace days</p>
          <label className="flex items-center justify-between text-[13px] text-[#2c3a3a]">
            Weekly cadence
            <input
              type="number"
              value={weeklyGrace}
              onChange={(e) => setWeeklyGrace(Number(e.target.value))}
              className="w-[64px] border border-[#dfe2e2] rounded-[6px] px-[8px] py-[4px] text-right"
            />
          </label>
          <label className="flex items-center justify-between text-[13px] text-[#2c3a3a]">
            Monthly cadence
            <input
              type="number"
              value={monthlyGrace}
              onChange={(e) => setMonthlyGrace(Number(e.target.value))}
              className="w-[64px] border border-[#dfe2e2] rounded-[6px] px-[8px] py-[4px] text-right"
            />
          </label>
        </div>

        <div className="flex flex-col gap-[8px]">
          <p className="text-[12px] font-semibold text-[#092425] uppercase tracking-wide">Volume anomaly — % change</p>
          <label className="flex items-center justify-between text-[13px] text-[#2c3a3a]">
            Warning threshold
            <input
              type="number"
              value={warnPct}
              onChange={(e) => setWarnPct(Number(e.target.value))}
              className="w-[64px] border border-[#dfe2e2] rounded-[6px] px-[8px] py-[4px] text-right"
            />
          </label>
          <label className="flex items-center justify-between text-[13px] text-[#2c3a3a]">
            Critical threshold
            <input
              type="number"
              value={critPct}
              onChange={(e) => setCritPct(Number(e.target.value))}
              className="w-[64px] border border-[#dfe2e2] rounded-[6px] px-[8px] py-[4px] text-right"
            />
          </label>
        </div>

        <div className="flex justify-end gap-[8px]">
          <button onClick={onClose} className="px-[14px] py-[8px] rounded-[8px] text-[13px] text-[#2c3a3a] border border-[#dfe2e2]">
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-[14px] py-[8px] rounded-[8px] text-[13px] font-semibold text-[#092425]"
            style={{ background: "#ffbf5f" }}
          >
            Save thresholds
          </button>
        </div>
      </div>
    </div>
  );
}

type SeverityFilterValue = "critical" | "warning";
type BuyersEdgeFilterValue = "true" | "false";
type AlertStatusFilterValue = "has_alert" | "no_alerts";

function FilterCheckbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex items-center gap-[8px] text-[13px] text-[#2c3a3a] cursor-pointer py-[4px]">
      <input type="checkbox" checked={checked} onChange={onChange} className="h-[14px] w-[14px]" />
      {label}
    </label>
  );
}

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[6px] py-[14px] border-b border-[#eef0f0]">
      <p className="text-[11px] font-semibold text-[#687576] uppercase tracking-wide">{title}</p>
      {children}
    </div>
  );
}

function FilterPanel({
  severityFilter,
  buyersEdgeFilter,
  alertStatusFilter,
  onToggleSeverity,
  onToggleBuyersEdge,
  onToggleAlertStatus,
  onClearAll,
  onClose,
}: {
  severityFilter: Set<SeverityFilterValue>;
  buyersEdgeFilter: Set<BuyersEdgeFilterValue>;
  alertStatusFilter: Set<AlertStatusFilterValue>;
  onToggleSeverity: (v: SeverityFilterValue) => void;
  onToggleBuyersEdge: (v: BuyersEdgeFilterValue) => void;
  onToggleAlertStatus: (v: AlertStatusFilterValue) => void;
  onClearAll: () => void;
  onClose: () => void;
}) {
  const anyActive = severityFilter.size > 0 || buyersEdgeFilter.size > 0 || alertStatusFilter.size > 0;
  return (
    <div className="w-[260px] shrink-0 bg-white border border-[#dfe2e2] rounded-[10px] flex flex-col overflow-y-auto">
      <div className="flex items-center justify-between px-[16px] py-[14px] border-b border-[#eef0f0]">
        <p className="text-[15px] font-semibold text-[#092425]">Filters</p>
        <button onClick={onClose} className="text-[#687576] hover:text-[#092425]">
          <X size={16} />
        </button>
      </div>
      <div className="px-[16px]">
        <FilterSection title="Severity">
          <FilterCheckbox label="Critical" checked={severityFilter.has("critical")} onChange={() => onToggleSeverity("critical")} />
          <FilterCheckbox label="Warning" checked={severityFilter.has("warning")} onChange={() => onToggleSeverity("warning")} />
        </FilterSection>
        <FilterSection title="Buyers Edge">
          <FilterCheckbox label="Included" checked={buyersEdgeFilter.has("true")} onChange={() => onToggleBuyersEdge("true")} />
          <FilterCheckbox label="Not included" checked={buyersEdgeFilter.has("false")} onChange={() => onToggleBuyersEdge("false")} />
        </FilterSection>
        <FilterSection title="Alert">
          <FilterCheckbox label="Has alert" checked={alertStatusFilter.has("has_alert")} onChange={() => onToggleAlertStatus("has_alert")} />
          <FilterCheckbox label="No alerts" checked={alertStatusFilter.has("no_alerts")} onChange={() => onToggleAlertStatus("no_alerts")} />
        </FilterSection>
      </div>
      <div className="px-[16px] py-[12px] shrink-0">
        <button
          onClick={onClearAll}
          disabled={!anyActive}
          className={`text-[12px] font-semibold ${anyActive ? "text-[#038487] hover:underline" : "text-[#c7cfcf] cursor-default"}`}
        >
          Clear all
        </button>
      </div>
    </div>
  );
}

function FilterPill({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <div className="flex items-center gap-[6px] bg-[#f3f4f4] rounded-[16px] pl-[10px] pr-[6px] py-[5px] text-[12px] font-medium text-[#092425] shrink-0">
      {label}
      <button onClick={onRemove} className="text-[#687576] hover:text-[#092425]">
        <X size={12} />
      </button>
    </div>
  );
}

export default function PosDashboard({
  onExitHome,
  onNavigateContracts,
  focusAlertId,
}: {
  onExitHome: () => void;
  onNavigateContracts?: () => void;
  focusAlertId?: string | null;
}) {
  const [alerts, setAlerts] = useState<PosAlert[]>(INITIAL_ALERTS);
  const [drillDistributor, setDrillDistributor] = useState<string | null>(null);
  const [drillBranch, setDrillBranch] = useState<string | null>(null);
  const [selectedAlertId, setSelectedAlertId] = useState<string | null>(null);
  const [severityFilter, setSeverityFilter] = useState<Set<SeverityFilterValue>>(new Set());
  const [buyersEdgeFilter, setBuyersEdgeFilter] = useState<Set<BuyersEdgeFilterValue>>(new Set());
  const [alertStatusFilter, setAlertStatusFilter] = useState<Set<AlertStatusFilterValue>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);
  const [thresholdOpen, setThresholdOpen] = useState(false);
  const [version, setVersion] = useState<"ai" | "mvp">("ai");
  const [granularity, setGranularity] = useState<Granularity>("Monthly");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(GRANULARITY_KEY);
      if (saved === "Weekly" || saved === "Monthly" || saved === "Quarterly") setGranularity(saved);
    } catch {
      /* ignore */
    }
  }, []);
  const changeGranularity = (v: Granularity) => {
    setGranularity(v);
    try {
      localStorage.setItem(GRANULARITY_KEY, v);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    if (!focusAlertId) return;
    const target = alerts.find((a) => a.id === focusAlertId);
    if (!target) return;
    setSeverityFilter(new Set());
    setBuyersEdgeFilter(new Set());
    setAlertStatusFilter(new Set());
    setDrillDistributor(target.distributor);
    setSelectedAlertId(target.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusAlertId]);

  const toggleInSet = <T,>(setter: React.Dispatch<React.SetStateAction<Set<T>>>, value: T) => {
    setter((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  };

  const clearAllFilters = () => {
    setSeverityFilter(new Set());
    setBuyersEdgeFilter(new Set());
    setAlertStatusFilter(new Set());
  };

  const activeFilterPills = useMemo(() => {
    const pills: { key: string; label: string; onRemove: () => void }[] = [];
    severityFilter.forEach((v) =>
      pills.push({
        key: `sev-${v}`,
        label: v === "critical" ? "Severity: Critical" : "Severity: Warning",
        onRemove: () => toggleInSet(setSeverityFilter, v),
      })
    );
    buyersEdgeFilter.forEach((v) =>
      pills.push({
        key: `be-${v}`,
        label: v === "true" ? "Buyers Edge: Included" : "Buyers Edge: Not included",
        onRemove: () => toggleInSet(setBuyersEdgeFilter, v),
      })
    );
    alertStatusFilter.forEach((v) =>
      pills.push({
        key: `alert-${v}`,
        label: v === "has_alert" ? "Alert: Has alert" : "Alert: No alerts",
        onRemove: () => toggleInSet(setAlertStatusFilter, v),
      })
    );
    return pills;
  }, [severityFilter, buyersEdgeFilter, alertStatusFilter]);

  const filtered = useMemo(() => {
    return alerts.filter((a) => {
      if (severityFilter.size > 0 && !severityFilter.has(a.severity)) return false;
      if (buyersEdgeFilter.size > 0 && !buyersEdgeFilter.has(String(a.buyersEdge) as BuyersEdgeFilterValue)) return false;
      if (alertStatusFilter.size > 0) {
        const bucket: AlertStatusFilterValue = a.status === "context" ? "no_alerts" : "has_alert";
        if (!alertStatusFilter.has(bucket)) return false;
      }
      if (searchQuery.trim() && !a.distributor.toLowerCase().includes(searchQuery.trim().toLowerCase())) return false;
      return true;
    });
  }, [alerts, severityFilter, buyersEdgeFilter, alertStatusFilter, searchQuery]);

  const distributorRows = useMemo(() => getDistributorRows(filtered, "", false), [filtered]);
  const branchRows = useMemo(() => (drillDistributor ? getBranchRows(filtered, drillDistributor, "") : []), [filtered, drillDistributor]);
  const manufacturerRows = useMemo(() => (drillBranch ? getManufacturerRows(searchQuery) : []), [drillBranch, searchQuery]);

  const addNote = (alertId: string, note: Note) => {
    setAlerts((prev) =>
      prev.map((a) =>
        a.id === alertId
          ? {
              ...a,
              notes: [note, ...a.notes],
              status: note.type === "action" ? "action_needed" : note.type === "context" ? "context" : a.status,
            }
          : a
      )
    );
  };

  return (
    <div className="flex flex-col h-full" style={{ fontFamily: "'Lato', sans-serif" }} data-name="pos-dashboard-screen">
      {/* Prototype-only version switcher — a separate bar above the whole page, never part of the simulated product UI */}
      <div className="shrink-0 flex items-center gap-[10px] px-[20px] py-[8px]" style={{ background: "#092425" }}>
        <span className="text-[10.5px] font-semibold text-white/50 uppercase tracking-wide">Prototype View</span>
        <div className="flex items-center gap-[4px] bg-white/10 rounded-[8px] p-[3px]">
          {(["ai", "mvp"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setVersion(v)}
              className={`px-[12px] py-[6px] rounded-[6px] text-[12px] font-semibold transition-colors ${
                version === v ? "bg-white text-[#092425]" : "text-white/70 hover:text-white"
              }`}
            >
              {v === "ai" ? "AI-Enhanced" : "MVP (Original)"}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-1 min-h-0">
        <AppSidebar activeSub="pos-dashboard" onNavigateHome={onExitHome} onNavigateContracts={onNavigateContracts} />

        {/* Main */}
        <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
          {version === "mvp" && (
            <div className="flex-1 min-h-0 flex flex-col px-[32px] pt-[20px]">
              <PosReportMVP alerts={alerts} />
            </div>
          )}

          {version === "ai" && (
            <div className="flex-1 min-h-0 flex flex-col gap-[16px] px-[32px] pt-[24px] pb-[16px]">
              {/* Page header — same treatment as Contracts: title left, primary action right */}
              <div className="flex items-center justify-between shrink-0">
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[22px] font-semibold text-[#092425]">POS Reporting</p>
                  <div className="flex items-center gap-[6px] text-[13px] text-[#687576]">
                    <button
                      onClick={() => {
                        setDrillDistributor(null);
                        setDrillBranch(null);
                      }}
                      className={drillDistributor ? "hover:underline" : "text-[#092425] font-semibold"}
                    >
                      All Distributors
                    </button>
                    {drillDistributor && (
                      <>
                        <ChevronRight size={14} />
                        {drillBranch ? (
                          <button onClick={() => setDrillBranch(null)} className="hover:underline">
                            {drillDistributor}
                          </button>
                        ) : (
                          <span className="text-[#092425] font-semibold">{drillDistributor}</span>
                        )}
                      </>
                    )}
                    {drillBranch && (
                      <>
                        <ChevronRight size={14} />
                        <span className="text-[#092425] font-semibold">{drillBranch}</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-[10px]">
                  <span className="text-[12px] text-[#687576]">Period</span>
                  <select
                    value={granularity}
                    onChange={(e) => changeGranularity(e.target.value as Granularity)}
                    className="border border-[#dfe2e2] rounded-[7px] px-[10px] py-[7px] text-[12.5px] text-[#092425]"
                  >
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Quarterly</option>
                  </select>
                  <button
                    onClick={() => setThresholdOpen(true)}
                    className="flex items-center gap-[6px] px-[16px] py-[9px] rounded-[8px] text-[13px] font-semibold text-[#092425]"
                    style={{ background: "#ffbf5f" }}
                  >
                    <Settings2 size={14} />
                    Configure threshold
                  </button>
                </div>
              </div>

              {/* Chart — above the filter/toolbar, matching the home-page layout in both versions */}
              {!drillDistributor && !drillBranch && <div className="shrink-0"><PosHealthChart alerts={filtered} /></div>}

              {/* Content row: optional filter panel + unified toolbar/table card, filling remaining height */}
              <div className="flex items-stretch gap-[16px] flex-1 min-h-0">
                {filterPanelOpen && (
                  <FilterPanel
                    severityFilter={severityFilter}
                    buyersEdgeFilter={buyersEdgeFilter}
                    alertStatusFilter={alertStatusFilter}
                    onToggleSeverity={(v) => toggleInSet(setSeverityFilter, v)}
                    onToggleBuyersEdge={(v) => toggleInSet(setBuyersEdgeFilter, v)}
                    onToggleAlertStatus={(v) => toggleInSet(setAlertStatusFilter, v)}
                    onClearAll={clearAllFilters}
                    onClose={() => setFilterPanelOpen(false)}
                  />
                )}
                <div className="flex-1 min-w-0 bg-white border border-[#dfe2e2] rounded-[10px] overflow-hidden flex flex-col">
                  {drillBranch && (
                    <div className="flex items-center px-[12px] py-[10px] border-b border-[#eef0f0] shrink-0">
                      <span className="text-[13px] font-semibold text-[#092425] mr-[16px]">Data</span>
                      <GroupByField />
                    </div>
                  )}
                  {/* Toolbar — matches Contracts: filter icon + search, with active-filter pills */}
                  <div className="flex items-center gap-[10px] px-[12px] py-[10px] border-b border-[#eef0f0] shrink-0">
                    <button
                      onClick={() => setFilterPanelOpen((v) => !v)}
                      className={`shrink-0 h-[36px] w-[36px] flex items-center justify-center rounded-[8px] border ${
                        filterPanelOpen ? "bg-[#092425] border-[#092425] text-white" : "border-[#dfe2e2] text-[#687576] hover:bg-[#f3f4f4]"
                      }`}
                      title="Filters"
                    >
                      <Filter size={16} />
                    </button>
                    <div className="flex items-center gap-[8px] flex-1 max-w-[340px] border border-[#dfe2e2] rounded-[8px] px-[10px] py-[7px]">
                      <Search size={15} className="text-[#687576] shrink-0" />
                      <input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={drillBranch ? "Search by manufacturer" : "Search by distributor"}
                        className="flex-1 min-w-0 outline-none text-[13px] text-[#092425]"
                      />
                    </div>
                    {activeFilterPills.length > 0 && (
                      <div className="flex items-center gap-[6px] overflow-x-auto">
                        {activeFilterPills.map((p) => (
                          <FilterPill key={p.key} label={p.label} onRemove={p.onRemove} />
                        ))}
                      </div>
                    )}
                    <Settings2 size={16} className="text-[#687576] ml-auto shrink-0" />
                  </div>
                  <div className="overflow-auto flex-1 min-h-0">
                    {drillBranch ? (
                      <PosManufacturerTable rows={manufacturerRows} branchKey={`${drillDistributor}::${drillBranch}`} granularity={granularity} />
                    ) : (
                      <PosReportTable
                        rows={drillDistributor ? branchRows : distributorRows}
                        mode={drillDistributor ? "branch" : "distributor"}
                        granularity={granularity}
                        onRowClick={(name) => (drillDistributor ? setDrillBranch(name) : setDrillDistributor(name))}
                        onAlertClick={(alert) => setSelectedAlertId(alert.id)}
                      />
                    )}
                  </div>
                  <PosReportPagination count={drillBranch ? manufacturerRows.length : drillDistributor ? branchRows.length : distributorRows.length} />
                </div>
              </div>
            </div>
          )}
        </div>

        {version === "ai" && (
          <RevupAiAgent
            alerts={alerts}
            activeAlertId={selectedAlertId}
            onOpenAlert={(id) => setSelectedAlertId(id)}
            onBackToAgent={() => setSelectedAlertId(null)}
            onAddNote={addNote}
          />
        )}
      </div>
      {thresholdOpen && <ThresholdModal onClose={() => setThresholdOpen(false)} />}
    </div>
  );
}
