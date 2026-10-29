import { ArrowDown, ChevronDown } from "lucide-react";
import { type Granularity, PERIOD_LABELS, fmtMoney, moneyFor } from "./PosReportTable";

export const MANUFACTURERS: { id: string; name: string }[] = [
  { id: "4829", name: "Kraft Heinz" },
  { id: "7351", name: "Kellogg's" },
  { id: "9240", name: "Mars, Incorporated" },
  { id: "3187", name: "Danone" },
  { id: "6573", name: "PepsiCo" },
  { id: "1045", name: "Associated British Foods" },
  { id: "8602", name: "Mondelez" },
  { id: "2938", name: "General Mills" },
  { id: "7154", name: "Johnson & Johnson" },
  { id: "4619", name: "Nestlé" },
  { id: "5370", name: "Unilever" },
  { id: "6891", name: "Procter & Gamble" },
  { id: "2076", name: "Campbell Soup" },
  { id: "8432", name: "Tyson Foods" },
];

interface ManufacturerMetrics {
  dollars: number;
  weight: number;
  cases: number;
}

function metricsForManufacturer(branchKey: string, manufacturer: string, saltBase: number): ManufacturerMetrics {
  const seed = `${branchKey}::${manufacturer}`;
  return {
    dollars: moneyFor(seed, saltBase + 1, 90000),
    weight: moneyFor(seed, saltBase + 2, 70000),
    cases: moneyFor(seed, saltBase + 3, 6000),
  };
}

export function getManufacturerRows(search: string) {
  let rows = MANUFACTURERS;
  if (search.trim()) {
    const q = search.trim().toLowerCase();
    rows = rows.filter((m) => m.name.toLowerCase().includes(q) || m.id.includes(q));
  }
  return rows;
}

export function PosManufacturerTable({
  rows,
  branchKey,
  granularity,
}: {
  rows: { id: string; name: string }[];
  branchKey: string;
  granularity: Granularity;
}) {
  const labels = PERIOD_LABELS[granularity];

  return (
    <table className="text-[12.5px] min-w-[1400px] w-full">
      <thead className="sticky top-0 bg-white z-10">
        <tr className="text-[10.5px] text-[#687576] uppercase tracking-wide">
          <th colSpan={2} className="border-b border-[#eef0f0] bg-white" />
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
          <th className="text-left px-[12px] py-[9px] font-semibold whitespace-nowrap">Manufacturer ID</th>
          <th className="text-left px-[12px] py-[9px] font-semibold whitespace-nowrap">Manufacturer</th>
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
        {rows.map((m) => {
          const current = metricsForManufacturer(branchKey, m.name, 10);
          const previous = metricsForManufacturer(branchKey, m.name, 20);
          const lastYear = metricsForManufacturer(branchKey, m.name, 30);
          const dollarsDown = current.dollars < previous.dollars;
          return (
            <tr key={m.id} className="border-t border-[#eef0f0] hover:bg-[#f9fafa]">
              <td className="px-[12px] py-[10px] text-[#687576] whitespace-nowrap">{m.id}</td>
              <td className="px-[12px] py-[10px] font-medium text-[#092425] whitespace-nowrap">{m.name}</td>
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

export function GroupByField() {
  return (
    <div className="flex items-center gap-[8px]">
      <span className="text-[12px] font-medium text-[#445354]">Group Data By:</span>
      <div className="flex items-center gap-[6px] bg-white border border-[#c6cbcb] rounded-[6px] px-[10px] py-[5px] text-[12px] text-[#092425] font-medium">
        Manufacturer
        <ChevronDown size={14} className="text-[#687576]" />
      </div>
    </div>
  );
}
