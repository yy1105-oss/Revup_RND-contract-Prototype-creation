import { useState } from "react";
import svgPaths from "@/imports/HomePage/svg-6q0k2xpeut";

function NavIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Product Icon">
      {children}
    </div>
  );
}

function NavRow({
  icon,
  label,
  chevron = false,
  expanded = false,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  chevron?: boolean;
  expanded?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`h-[48px] relative shrink-0 w-full ${onClick ? "cursor-pointer hover:bg-[#f3f4f4]" : ""}`}
    >
      {chevron && (
        <div
          className="absolute right-[16px] overflow-clip size-[16px] top-[16px] transition-transform"
          style={{ transform: expanded ? "rotate(180deg)" : "none" }}
          data-name="chevron-down"
        >
          <div className="absolute inset-[33.33%_20.83%_32.1%_20.83%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 5.53061">
              <path d={svgPaths.p18d92800} fill="var(--fill-0, #687576)" id="Vector" />
            </svg>
          </div>
        </div>
      )}
      <div className="absolute content-stretch flex gap-[16px] items-center left-[16px] top-[12px]">
        <NavIcon>{icon}</NavIcon>
        <p className="font-['Clan_OT:Medium',sans-serif] leading-[normal] not-italic text-[#092425] text-[12px] tracking-[-0.24px] whitespace-nowrap">{label}</p>
      </div>
    </div>
  );
}

function SubRow({ label, active = false, onClick }: { label: string; active?: boolean; onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`group flex flex-col gap-[10px] h-[32px] items-start justify-center px-[8px] py-[4px] relative shrink-0 w-full ${onClick ? "cursor-pointer" : ""}`}
    >
      <div
        className={`h-[32px] absolute left-[8px] rounded-[8px] w-[calc(100%-16px)] ${
          active ? "bg-[#f3f4f4]" : "bg-transparent group-hover:bg-[#f3f4f4]"
        }`}
      />
      <p className="absolute left-[52px] font-['Lato:Regular',sans-serif] not-italic text-[#092425] text-[12px] leading-[14px] top-1/2 -translate-y-1/2">
        {label}
      </p>
    </div>
  );
}

export default function AppSidebar({
  activeSub,
  onNavigateHome,
  onNavigatePosDashboard,
  onNavigateContracts,
}: {
  activeSub?: "contracts" | "pos-dashboard";
  onNavigateHome?: () => void;
  onNavigatePosDashboard?: () => void;
  onNavigateContracts?: () => void;
}) {
  const [expandedSection, setExpandedSection] = useState<"contract" | "reports" | null>(
    activeSub === "contracts" ? "contract" : activeSub === "pos-dashboard" ? "reports" : null
  );

  const toggleSection = (section: "contract" | "reports") => {
    setExpandedSection((s) => (s === section ? null : section));
  };

  return (
    <div className="bg-white h-full relative shrink-0 w-[240px]" data-name="global-nav-sodexo">
      <div className="overflow-clip relative rounded-[inherit] size-full flex flex-col">
        <div
          className="h-[248px] overflow-clip relative shrink-0 w-full flex flex-col items-center justify-center gap-[24px] cursor-pointer"
          data-name="Nav Header"
          onClick={onNavigateHome}
        >
          <svg viewBox="0 0 182 58.7612" className="w-[140px] h-[45px]" fill="none">
            <path d={svgPaths.p3e230d00} fill="#2B3797" />
            <path d={svgPaths.p2ae8df00} fill="#2B3797" />
            <path d={svgPaths.p196a5f00} fill="#2B3797" />
            <path d={svgPaths.p378a1300} fill="#2B3797" />
            <path d={svgPaths.p98a4f00} fill="#2B3797" />
            <path d={svgPaths.pfdfd300} fill="#2B3797" />
            <path d={svgPaths.p38bf8000} fill="#E3362B" />
            <path d={svgPaths.p2753d200} fill="#2B3797" />
          </svg>
          <p className="font-['Lato:Bold',sans-serif] not-italic text-[#687576] text-[10px] text-center tracking-[0.4px] uppercase">SODEXO USA MD</p>
        </div>

        <div className="flex items-center justify-center px-[2px] py-[4px] w-full">
          <div className="h-px w-full bg-[#dfe2e2]" />
        </div>

        <div className="flex flex-col items-start justify-start relative shrink-0 w-full overflow-auto flex-1">
          <NavRow
            label="Home"
            onClick={onNavigateHome}
            icon={
              <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 18 18.0035">
                <path d={svgPaths.p3f619f70} fill="var(--fill-0, #2C3A3A)" />
              </svg>
            }
          />
          <NavRow
            label="Spend"
            chevron
            icon={
              <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 14.4004 18">
                <path d={svgPaths.pdcd9f00} fill="var(--fill-0, #2C3A3A)" />
              </svg>
            }
          />
          <NavRow
            label="Contract"
            chevron
            expanded={expandedSection === "contract"}
            onClick={() => toggleSection("contract")}
            icon={
              <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 16.7143 18">
                <path d={svgPaths.p58c0300} fill="var(--fill-0, #2C3A3A)" />
              </svg>
            }
          />
          {expandedSection === "contract" && (
            <>
              <SubRow label="Contracts" active={activeSub === "contracts"} onClick={onNavigateContracts} />
              <SubRow label="Price Report" />
              <SubRow label="Program Admin" />
            </>
          )}
          <NavRow
            label="Reports"
            chevron
            expanded={expandedSection === "reports"}
            onClick={() => toggleSection("reports")}
            icon={
              <svg className="absolute block inset-[3px] size-[14px]" fill="none" viewBox="0 0 14 14">
                <rect x="1" y="8" width="3" height="5" rx="0.5" fill="#2C3A3A" />
                <rect x="5.5" y="4" width="3" height="9" rx="0.5" fill="#2C3A3A" />
                <rect x="10" y="1" width="3" height="12" rx="0.5" fill="#2C3A3A" />
              </svg>
            }
          />
          {expandedSection === "reports" && (
            <SubRow label="POS Reporting" active={activeSub === "pos-dashboard"} onClick={onNavigatePosDashboard} />
          )}
          <NavRow
            label="Exclusion/Inclusions"
            chevron
            icon={
              <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 12.8438 12.8438">
                <path d={svgPaths.p2e6ed680} stroke="var(--stroke-0, #092425)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59375" />
              </svg>
            }
          />
          <NavRow
            label="Org Management"
            chevron
            icon={
              <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 18 18">
                <path d={svgPaths.p3939ab00} fill="var(--fill-0, #2C3A3A)" />
              </svg>
            }
          />
          <NavRow
            label="Spend Admin"
            chevron
            icon={
              <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 18 15.3">
                <path d={svgPaths.p2b945d20} fill="var(--fill-0, #2C3A3A)" />
              </svg>
            }
          />
          <NavRow
            label="Finance"
            chevron
            icon={
              <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 18 18.0036">
                <path d={svgPaths.p30428680} fill="var(--fill-0, #2C3A3A)" />
              </svg>
            }
          />
          <NavRow
            label="Settings"
            chevron
            icon={
              <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 18 18">
                <path d={svgPaths.p1d475300} fill="var(--fill-0, #2C3A3A)" />
              </svg>
            }
          />
          <NavRow
            label="Support"
            chevron
            icon={
              <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 18 18">
                <path d={svgPaths.pd7f9800} fill="var(--fill-0, #2C3A3A)" />
              </svg>
            }
          />
        </div>

        <div className="bg-white h-[121px] shrink-0 w-full flex flex-col items-center justify-center gap-[8px]" data-name="Nav Footer">
          <div className="flex items-center gap-[6px]">
            <svg viewBox="0 0 172 40" className="w-[86px] h-[20px]" fill="none">
              <path d={svgPaths.p33c86070} fill="#092425" />
              <path d={svgPaths.p2a435ef2} fill="#092425" />
              <path d={svgPaths.p3db4c740} fill="#FFBF5F" />
            </svg>
          </div>
          <p className="font-['Lato:Regular',sans-serif] not-italic text-[#687576] text-[10px] text-center leading-[12px]">
            Copyright iTradeNetwork, Inc. © 2026
          </p>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#dfe2e2] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}
