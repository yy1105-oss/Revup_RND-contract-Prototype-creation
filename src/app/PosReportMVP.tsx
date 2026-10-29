import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Calendar, ChevronRight, Filter, MoreVertical, Search, Settings2 } from "lucide-react";
import { type PosAlert } from "./posShared";
import {
  type Granularity,
  type PeriodMetrics,
  GRANULARITY_KEY,
  PERIOD_LABELS,
  PosReportPagination,
  PosReportTable,
  getBranchRows,
  getDistributorRows,
  metricsFor,
} from "./PosReportTable";
import { GroupByField, PosManufacturerTable, getManufacturerRows } from "./PosManufacturerTable";

function AlertPopover({ alert, metrics, onClose }: { alert: PosAlert; metrics: { current: PeriodMetrics; previous: PeriodMetrics }; onClose: () => void }) {
  const lower = metrics.current.dollars < metrics.previous.dollars;
  const lines: string[] = [`Sold dollars ${lower ? "lower" : "higher"} than previous period.`];
  if (alert.daysSince > 7) lines.push(`Days since last file: ${alert.daysSince} days — a week or more late.`);
  if (alert.notes[0]) lines.push(alert.notes[0].text);
  return (
    <div className="fixed inset-0 z-[90]" onClick={onClose}>
      <div
        className="absolute bg-white border border-[#dfe2e2] rounded-[10px] shadow-xl p-[14px] w-[300px]"
        style={{ top: "35%", left: "50%", transform: "translate(-50%, -50%)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-[12px] font-semibold text-[#092425] mb-[8px]">Alert compare from previous month</p>
        <ul className="flex flex-col gap-[6px]">
          {lines.map((l, i) => (
            <li key={i} className="text-[12px] text-[#3a3a38] leading-[17px] flex gap-[6px]">
              <span className="text-[#c0342d]">•</span>
              {l}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TableToolbar({
  search,
  onSearch,
  placeholder,
  alertsOnly,
  onToggleAlertsOnly,
  filterOpen,
  onToggleFilterOpen,
}: {
  search: string;
  onSearch: (v: string) => void;
  placeholder: string;
  alertsOnly: boolean;
  onToggleAlertsOnly: () => void;
  filterOpen: boolean;
  onToggleFilterOpen: () => void;
}) {
  return (
    <div className="flex items-center gap-[10px] px-[12px] py-[8px] border-b border-[#eef0f0] relative shrink-0">
      <button
        onClick={onToggleFilterOpen}
        className={`shrink-0 h-[32px] w-[32px] flex items-center justify-center rounded-[7px] border ${
          filterOpen ? "bg-[#092425] border-[#092425] text-white" : "border-[#dfe2e2] text-[#687576] hover:bg-[#f3f4f4]"
        }`}
        title="Filter"
      >
        <Filter size={15} />
      </button>
      {filterOpen && (
        <div className="absolute top-[40px] left-[12px] z-20 bg-white border border-[#dfe2e2] rounded-[8px] shadow-lg p-[10px] w-[200px]">
          <label className="flex items-center gap-[8px] text-[12.5px] text-[#2c3a3a] cursor-pointer">
            <input type="checkbox" checked={alertsOnly} onChange={onToggleAlertsOnly} />
            Show only rows with alerts
          </label>
        </div>
      )}
      <div className="flex items-center gap-[6px] flex-1 max-w-[340px] border border-[#dfe2e2] rounded-[7px] px-[10px] py-[6px]">
        <Search size={14} className="text-[#687576] shrink-0" />
        <input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder={placeholder}
          className="flex-1 min-w-0 outline-none text-[12.5px] text-[#092425]"
        />
      </div>
      <Settings2 size={16} className="text-[#687576] ml-auto shrink-0" />
    </div>
  );
}

export default function PosReportMVP({ alerts }: { alerts: PosAlert[] }) {
  const [drillDistributor, setDrillDistributor] = useState<string | null>(null);
  const [drillBranch, setDrillBranch] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [alertsOnly, setAlertsOnly] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [popoverAlertId, setPopoverAlertId] = useState<string | null>(null);
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

  const distributorRows = useMemo(() => getDistributorRows(alerts, search, alertsOnly), [alerts, search, alertsOnly]);
  const branchRows = useMemo(() => (drillDistributor ? getBranchRows(alerts, drillDistributor, search) : []), [alerts, drillDistributor, search]);
  const manufacturerRows = useMemo(() => (drillBranch ? getManufacturerRows(search) : []), [drillBranch, search]);

  const popoverAlert = alerts.find((a) => a.id === popoverAlertId) ?? null;

  return (
    <div className="flex-1 min-w-0 min-h-0 flex flex-col gap-[16px] pb-[16px]">
      {/* header */}
      <div className="flex items-center justify-between shrink-0">
        <div className="flex flex-col gap-[2px]">
          {drillBranch ? (
            <>
              <button onClick={() => setDrillBranch(null)} className="flex items-center gap-[8px] text-[20px] font-semibold text-[#092425]">
                <ArrowLeft size={18} /> Grouped by Manufacturer
              </button>
              <p className="text-[13px] text-[#687576] ml-[26px] flex items-center gap-[4px]">
                {drillDistributor}
                <ChevronRight size={13} />
                {drillBranch}
              </p>
            </>
          ) : drillDistributor ? (
            <>
              <button onClick={() => setDrillDistributor(null)} className="flex items-center gap-[8px] text-[20px] font-semibold text-[#092425]">
                <ArrowLeft size={18} /> Branch Level
              </button>
              <p className="text-[13px] text-[#687576] ml-[26px]">{drillDistributor}</p>
            </>
          ) : (
            <p className="text-[20px] font-semibold text-[#092425]">POS Data Report - Distributor Level</p>
          )}
        </div>
        <div className="flex items-center gap-[10px]">
          <span className="text-[12px] text-[#687576]">Period</span>
          <select
            value={granularity}
            onChange={(e) => changeGranularity(e.target.value as Granularity)}
            className="border border-[#dfe2e2] rounded-[7px] px-[10px] py-[7px] text-[12.5px] text-[#092425] flex items-center gap-[6px]"
          >
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Quarterly</option>
          </select>
          <Calendar size={16} className="text-[#687576]" />
          <MoreVertical size={16} className="text-[#687576]" />
          <button className="flex items-center gap-[6px] px-[16px] py-[8px] rounded-[8px] text-[13px] font-semibold text-[#092425]" style={{ background: "#ffbf5f" }}>
            Export
          </button>
        </div>
      </div>

      <div className="bg-white border border-[#dfe2e2] rounded-[10px] overflow-hidden flex-1 min-h-0 flex flex-col">
        {drillBranch && (
          <div className="flex items-center px-[12px] py-[10px] border-b border-[#eef0f0] shrink-0">
            <span className="text-[13px] font-semibold text-[#092425] mr-[16px]">Data</span>
            <GroupByField />
          </div>
        )}
        <TableToolbar
          search={search}
          onSearch={setSearch}
          placeholder={
            drillBranch
              ? "Search By: Manufacturer Name, or Manufacturer ID"
              : drillDistributor
              ? "Search By: Branch Name, or Branch ID"
              : "Search By: Distributor, Distributor ID"
          }
          alertsOnly={alertsOnly}
          onToggleAlertsOnly={() => setAlertsOnly((v) => !v)}
          filterOpen={filterOpen}
          onToggleFilterOpen={() => setFilterOpen((v) => !v)}
        />
        <div className="overflow-auto flex-1 min-h-0">
          {drillBranch ? (
            <PosManufacturerTable rows={manufacturerRows} branchKey={`${drillDistributor}::${drillBranch}`} granularity={granularity} />
          ) : (
            <PosReportTable
              rows={drillDistributor ? branchRows : distributorRows}
              mode={drillDistributor ? "branch" : "distributor"}
              granularity={granularity}
              onRowClick={(name) => (drillDistributor ? setDrillBranch(name) : setDrillDistributor(name))}
              onAlertClick={(alert) => setPopoverAlertId(alert.id)}
            />
          )}
        </div>
        <PosReportPagination count={drillBranch ? manufacturerRows.length : drillDistributor ? branchRows.length : distributorRows.length} />
      </div>

      {popoverAlert && (
        <AlertPopover
          alert={popoverAlert}
          metrics={{ current: metricsFor(popoverAlert.distributor, 10), previous: metricsFor(popoverAlert.distributor, 20) }}
          onClose={() => setPopoverAlertId(null)}
        />
      )}
    </div>
  );
}
