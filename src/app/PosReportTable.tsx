import { AlertCircle, ArrowDown, ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from "lucide-react";
import { type PosAlert } from "./posShared";

export type Granularity = "Weekly" | "Monthly" | "Quarterly";

export function seededRand(seed: string, salt: number) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  h = (h ^ (salt * 2654435761)) >>> 0;
  h ^= h << 13;
  h >>>= 0;
  h ^= h >>> 17;
  h ^= h << 5;
  h >>>= 0;
  return (h % 100000) / 100000;
}
export function moneyFor(name: string, salt: number, base: number) {
  return Math.round(base * (0.6 + seededRand(name, salt) * 1.8) * 100) / 100;
}
export function fmtMoney(n: number) {
  return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
export function dateOfLastFile(daysSince: number) {
  const d = new Date(Date.now() - daysSince * 86400000);
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

export interface PeriodMetrics {
  dollars: number;
  weight: number;
  cases: number;
}
export function metricsFor(name: string, saltBase: number): PeriodMetrics {
  return {
    dollars: moneyFor(name, saltBase + 1, 500000),
    weight: moneyFor(name, saltBase + 2, 400000),
    cases: moneyFor(name, saltBase + 3, 30000),
  };
}

export const GRANULARITY_KEY = "pos-report-mvp-granularity";
export const PERIOD_LABELS: Record<Granularity, { current: string; previous: string; lastYear: string }> = {
  Weekly: {
    current: "Current Period (12/9/2024 - 12/15/2024)",
    previous: "Previous Period (12/02/2024 - 12/08/2024)",
    lastYear: "Current Period Last Year (12/09/2023 - 12/15/2023)",
  },
  Monthly: {
    current: "Current Period (Dec 2024)",
    previous: "Previous Period (Nov 2024)",
    lastYear: "Current Period Last Year (Dec 2023)",
  },
  Quarterly: {
    current: "Current Period (Q4 2024)",
    previous: "Previous Period (Q3 2024)",
    lastYear: "Current Period Last Year (Q4 2023)",
  },
};

export function getDistributorRows(alerts: PosAlert[], search: string, alertsOnly: boolean) {
  const byDist = new Map<string, PosAlert>();
  alerts.forEach((a) => {
    const existing = byDist.get(a.distributor);
    if (!existing || (a.severity === "critical" && existing.severity !== "critical")) byDist.set(a.distributor, a);
  });
  let rows = Array.from(byDist.values());
  if (search.trim()) {
    const q = search.trim().toLowerCase();
    rows = rows.filter((r) => r.distributor.toLowerCase().includes(q));
  }
  if (alertsOnly) rows = rows.filter((r) => r.status !== "context");
  rows.sort((a, b) => {
    const aHas = a.status !== "context" ? 1 : 0;
    const bHas = b.status !== "context" ? 1 : 0;
    if (aHas !== bHas) return bHas - aHas;
    return a.distributor.localeCompare(b.distributor);
  });
  return rows;
}

export function getBranchRows(alerts: PosAlert[], distributor: string, search: string) {
  let rows = alerts.filter((a) => a.distributor === distributor);
  if (search.trim()) {
    const q = search.trim().toLowerCase();
    rows = rows.filter((r) => r.branch.toLowerCase().includes(q));
  }
  return rows;
}

export function PosReportTable({
  rows,
  mode,
  granularity,
  onRowClick,
  onAlertClick,
}: {
  rows: PosAlert[];
  mode: "distributor" | "branch";
  granularity: Granularity;
  onRowClick?: (distributor: string) => void;
  onAlertClick?: (alert: PosAlert) => void;
}) {
  const labels = PERIOD_LABELS[granularity];
  const drilled = mode === "branch";

  return (
    <table className="text-[12.5px] min-w-[1400px] w-full">
      <thead className="sticky top-0 bg-white z-10">
        <tr className="text-[10.5px] text-[#687576] uppercase tracking-wide">
          <th colSpan={drilled ? 3 : 5} className="border-b border-[#eef0f0] bg-white" />
          <th colSpan={3} className="text-left px-[12px] py-[6px] border-b border-l border-[#eef0f0] font-semibold normal-case bg-white">
            {labels.current}
          </th>
          <th colSpan={3} className="text-left px-[12px] py-[6px] border-b border-l border-[#eef0f0] font-semibold normal-case bg-white">
            {labels.previous}
          </th>
          <th colSpan={3} className="text-left px-[12px] py-[6px] border-b border-l border-[#eef0f0] font-semibold normal-case bg-white">
            {labels.lastYear}
          </th>
        </tr>
        <tr className="bg-[#fafafa] text-[#687576] text-[11px] uppercase tracking-wide">
          <th className="text-left px-[12px] py-[9px] font-semibold w-[36px]"> </th>
          <th className="text-left px-[12px] py-[9px] font-semibold whitespace-nowrap">{drilled ? "Branch" : "Distributor"}</th>
          <th className="text-left px-[12px] py-[9px] font-semibold whitespace-nowrap">{drilled ? "Branch ID" : "Distributor ID"}</th>
          {!drilled && (
            <>
              <th className="text-left px-[12px] py-[9px] font-semibold whitespace-nowrap">Days Since Last File</th>
              <th className="text-left px-[12px] py-[9px] font-semibold whitespace-nowrap">Date Of Last File</th>
            </>
          )}
          <th className="text-left px-[12px] py-[9px] font-semibold border-l border-[#eef0f0] whitespace-nowrap">Sold Dollars</th>
          <th className="text-left px-[12px] py-[9px] font-semibold whitespace-nowrap">Sold Weight</th>
          <th className="text-left px-[12px] py-[9px] font-semibold whitespace-nowrap">Sold Cases</th>
          <th className="text-left px-[12px] py-[9px] font-semibold border-l border-[#eef0f0] whitespace-nowrap">Sold Dollars</th>
          <th className="text-left px-[12px] py-[9px] font-semibold whitespace-nowrap">Sold Weight</th>
          <th className="text-left px-[12px] py-[9px] font-semibold whitespace-nowrap">Sold Cases</th>
          <th className="text-left px-[12px] py-[9px] font-semibold border-l border-[#eef0f0] whitespace-nowrap">Sold Dollars</th>
          <th className="text-left px-[12px] py-[9px] font-semibold whitespace-nowrap">Sold Weight</th>
          <th className="text-left px-[12px] py-[9px] font-semibold whitespace-nowrap">Sold Cases</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          const hasAlert = row.status !== "context";
          const name = drilled ? row.branch : row.distributor;
          const current = metricsFor(name, 10);
          const previous = metricsFor(name, 20);
          const lastYear = metricsFor(name, 30);
          const dollarsDown = current.dollars < previous.dollars;
          return (
            <tr
              key={row.id}
              onClick={() => onRowClick?.(drilled ? row.branch : row.distributor)}
              className="border-t border-[#eef0f0] hover:bg-[#f9fafa] cursor-pointer"
            >
              <td className="px-[12px] py-[10px]">
                {hasAlert && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAlertClick?.(row);
                    }}
                    title="View alert"
                  >
                    <AlertCircle size={15} className="text-[#c0342d]" fill="#fdecec" />
                  </button>
                )}
              </td>
              <td className="px-[12px] py-[10px] font-medium text-[#092425] whitespace-nowrap">{name}</td>
              <td className="px-[12px] py-[10px] text-[#687576] whitespace-nowrap">{drilled ? "064" : 123456}</td>
              {!drilled && (
                <>
                  <td className="px-[12px] py-[10px] text-[#2c3a3a] whitespace-nowrap">
                    <span className="inline-flex items-center gap-[4px]">
                      {row.daysSince}
                      {row.daysSince > 7 && <ArrowDown size={11} className="text-[#c0342d]" />}
                    </span>
                  </td>
                  <td className="px-[12px] py-[10px] text-[#2c3a3a] whitespace-nowrap">{dateOfLastFile(row.daysSince)}</td>
                </>
              )}
              <td className="px-[12px] py-[10px] text-[#2c3a3a] whitespace-nowrap border-l border-[#eef0f0]">
                <span className="inline-flex items-center gap-[4px]">
                  {fmtMoney(current.dollars)}
                  {dollarsDown && <ArrowDown size={11} className="text-[#c0342d]" />}
                </span>
              </td>
              <td className="px-[12px] py-[10px] text-[#2c3a3a] whitespace-nowrap">{fmtMoney(current.weight)}</td>
              <td className="px-[12px] py-[10px] text-[#2c3a3a] whitespace-nowrap">{fmtMoney(current.cases)}</td>
              <td className="px-[12px] py-[10px] text-[#2c3a3a] whitespace-nowrap border-l border-[#eef0f0]">{fmtMoney(previous.dollars)}</td>
              <td className="px-[12px] py-[10px] text-[#2c3a3a] whitespace-nowrap">{fmtMoney(previous.weight)}</td>
              <td className="px-[12px] py-[10px] text-[#2c3a3a] whitespace-nowrap">{fmtMoney(previous.cases)}</td>
              <td className="px-[12px] py-[10px] text-[#2c3a3a] whitespace-nowrap border-l border-[#eef0f0]">{fmtMoney(lastYear.dollars)}</td>
              <td className="px-[12px] py-[10px] text-[#2c3a3a] whitespace-nowrap">{fmtMoney(lastYear.weight)}</td>
              <td className="px-[12px] py-[10px] text-[#2c3a3a] whitespace-nowrap">{fmtMoney(lastYear.cases)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export function PosReportPagination({ count }: { count: number }) {
  return (
    <div className="flex items-center justify-end gap-[18px] px-[14px] py-[10px] text-[12px] text-[#687576] shrink-0 border-t border-[#eef0f0] bg-white">
      <div className="flex items-center gap-[6px]">
        Items Per Page:
        <select className="border border-[#dfe2e2] rounded-[5px] px-[6px] py-[2px] text-[12px]" defaultValue={50}>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
      <span>
        1 to {count} of {count}
      </span>
      <div className="flex items-center gap-[4px]">
        <span>Page 1 of 1</span>
        <ChevronFirst size={14} />
        <ChevronLeft size={14} />
        <ChevronRight size={14} />
        <ChevronLast size={14} />
      </div>
    </div>
  );
}
