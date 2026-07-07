import svgPaths from "@/imports/Frame1000003730/svg-hh5frvxjs";

// ── primitives ────────────────────────────────────────────────────────────────

function ChevronDown() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
      <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
          <path d={svgPaths.p2c861900} fill="#2C3A3A" />
        </svg>
      </div>
    </div>
  );
}

function CalendarIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Calendar">
      <div className="absolute inset-[0_5%_3.57%_5%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 15.4286">
          <path d={svgPaths.p3bd5bf00} fill="#687576" />
        </svg>
      </div>
    </div>
  );
}

function CloseIcon({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="overflow-clip relative shrink-0 size-[16px] cursor-pointer" aria-label="Close panel">
      <div className="absolute inset-[20%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 9.6">
          <path d={svgPaths.p33c88b00} fill="#687576" />
        </svg>
      </div>
    </button>
  );
}

// ── field components ──────────────────────────────────────────────────────────

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="content-stretch flex items-center overflow-clip py-[6px] relative shrink-0 w-full">
      <span className="font-['Lato',sans-serif] font-bold text-[#687576] text-[10px] tracking-[0.48px] uppercase leading-[12px]">
        {label}
      </span>
    </div>
  );
}

function FieldLabel({ label, required }: { label: string; required?: boolean }) {
  return (
    <div className="flex items-center gap-[2px] mb-[4px]">
      <span className="font-['Lato',sans-serif] font-medium text-[#687576] text-[12px] leading-[16px]">{label}</span>
      {required && <span className="font-['Lato',sans-serif] font-medium text-[#e3362b] text-[12px] leading-[12px]">*</span>}
    </div>
  );
}

function SelectField({
  label,
  required,
  value,
  onChange,
  placeholder = "Select…",
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <FieldLabel label={label} required={required} />
      <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
            <ChevronDown />
            <span className="absolute left-[8px] top-1/2 -translate-y-1/2 font-['Lato',sans-serif] font-normal text-[12px] leading-[16px] whitespace-nowrap"
              style={{ color: value ? "#092425" : "#8c9798" }}>
              {value || placeholder}
            </span>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#c6cbcb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function DateField({
  label,
  required,
  value,
}: {
  label: string;
  required?: boolean;
  value: string;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <FieldLabel label={label} required={required} />
      <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-between overflow-clip rounded-[inherit] size-full px-[8px]">
          <span className="font-['Lato',sans-serif] font-normal text-[12px] leading-[16px] whitespace-nowrap"
            style={{ color: value ? "#2c3a3a" : "#8c9798" }}>
            {value || "MM/DD/YYYY"}
          </span>
          <CalendarIcon />
        </div>
        <div aria-hidden className="absolute border border-[#c6cbcb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function TextField({
  label,
  required,
  value,
  placeholder = "",
}: {
  label: string;
  required?: boolean;
  value: string;
  placeholder?: string;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <FieldLabel label={label} required={required} />
      <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full px-[8px]">
          <span className="font-['Lato',sans-serif] font-normal text-[12px] leading-[16px] whitespace-nowrap"
            style={{ color: value ? "#092425" : "#8c9798" }}>
            {value || placeholder}
          </span>
        </div>
        <div aria-hidden className="absolute border border-[#c6cbcb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

// ── main panel ────────────────────────────────────────────────────────────────

interface PanelState {
  contractType: string;
  tradingPartner: string;
  startDate: string;
  endDate: string;
  contractId: string;
  contractName: string;
  currency: string;
  uom: string;
  primaryContact: string;
  secondaryContact: string;
  paymentFrequency: string;
}

const EMPTY: PanelState = {
  contractType: "",
  tradingPartner: "",
  startDate: "",
  endDate: "",
  contractId: "",
  contractName: "",
  currency: "",
  uom: "",
  primaryContact: "",
  secondaryContact: "",
  paymentFrequency: "",
};

export default function CreateContractPanel({ onClose }: { onClose: () => void }) {
  // Fields start empty — values are placeholders only in this prototype
  const fields = EMPTY;

  return (
    <div
      className="bg-white flex flex-col h-full rounded-tl-[10px]"
      style={{ width: 320, borderLeft: "1px solid #dfe2e2", borderTop: "1px solid #dfe2e2" }}
    >
      {/* Header */}
      <div className="h-[56px] relative shrink-0 w-full border-b border-[#dfe2e2]">
        <div className="flex flex-row items-center justify-between px-[16px] h-full">
          <span className="font-['Lato',sans-serif] font-semibold text-[#092425] text-[20px] tracking-[-0.4px] leading-[22px]">
            Create New Contract
          </span>
          <CloseIcon onClick={onClose} />
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="flex flex-col gap-[20px] px-[16px] py-[16px]">

          {/* Customer Information */}
          <div className="flex flex-col gap-[12px]">
            <SectionLabel label="Customer Information" />
            <SelectField label="Contract Type" required value={fields.contractType} onChange={() => {}} />
            <SelectField label="Trading Partner" required value={fields.tradingPartner} onChange={() => {}} />
          </div>

          {/* Contract Details */}
          <div className="flex flex-col gap-[12px]">
            <SectionLabel label="Contract Details" />
            <DateField label="Contract Start Date" required value={fields.startDate} />
            <DateField label="Contract End Date" value={fields.endDate} />
            <TextField label="Contract ID" required value={fields.contractId} placeholder="" />
            <SelectField label="Contract Name" required value={fields.contractName} onChange={() => {}} />
            <SelectField label="Currency" required value={fields.currency} onChange={() => {}} />
            <SelectField label="System Unit Of Measure (UOM)" required value={fields.uom} onChange={() => {}} />
          </div>

          {/* Customer Contacts */}
          <div className="flex flex-col gap-[12px]">
            <SectionLabel label="Customer Contacts" />
            <SelectField label="Primary Contact" required value={fields.primaryContact} onChange={() => {}} />
            <SelectField label="Secondary Contact(s)" value={fields.secondaryContact} onChange={() => {}} placeholder="Select…" />
          </div>

          {/* Payment Method */}
          <div className="flex flex-col gap-[12px]">
            <SectionLabel label="Payment Method" />
            <SelectField label="Payment Frequency" value={fields.paymentFrequency} onChange={() => {}} />
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="bg-white flex gap-[8px] items-center justify-end px-[16px] py-[12px] shrink-0 border-t border-[#dfe2e2]">
        <button
          onClick={onClose}
          className="flex h-[24px] items-center justify-center overflow-clip px-[16px] py-[6px] rounded-[6px] cursor-pointer"
        >
          <span className="font-['Lato',sans-serif] font-semibold capitalize text-[#038487] text-[12px] tracking-[0.24px] leading-[12px]">
            Cancel
          </span>
        </button>
        <button
          className="bg-[#038487] flex h-[24px] items-center justify-center min-w-[96px] overflow-clip px-[16px] py-[6px] rounded-[6px] cursor-pointer"
        >
          <span className="font-['Lato',sans-serif] font-semibold capitalize text-white text-[12px] tracking-[0.24px] leading-[12px]">
            Create
          </span>
        </button>
      </div>
    </div>
  );
}
