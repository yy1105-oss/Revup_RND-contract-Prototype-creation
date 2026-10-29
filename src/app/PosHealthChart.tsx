import { useMemo } from "react";
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Activity, PieChart as PieIcon } from "lucide-react";
import { type PosAlert } from "./posShared";

const GREEN = "#2fbf8f";
const YELLOW = "#ffb43d";
const RED = "#fd6359";

const TREND_DATA = [
  { week: "Jan", within: 11, over: 3, attention: 0 },
  { week: "Feb", within: 11, over: 3, attention: 1 },
  { week: "Mar", within: 9, over: 5, attention: 1 },
  { week: "Apr", within: 10, over: 4, attention: 1 },
  { week: "May", within: 9, over: 5, attention: 2 },
  { week: "Jun", within: 8, over: 5, attention: 2 },
  { week: "Jul", within: 9, over: 4, attention: 2 },
  { week: "Aug", within: 8, over: 5, attention: 3 },
  { week: "Sep", within: 8, over: 6, attention: 3 },
];

export default function PosHealthChart({ alerts }: { alerts: PosAlert[] }) {
  const { needsAttention, overThreshold, withinThreshold, total } = useMemo(() => {
    const byDist = new Map<string, PosAlert>();
    alerts.forEach((a) => {
      const existing = byDist.get(a.distributor);
      if (!existing || (a.severity === "critical" && existing.severity !== "critical")) byDist.set(a.distributor, a);
    });
    const rows = Array.from(byDist.values());
    const needsAttention = rows.filter((r) => r.severity === "critical").length;
    const overThreshold = rows.filter((r) => r.severity === "warning" && r.status !== "context").length;
    const withinThreshold = rows.filter((r) => r.severity === "warning" && r.status === "context").length;
    return { needsAttention, overThreshold, withinThreshold, total: rows.length };
  }, [alerts]);

  const pieData = [
    { name: "Within Threshold", value: withinThreshold, color: GREEN },
    { name: "Over Threshold", value: overThreshold, color: YELLOW },
    { name: "Needs Attention", value: needsAttention, color: RED },
  ];

  return (
    <div className="bg-white border border-[#e7e9ea] rounded-[16px] p-[22px] flex items-stretch gap-[26px] shadow-[0_1px_2px_rgba(16,24,27,0.04),0_8px_24px_rgba(16,24,27,0.04)]">
      <div className="flex flex-col shrink-0 w-[230px]">
        <div className="flex items-center gap-[8px] mb-[14px]">
          <span className="h-[26px] w-[26px] rounded-[8px] flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg,#eafaf3,#e4f6ff)" }}>
            <PieIcon size={13} className="text-[#17876b]" />
          </span>
          <p className="text-[13.5px] font-semibold text-[#092425]">POS Health <span className="text-[#9aa5a6] font-normal">· Current Period</span></p>
        </div>
        <div className="relative flex-1 min-h-[150px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={72} paddingAngle={3} strokeWidth={0} cornerRadius={4}>
                {pieData.map((d) => (
                  <Cell key={d.name} fill={d.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <p className="text-[25px] font-bold text-[#092425] leading-none tracking-[-0.02em]">{total}</p>
            <p className="text-[10px] text-[#8c9798] mt-[3px] font-medium">Distributors</p>
          </div>
        </div>
        <div className="flex flex-col gap-[7px] mt-[16px]">
          {pieData.map((d) => {
            const pct = total ? Math.round((d.value / total) * 100) : 0;
            return (
              <div key={d.name} className="flex items-center justify-between text-[12px] rounded-[8px] px-[9px] py-[6px]" style={{ background: `${d.color}14` }}>
                <span className="flex items-center gap-[7px] text-[#2c3a3a] font-medium">
                  <span className="h-[7px] w-[7px] rounded-full shrink-0" style={{ background: d.color }} />
                  {d.name}
                </span>
                <span className="text-[#092425] font-semibold tabular-nums">
                  {d.value} <span className="text-[#9aa5a6] font-normal">· {pct}%</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-px bg-[#eef0f0] shrink-0" />

      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex items-center justify-between mb-[14px] shrink-0">
          <div className="flex items-center gap-[8px]">
            <span className="h-[26px] w-[26px] rounded-[8px] flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg,#fff4e6,#ffe9ec)" }}>
              <Activity size={13} className="text-[#d9731c]" />
            </span>
            <p className="text-[13.5px] font-semibold text-[#092425]">POS Risk Count Trend</p>
          </div>
          <div className="flex items-center gap-[14px] text-[11px] text-[#687576]">
            <span className="flex items-center gap-[5px]">
              <span className="h-[8px] w-[8px] rounded-full" style={{ background: GREEN }} /> Within Threshold
            </span>
            <span className="flex items-center gap-[5px]">
              <span className="h-[8px] w-[8px] rounded-full" style={{ background: YELLOW }} /> Over threshold
            </span>
            <span className="flex items-center gap-[5px]">
              <span className="h-[8px] w-[8px] rounded-full" style={{ background: RED }} /> Needs Attention
            </span>
          </div>
        </div>
        <div className="flex-1 min-h-[150px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={TREND_DATA} barCategoryGap="28%">
              <CartesianGrid strokeDasharray="3 3" stroke="#eef0f0" vertical={false} />
              <XAxis dataKey="week" tick={{ fontSize: 11, fill: "#687576" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#687576" }} axisLine={false} tickLine={false} />
              <Tooltip cursor={{ fill: "rgba(9,36,37,0.04)" }} />
              <Bar dataKey="within" stackId="a" name="Within Threshold" fill={GREEN} radius={[0, 0, 0, 0]} />
              <Bar dataKey="over" stackId="a" name="Over threshold" fill={YELLOW} />
              <Bar dataKey="attention" stackId="a" name="Needs Attention" fill={RED} radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
