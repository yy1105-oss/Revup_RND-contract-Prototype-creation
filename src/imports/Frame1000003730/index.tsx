import svgPaths from "./svg-hh5frvxjs";

function Title() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[16px] overflow-clip top-[16px]" data-name="Title">
      <div className="[word-break:break-word] flex flex-col font-['Lato:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092425] text-[20px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[22px]">Create New Contract</p>
      </div>
    </div>
  );
}

function PanelHeader() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="panel-header">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end px-[16px] py-[13px] relative size-full">
          <Title />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Close">
            <div className="absolute inset-[20%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 9.6">
                <path d={svgPaths.p33c88b00} fill="var(--fill-0, #687576)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLabel() {
  return (
    <div className="content-stretch flex items-center overflow-clip py-[6px] relative shrink-0 w-full" data-name="Section Label">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[12px] tracking-[0.48px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">Customer Information</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Contract Type</p>
      </div>
    </div>
  );
}

function Required() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[14px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row />
      <Required />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName />
        </div>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#092425] text-[12px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">REG - Regional</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6cbcb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Trading Partner</p>
      </div>
    </div>
  );
}

function Required1() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[14px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName1() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row1 />
      <Required1 />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName1 />
        </div>
      </div>
    </div>
  );
}

function Field1() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#092425] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Sysco</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6cbcb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function SectionLabel1() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[6px] relative shrink-0 w-full" data-name="Section Label">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[12px] tracking-[0.48px] uppercase w-[224px]">
        <p className="leading-[12px]">Contract Details</p>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Contract Start Date</p>
      </div>
    </div>
  );
}

function Required2() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[14px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelContents() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Label Contents">
      <Row2 />
      <Required2 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-center left-[8px] overflow-clip top-[4px]" data-name="Text">
      <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#2c3a3a] text-[12px] whitespace-nowrap">July 14, 2026</p>
    </div>
  );
}

function Field2() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Text />
        <div className="-translate-y-1/2 absolute overflow-clip right-[8px] size-[16px] top-1/2" data-name="Calendar">
          <div className="absolute inset-[0_5%_3.57%_5%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 15.4286">
              <path d={svgPaths.p3bd5bf00} fill="var(--fill-0, #687576)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6cbcb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Contract End Date</p>
      </div>
    </div>
  );
}

function LabelName2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Label Name">
      <Row3 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <LabelName2 />
    </div>
  );
}

function Field3() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8c9798] text-[12px] whitespace-nowrap">MM/DD/YYYY</p>
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Calendar">
            <div className="absolute inset-[0_5%_3.57%_5%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 15.4286">
                <path d={svgPaths.p3bd5bf00} fill="var(--fill-0, #687576)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6cbcb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Contract ID</p>
      </div>
    </div>
  );
}

function Required3() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[14px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName3() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row4 />
      <Required3 />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName3 />
        </div>
      </div>
    </div>
  );
}

function Field4() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092425] text-[12px] whitespace-nowrap">
            <p className="leading-[16px]">25250917</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6cbcb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Contract Name</p>
      </div>
    </div>
  );
}

function Required4() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[14px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName4() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row5 />
      <Required4 />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName4 />
        </div>
      </div>
    </div>
  );
}

function Field5() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#092425] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Sysco Supplier Contract</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6cbcb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Currency</p>
      </div>
    </div>
  );
}

function Required5() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[14px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName5() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row6 />
      <Required5 />
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName5 />
        </div>
      </div>
    </div>
  );
}

function Field6() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#092425] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">USD</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6cbcb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">System Unit Of Measure (UOM)</p>
      </div>
    </div>
  );
}

function Required6() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[14px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName6() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row7 />
      <Required6 />
    </div>
  );
}

function Label6() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName6 />
        </div>
      </div>
    </div>
  );
}

function Field7() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#092425] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">English</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6cbcb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function SectionLabel2() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[6px] relative shrink-0 w-full" data-name="Section Label">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Lato:Bold',sans-serif] h-[12px] justify-center leading-[0] min-w-px not-italic relative text-[#687576] text-[12px] tracking-[0.48px] uppercase">
        <p className="leading-[12px]">Customer contacts</p>
      </div>
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Primary Contact</p>
      </div>
    </div>
  );
}

function Required7() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[12px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName7() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row8 />
      <Required7 />
    </div>
  );
}

function Label7() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName7 />
        </div>
      </div>
    </div>
  );
}

function Field8() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#092425] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Brian Barton</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6cbcb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Secondary Contact(s)</p>
      </div>
    </div>
  );
}

function LabelName8() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row9 />
    </div>
  );
}

function Label8() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName8 />
        </div>
      </div>
    </div>
  );
}

function Field9() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#687576] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Select...</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6cbcb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function SectionLabel3() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[6px] relative shrink-0 w-full" data-name="Section Label">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Lato:Bold',sans-serif] h-[12px] justify-center leading-[0] min-w-px not-italic relative text-[#687576] text-[12px] tracking-[0.48px] uppercase">
        <p className="leading-[12px]">Payment method</p>
      </div>
    </div>
  );
}

function Row10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Payment Frequency</p>
      </div>
    </div>
  );
}

function LabelName9() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row10 />
    </div>
  );
}

function Label9() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName9 />
        </div>
      </div>
    </div>
  );
}

function Field10() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#092425] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Monthly</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6cbcb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Row11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Bill to</p>
      </div>
    </div>
  );
}

function LabelName10() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row11 />
    </div>
  );
}

function Label10() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName10 />
        </div>
      </div>
    </div>
  );
}

function Field11() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#092425] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Charlotte</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6cbcb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Row12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Comments</p>
      </div>
    </div>
  );
}

function LabelName11() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row12 />
    </div>
  );
}

function Label11() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] relative size-full">
          <LabelName11 />
        </div>
      </div>
    </div>
  );
}

function Spacer2Px() {
  return <div className="h-[2px] relative shrink-0 w-full" data-name="Spacer 2px" />;
}

function Frame2() {
  return (
    <div className="h-[32px] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[16px] min-w-px not-italic relative self-stretch text-[#687576] text-[14px]">Type comments here...</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-end justify-end overflow-clip relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="ExpandText">
        <div className="absolute inset-[46.25%_16.25%_15.53%_46.25%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.64307">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p282fc500} fill="var(--fill-0, #687576)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p364f6100} fill="var(--fill-0, #687576)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Box() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Box">
      <div aria-hidden className="absolute border border-[#dfe2e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function CharacterLimit() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Lato:Regular',sans-serif] items-center justify-end leading-[0] not-italic pt-[2px] relative shrink-0 text-[12px] text-right w-full whitespace-nowrap" data-name="Character Limit">
      <div className="flex flex-col justify-center relative shrink-0 text-[#092425]">
        <p className="leading-[12px]">0</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#687576]">
        <p className="leading-[12px]">/500</p>
      </div>
    </div>
  );
}

function PanelNewContract() {
  return (
    <div className="absolute bg-white left-0 rounded-tl-[10px] top-[314px] w-[320px]" data-name="panel-new-contract">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <PanelHeader />
        <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-x-clip overflow-y-auto px-[16px] py-[8px] relative shrink-0 w-[320px]" data-name="new-contract-">
          <SectionLabel />
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label />
            <Field />
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label1 />
            <Field1 />
          </div>
          <div className="h-[8px] relative shrink-0 w-full" data-name="Divider">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] relative size-full">
                <div className="h-0 mix-blend-multiply relative shrink-0 w-full" data-name="Divider">
                  <div className="absolute inset-[-0.5px_-0.18%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 285 1">
                      <g id="Divider" style={{ mixBlendMode: "multiply" }}>
                        <path d="M0.5 0.5H284.5" stroke="var(--stroke-0, #DFE2E2)" strokeLinecap="round" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SectionLabel1 />
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="Date-Time Pickers">
            <LabelContents />
            <Field2 />
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="Date-Time Pickers">
            <Label2 />
            <Field3 />
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label3 />
            <Field4 />
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label4 />
            <Field5 />
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label5 />
            <Field6 />
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label6 />
            <Field7 />
          </div>
          <div className="h-[8px] relative shrink-0 w-full" data-name="Divider">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] relative size-full">
                <div className="h-0 mix-blend-multiply relative shrink-0 w-full" data-name="Divider">
                  <div className="absolute inset-[-0.5px_-0.18%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 285 1">
                      <g id="Divider" style={{ mixBlendMode: "multiply" }}>
                        <path d="M0.5 0.5H284.5" stroke="var(--stroke-0, #DFE2E2)" strokeLinecap="round" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SectionLabel2 />
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label7 />
            <Field8 />
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label8 />
            <Field9 />
          </div>
          <div className="h-[8px] relative shrink-0 w-full" data-name="Divider">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] relative size-full">
                <div className="h-0 mix-blend-multiply relative shrink-0 w-full" data-name="Divider">
                  <div className="absolute inset-[-0.5px_-0.18%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 285 1">
                      <g id="Divider" style={{ mixBlendMode: "multiply" }}>
                        <path d="M0.5 0.5H284.5" stroke="var(--stroke-0, #DFE2E2)" strokeLinecap="round" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SectionLabel3 />
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label9 />
            <Field10 />
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label10 />
            <Field11 />
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label11 />
            <Spacer2Px />
            <Box />
            <CharacterLimit />
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] items-center justify-end px-[16px] py-[12px] relative shrink-0 w-[320px]" data-name="Panel Footer">
          <div className="content-stretch flex h-[24px] items-center justify-center overflow-clip px-[16px] py-[6px] relative rounded-[6px] shrink-0" data-name="ButtonStandard">
            <div className="[word-break:break-word] capitalize flex flex-col font-['Lato:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#038487] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
              <p className="leading-[12px]">Cancel</p>
            </div>
          </div>
          <div className="bg-[#038487] content-stretch flex h-[24px] items-center justify-center min-w-[96px] overflow-clip px-[16px] py-[6px] relative rounded-[6px] shrink-0" data-name="ButtonStandard">
            <div className="[word-break:break-word] capitalize flex flex-col font-['Lato:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.24px] whitespace-nowrap">
              <p className="leading-[12px]">Create</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#dfe2e2] border-l border-solid border-t inset-0 pointer-events-none rounded-tl-[10px]" />
    </div>
  );
}

function Title1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[16px] overflow-clip top-[16px]" data-name="Title">
      <div className="[word-break:break-word] flex flex-col font-['Lato:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092425] text-[20px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[22px]">Create New Contract</p>
      </div>
    </div>
  );
}

function PanelHeader1() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="panel-header">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end px-[16px] py-[13px] relative size-full">
          <Title1 />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Close">
            <div className="absolute inset-[20%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 9.6">
                <path d={svgPaths.p33c88b00} fill="var(--fill-0, #687576)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLabel4() {
  return (
    <div className="content-stretch flex items-center overflow-clip py-[6px] relative shrink-0 w-full" data-name="Section Label">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[12px] tracking-[0.48px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">Customer Information</p>
      </div>
    </div>
  );
}

function Row13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Contract Type</p>
      </div>
    </div>
  );
}

function Required8() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[14px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName12() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row13 />
      <Required8 />
    </div>
  );
}

function Label12() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName12 />
        </div>
      </div>
    </div>
  );
}

function Field12() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#092425] text-[12px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">REG - Regional</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6cbcb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Row14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Trading Partner</p>
      </div>
    </div>
  );
}

function Required9() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[14px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName13() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row14 />
      <Required9 />
    </div>
  );
}

function Label13() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName13 />
        </div>
      </div>
    </div>
  );
}

function Field13() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#687576] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Select...</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3362b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function LabelName14() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Label Name">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">{`Field is required `}</p>
      </div>
    </div>
  );
}

function SectionLabel5() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[6px] relative shrink-0 w-full" data-name="Section Label">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[12px] tracking-[0.48px] uppercase w-[224px]">
        <p className="leading-[12px]">Contract Details</p>
      </div>
    </div>
  );
}

function Row15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Contract Start Date</p>
      </div>
    </div>
  );
}

function Required10() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[14px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelContents1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Label Contents">
      <Row15 />
      <Required10 />
    </div>
  );
}

function Field14() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] py-[4px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Calendar">
            <div className="absolute inset-[0_5%_3.57%_5%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 15.4286">
                <path d={svgPaths.p3bd5bf00} fill="var(--fill-0, #687576)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3362b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Row16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Contract End Date</p>
      </div>
    </div>
  );
}

function LabelName15() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Label Name">
      <Row16 />
    </div>
  );
}

function Label14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <LabelName15 />
    </div>
  );
}

function Field15() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8c9798] text-[12px] whitespace-nowrap">MM/DD/YYYY</p>
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Calendar">
            <div className="absolute inset-[0_5%_3.57%_5%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 15.4286">
                <path d={svgPaths.p3bd5bf00} fill="var(--fill-0, #687576)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6cbcb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Row17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Contract ID</p>
      </div>
    </div>
  );
}

function Required11() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[14px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName16() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row17 />
      <Required11 />
    </div>
  );
}

function Label15() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName16 />
        </div>
      </div>
    </div>
  );
}

function Field16() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="overflow-clip relative rounded-[inherit] size-full" />
      <div aria-hidden className="absolute border border-[#e3362b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function LabelName17() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Label Name">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">{`Field is required `}</p>
      </div>
    </div>
  );
}

function Row18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Contract Name</p>
      </div>
    </div>
  );
}

function Required12() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[14px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName18() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row18 />
      <Required12 />
    </div>
  );
}

function Label16() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName18 />
        </div>
      </div>
    </div>
  );
}

function Field17() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#687576] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Select...</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3362b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function LabelName19() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Label Name">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">{`Field is required `}</p>
      </div>
    </div>
  );
}

function Row19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Currency</p>
      </div>
    </div>
  );
}

function Required13() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[14px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName20() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row19 />
      <Required13 />
    </div>
  );
}

function Label17() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName20 />
        </div>
      </div>
    </div>
  );
}

function Field18() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#687576] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">USD</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3362b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function LabelName21() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Label Name">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">{`Field is required `}</p>
      </div>
    </div>
  );
}

function Row20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">System Unit Of Measure (UOM)</p>
      </div>
    </div>
  );
}

function Required14() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[14px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName22() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row20 />
      <Required14 />
    </div>
  );
}

function Label18() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName22 />
        </div>
      </div>
    </div>
  );
}

function Field19() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#092425] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">English</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6cbcb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function SectionLabel6() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[6px] relative shrink-0 w-full" data-name="Section Label">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Lato:Bold',sans-serif] h-[12px] justify-center leading-[0] min-w-px not-italic relative text-[#687576] text-[12px] tracking-[0.48px] uppercase">
        <p className="leading-[12px]">Customer contacts</p>
      </div>
    </div>
  );
}

function Row21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Primary Contact</p>
      </div>
    </div>
  );
}

function Required15() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[12px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName23() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row21 />
      <Required15 />
    </div>
  );
}

function Label19() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName23 />
        </div>
      </div>
    </div>
  );
}

function Field20() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#687576] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Select...</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3362b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function LabelName24() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Label Name">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">{`Field is required `}</p>
      </div>
    </div>
  );
}

function Row22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Secondary Contact(s)</p>
      </div>
    </div>
  );
}

function LabelName25() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row22 />
    </div>
  );
}

function Label20() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName25 />
        </div>
      </div>
    </div>
  );
}

function Field21() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#687576] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Select...</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6cbcb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function SectionLabel7() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[6px] relative shrink-0 w-full" data-name="Section Label">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Lato:Bold',sans-serif] h-[12px] justify-center leading-[0] min-w-px not-italic relative text-[#687576] text-[12px] tracking-[0.48px] uppercase">
        <p className="leading-[12px]">Payment method</p>
      </div>
    </div>
  );
}

function Row23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Payment Frequency</p>
      </div>
    </div>
  );
}

function Required16() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[12px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName26() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row23 />
      <Required16 />
    </div>
  );
}

function Label21() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName26 />
        </div>
      </div>
    </div>
  );
}

function Field22() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#687576] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Select...</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3362b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function LabelName27() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Label Name">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">Field is required</p>
      </div>
    </div>
  );
}

function Row24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Bill to</p>
      </div>
    </div>
  );
}

function Required17() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[12px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName28() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row24 />
      <Required17 />
    </div>
  );
}

function Label22() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName28 />
        </div>
      </div>
    </div>
  );
}

function Field23() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#687576] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Charlotte</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3362b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function LabelName29() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Label Name">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">Field is required</p>
      </div>
    </div>
  );
}

function Row25() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Comments</p>
      </div>
    </div>
  );
}

function LabelName30() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row25 />
    </div>
  );
}

function Label23() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] relative size-full">
          <LabelName30 />
        </div>
      </div>
    </div>
  );
}

function Spacer2Px1() {
  return <div className="h-[2px] relative shrink-0 w-full" data-name="Spacer 2px" />;
}

function Frame3() {
  return (
    <div className="h-[32px] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[16px] min-w-px not-italic relative self-stretch text-[#687576] text-[14px]">Type comments here...</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-end justify-end overflow-clip relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="ExpandText">
        <div className="absolute inset-[46.25%_16.25%_15.53%_46.25%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.64307">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p282fc500} fill="var(--fill-0, #687576)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p364f6100} fill="var(--fill-0, #687576)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Box1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Box">
      <div aria-hidden className="absolute border border-[#dfe2e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function CharacterLimit1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Lato:Regular',sans-serif] items-center justify-end leading-[0] not-italic pt-[2px] relative shrink-0 text-[12px] text-right w-full whitespace-nowrap" data-name="Character Limit">
      <div className="flex flex-col justify-center relative shrink-0 text-[#092425]">
        <p className="leading-[12px]">0</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#687576]">
        <p className="leading-[12px]">/500</p>
      </div>
    </div>
  );
}

function PanelNewContract1() {
  return (
    <div className="absolute bg-white left-[850px] rounded-tl-[10px] top-[314px] w-[320px]" data-name="panel-new-contract">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <PanelHeader1 />
        <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-x-clip overflow-y-auto px-[16px] py-[8px] relative shrink-0 w-[320px]" data-name="new-contract-">
          <SectionLabel4 />
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label12 />
            <Field12 />
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label13 />
            <Field13 />
            <LabelName14 />
          </div>
          <div className="h-[8px] relative shrink-0 w-full" data-name="Divider">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] relative size-full">
                <div className="h-0 mix-blend-multiply relative shrink-0 w-full" data-name="Divider">
                  <div className="absolute inset-[-0.5px_-0.18%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 285 1">
                      <g id="Divider" style={{ mixBlendMode: "multiply" }}>
                        <path d="M0.5 0.5H284.5" stroke="var(--stroke-0, #DFE2E2)" strokeLinecap="round" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SectionLabel5 />
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="Date-Time Pickers">
            <LabelContents1 />
            <Field14 />
            <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[10px] w-full">
              <p className="leading-[12px]">{`Field is required `}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="Date-Time Pickers">
            <Label14 />
            <Field15 />
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label15 />
            <Field16 />
            <LabelName17 />
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label16 />
            <Field17 />
            <LabelName19 />
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label17 />
            <Field18 />
            <LabelName21 />
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label18 />
            <Field19 />
          </div>
          <div className="h-[8px] relative shrink-0 w-full" data-name="Divider">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] relative size-full">
                <div className="h-0 mix-blend-multiply relative shrink-0 w-full" data-name="Divider">
                  <div className="absolute inset-[-0.5px_-0.18%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 285 1">
                      <g id="Divider" style={{ mixBlendMode: "multiply" }}>
                        <path d="M0.5 0.5H284.5" stroke="var(--stroke-0, #DFE2E2)" strokeLinecap="round" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SectionLabel6 />
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label19 />
            <Field20 />
            <LabelName24 />
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label20 />
            <Field21 />
          </div>
          <div className="h-[8px] relative shrink-0 w-full" data-name="Divider">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] relative size-full">
                <div className="h-0 mix-blend-multiply relative shrink-0 w-full" data-name="Divider">
                  <div className="absolute inset-[-0.5px_-0.18%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 285 1">
                      <g id="Divider" style={{ mixBlendMode: "multiply" }}>
                        <path d="M0.5 0.5H284.5" stroke="var(--stroke-0, #DFE2E2)" strokeLinecap="round" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SectionLabel7 />
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label21 />
            <Field22 />
            <LabelName27 />
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label22 />
            <Field23 />
            <LabelName29 />
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label23 />
            <Spacer2Px1 />
            <Box1 />
            <CharacterLimit1 />
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] items-center justify-end px-[16px] py-[12px] relative shrink-0 w-[320px]" data-name="Panel Footer">
          <div className="content-stretch flex h-[24px] items-center justify-center overflow-clip px-[16px] py-[6px] relative rounded-[6px] shrink-0" data-name="ButtonStandard">
            <div className="[word-break:break-word] capitalize flex flex-col font-['Lato:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#038487] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
              <p className="leading-[12px]">Cancel</p>
            </div>
          </div>
          <div className="bg-[#dfe2e2] content-stretch flex h-[24px] items-center justify-center min-w-[96px] mix-blend-multiply overflow-clip px-[16px] py-[6px] relative rounded-[6px] shrink-0 w-[96px]" data-name="ButtonFill">
            <div className="[word-break:break-word] capitalize flex flex-col font-['Lato:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c9798] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
              <p className="leading-[12px]">Create</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#dfe2e2] border-l border-solid border-t inset-0 pointer-events-none rounded-tl-[10px]" />
    </div>
  );
}

function Row26() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[0px] whitespace-nowrap">
        <p className="font-['Lato:Bold',sans-serif] leading-[16px] text-[12px]">Customer Secondary Contact(s)</p>
      </div>
    </div>
  );
}

function Required18() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[12px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName31() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row26 />
      <Required18 />
    </div>
  );
}

function Label24() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName31 />
        </div>
      </div>
    </div>
  );
}

function Field24() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#092425] text-[12px] top-[12px] whitespace-nowrap">
            <p>
              <span className="leading-[16px]">{`Amy Stanbrook `}</span>
              <span className="leading-[16px] text-[#038487]">+ 5</span>
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6cbcb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Row27() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Currency</p>
      </div>
    </div>
  );
}

function Required19() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[14px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName32() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row27 />
      <Required19 />
    </div>
  );
}

function Label25() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName32 />
        </div>
      </div>
    </div>
  );
}

function Typing() {
  return (
    <div className="absolute content-stretch flex items-center left-[19px] overflow-clip top-[4px]" data-name="Typing">
      <div className="bg-[#092425] h-[16px] relative rounded-[16px] shrink-0 w-px" />
    </div>
  );
}

function Field25() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] py-[4px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2deeeb00} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#092425] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">U</p>
          </div>
          <Typing />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#038487] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TextField() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text Field">
      <Label25 />
      <Field25 />
    </div>
  );
}

function Row28() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">System Unit Of Measure (UOM)</p>
      </div>
    </div>
  );
}

function Required20() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[14px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName33() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row28 />
      <Required20 />
    </div>
  );
}

function Label26() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName33 />
        </div>
      </div>
    </div>
  );
}

function Field26() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#092425] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">English</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6cbcb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function SectionLabel8() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[6px] relative shrink-0 w-full" data-name="Section Label">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Lato:Bold',sans-serif] h-[12px] justify-center leading-[0] min-w-px not-italic relative text-[#687576] text-[12px] tracking-[0.48px] uppercase">
        <p className="leading-[12px]">contacts</p>
      </div>
    </div>
  );
}

function Row29() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Vendor Primary Contact</p>
      </div>
    </div>
  );
}

function Required21() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[12px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName34() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row29 />
      <Required21 />
    </div>
  );
}

function Label27() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName34 />
        </div>
      </div>
    </div>
  );
}

function Field27() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#687576] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Select...</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3362b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function LabelName35() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Label Name">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">{`Field is required `}</p>
      </div>
    </div>
  );
}

function Row30() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Secondary Contact(s)</p>
      </div>
    </div>
  );
}

function Required22() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[12px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName36() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row30 />
      <Required22 />
    </div>
  );
}

function Label28() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName36 />
        </div>
      </div>
    </div>
  );
}

function Field28() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#687576] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Select...</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3362b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function LabelName37() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Label Name">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">{`Field is required `}</p>
      </div>
    </div>
  );
}

function Row31() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Comments</p>
      </div>
    </div>
  );
}

function LabelName38() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row31 />
    </div>
  );
}

function Label29() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] relative size-full">
          <LabelName38 />
        </div>
      </div>
    </div>
  );
}

function Spacer2Px2() {
  return <div className="h-[2px] relative shrink-0 w-full" data-name="Spacer 2px" />;
}

function Frame5() {
  return (
    <div className="h-[32px] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[16px] min-w-px not-italic relative self-stretch text-[#687576] text-[14px]">Type comments here...</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-end justify-end overflow-clip relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="ExpandText">
        <div className="absolute inset-[46.25%_16.25%_15.53%_46.25%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.64307">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p282fc500} fill="var(--fill-0, #687576)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p364f6100} fill="var(--fill-0, #687576)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Box2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Box">
      <div aria-hidden className="absolute border border-[#dfe2e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function CharacterLimit2() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Lato:Regular',sans-serif] items-center justify-end leading-[0] not-italic pt-[2px] relative shrink-0 text-[12px] text-right w-full whitespace-nowrap" data-name="Character Limit">
      <div className="flex flex-col justify-center relative shrink-0 text-[#092425]">
        <p className="leading-[12px]">0</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#687576]">
        <p className="leading-[12px]">/500</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="overflow-x-clip overflow-y-auto rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[8px] relative size-full">
          <TextField />
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label26 />
            <Field26 />
          </div>
          <div className="h-[8px] relative shrink-0 w-full" data-name="Divider">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] relative size-full">
                <div className="h-0 mix-blend-multiply relative shrink-0 w-full" data-name="Divider">
                  <div className="absolute inset-[-0.5px_-0.18%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 285 1">
                      <g id="Divider" style={{ mixBlendMode: "multiply" }}>
                        <path d="M0.5 0.5H284.5" stroke="var(--stroke-0, #DFE2E2)" strokeLinecap="round" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SectionLabel8 />
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label27 />
            <Field27 />
            <LabelName35 />
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label28 />
            <Field28 />
            <LabelName37 />
          </div>
          <div className="h-[8px] relative shrink-0 w-full" data-name="Divider">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] relative size-full">
                <div className="h-0 mix-blend-multiply relative shrink-0 w-full" data-name="Divider">
                  <div className="absolute inset-[-0.5px_-0.18%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 285 1">
                      <g id="Divider" style={{ mixBlendMode: "multiply" }}>
                        <path d="M0.5 0.5H284.5" stroke="var(--stroke-0, #DFE2E2)" strokeLinecap="round" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label29 />
            <Spacer2Px2 />
            <Box2 />
            <CharacterLimit2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] p-[8px] rounded-[8px] top-[55px] w-[288px]" data-name="Dropdown">
      <div aria-hidden className="absolute backdrop-blur-[16px] bg-[rgba(223,226,226,0.4)] inset-0 pointer-events-none rounded-[8px]" />
      <div aria-hidden className="absolute border border-[#dfe2e2] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_4px_32px_0px_rgba(1,71,73,0.2)]" />
      <div className="relative rounded-[4px] shrink-0 w-full" data-name="Dropdown Item">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[8px] py-[4px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-[16px] justify-center leading-[0] min-w-px not-italic relative text-[#092425] text-[12px]">
              <p className="leading-[16px]">USD</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[-1px] pointer-events-none rounded-[inherit] shadow-[inset_-54px_54px_54px_0px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute bg-white h-[123px] left-[1259px] top-[988px] w-[320px]" data-name="3.0">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Content />
        <Dropdown />
      </div>
      <div aria-hidden className="absolute border-[#dfe2e2] border-l border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Row32() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Currency</p>
      </div>
    </div>
  );
}

function Required23() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[14px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName39() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row32 />
      <Required23 />
    </div>
  );
}

function Label30() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName39 />
        </div>
      </div>
    </div>
  );
}

function Field29() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#092425] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">UD</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3362b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function LabelName40() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Label Name">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">Invalid Selection. Please select from the list displayed.</p>
      </div>
    </div>
  );
}

function Row33() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">System Unit Of Measure (UOM)</p>
      </div>
    </div>
  );
}

function Required24() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[14px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName41() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row33 />
      <Required24 />
    </div>
  );
}

function Label31() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName41 />
        </div>
      </div>
    </div>
  );
}

function Field30() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#092425] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">English</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6cbcb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function SectionLabel9() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[6px] relative shrink-0 w-full" data-name="Section Label">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Lato:Bold',sans-serif] h-[12px] justify-center leading-[0] min-w-px not-italic relative text-[#687576] text-[12px] tracking-[0.48px] uppercase">
        <p className="leading-[12px]">contacts</p>
      </div>
    </div>
  );
}

function Row34() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Vendor Primary Contact</p>
      </div>
    </div>
  );
}

function Required25() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[12px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName42() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row34 />
      <Required25 />
    </div>
  );
}

function Label32() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName42 />
        </div>
      </div>
    </div>
  );
}

function Field31() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#687576] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Select...</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3362b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function LabelName43() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Label Name">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">{`Field is required `}</p>
      </div>
    </div>
  );
}

function Row35() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Secondary Contact(s)</p>
      </div>
    </div>
  );
}

function Required26() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[12px] text-center w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName44() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row35 />
      <Required26 />
    </div>
  );
}

function Label33() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName44 />
        </div>
      </div>
    </div>
  );
}

function Field32() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
            <div className="-translate-x-1/2 absolute aspect-[10/6] bottom-[28.75%] left-[calc(50%+0.33px)] top-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 6.4">
                <path d={svgPaths.p2c861900} fill="var(--fill-0, #2C3A3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] left-[8px] not-italic text-[#687576] text-[14px] top-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Select...</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3362b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function LabelName45() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Label Name">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">{`Field is required `}</p>
      </div>
    </div>
  );
}

function Row36() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Comments</p>
      </div>
    </div>
  );
}

function LabelName46() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Label Name">
      <Row36 />
    </div>
  );
}

function Label34() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] relative size-full">
          <LabelName46 />
        </div>
      </div>
    </div>
  );
}

function Spacer2Px3() {
  return <div className="h-[2px] relative shrink-0 w-full" data-name="Spacer 2px" />;
}

function Frame7() {
  return (
    <div className="h-[32px] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[16px] min-w-px not-italic relative self-stretch text-[#687576] text-[14px]">Type comments here...</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-end justify-end overflow-clip relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="ExpandText">
        <div className="absolute inset-[46.25%_16.25%_15.53%_46.25%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.64307">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p282fc500} fill="var(--fill-0, #687576)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p364f6100} fill="var(--fill-0, #687576)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Box3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Box">
      <div aria-hidden className="absolute border border-[#dfe2e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function CharacterLimit3() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Lato:Regular',sans-serif] items-center justify-end leading-[0] not-italic pt-[2px] relative shrink-0 text-[12px] text-right w-full whitespace-nowrap" data-name="Character Limit">
      <div className="flex flex-col justify-center relative shrink-0 text-[#092425]">
        <p className="leading-[12px]">0</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#687576]">
        <p className="leading-[12px]">/500</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="overflow-x-clip overflow-y-auto rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[8px] relative size-full">
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label30 />
            <Field29 />
            <LabelName40 />
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label31 />
            <Field30 />
          </div>
          <div className="h-[8px] relative shrink-0 w-full" data-name="Divider">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] relative size-full">
                <div className="h-0 mix-blend-multiply relative shrink-0 w-full" data-name="Divider">
                  <div className="absolute inset-[-0.5px_-0.18%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 285 1">
                      <g id="Divider" style={{ mixBlendMode: "multiply" }}>
                        <path d="M0.5 0.5H284.5" stroke="var(--stroke-0, #DFE2E2)" strokeLinecap="round" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SectionLabel9 />
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label32 />
            <Field31 />
            <LabelName43 />
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label33 />
            <Field32 />
            <LabelName45 />
          </div>
          <div className="h-[8px] relative shrink-0 w-full" data-name="Divider">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] relative size-full">
                <div className="h-0 mix-blend-multiply relative shrink-0 w-full" data-name="Divider">
                  <div className="absolute inset-[-0.5px_-0.18%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 285 1">
                      <g id="Divider" style={{ mixBlendMode: "multiply" }}>
                        <path d="M0.5 0.5H284.5" stroke="var(--stroke-0, #DFE2E2)" strokeLinecap="round" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="dontuse">
            <Label34 />
            <Spacer2Px3 />
            <Box3 />
            <CharacterLimit3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function IfUserManualyEntersAWrongValue() {
  return (
    <div className="absolute bg-white h-[123px] left-[1259px] top-[1172px] w-[320px]" data-name="If user manualy enters a wrong value.">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Content1 />
      </div>
      <div aria-hidden className="absolute border-[#dfe2e2] border-l border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Row37() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#687576] text-[0px] whitespace-nowrap">
        <p className="font-['Lato:Bold',sans-serif] leading-[16px] text-[12px]">Customer Secondary Contact(s)</p>
      </div>
    </div>
  );
}

function Required27() {
  return (
    <div className="content-stretch flex gap-[4px] h-[16px] items-center justify-center relative shrink-0" data-name="Required">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3362b] text-[12px] w-[6px]">
        <p className="leading-[12px]">*</p>
      </div>
    </div>
  );
}

function LabelName47() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-[-1px]" data-name="Label Name">
      <Row37 />
      <Required27 />
    </div>
  );
}

function Label35() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <LabelName47 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <div className="bg-[#f3f4f4] h-[24px] mix-blend-multiply relative rounded-[4px] shrink-0 w-full" data-name="Search">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[8px] relative size-full">
              <div className="mix-blend-multiply overflow-clip relative shrink-0 size-[12px]" data-name="iconSearch">
                <div className="absolute inset-[5%]" data-name="vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8 10.8">
                    <path d={svgPaths.p3ac13b00} fill="var(--fill-0, #2C3A3A)" id="vector" />
                  </svg>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] min-w-px mix-blend-multiply not-italic relative text-[#687576] text-[10px]">
                <p className="leading-[12px]">Search</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SelectAll() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-end overflow-clip right-[8px] top-1/2" data-name="Select All">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#038487] text-[10px] text-right tracking-[0.4px] uppercase whitespace-nowrap">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[12px] underline">Show All</p>
      </div>
    </div>
  );
}

function SelectAll1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center left-[8px] overflow-clip top-1/2" data-name="Select All">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#038487] text-[10px] tracking-[0.4px] uppercase whitespace-nowrap">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[12px] underline">Clear All (4)</p>
      </div>
    </div>
  );
}

function Controls() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Controls">
      <SelectAll />
      <SelectAll1 />
    </div>
  );
}

function Spacer8Px() {
  return <div className="h-[8px] relative shrink-0 w-full" data-name="spacer8px" />;
}

function Spacer16Px() {
  return <div className="h-[16px] relative shrink-0 w-full" data-name="spacer16px" />;
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end px-[8px] relative size-full">
          <div className="content-stretch flex h-[24px] items-center justify-center overflow-clip px-[16px] py-[6px] relative rounded-[6px] shrink-0" data-name="ButtonHug">
            <div className="[word-break:break-word] capitalize flex flex-col font-['Lato:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#038487] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
              <p className="leading-[12px]">Cancel</p>
            </div>
          </div>
          <div className="bg-[#038487] content-stretch flex h-[24px] items-center justify-center min-w-[96px] overflow-clip px-[16px] py-[6px] relative rounded-[6px] shrink-0" data-name="ButtonHug">
            <div className="[word-break:break-word] capitalize flex flex-col font-['Lato:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.24px] whitespace-nowrap">
              <p className="leading-[12px]">Apply</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden className="absolute backdrop-blur-[16px] bg-[rgba(223,226,226,0.4)] inset-0 pointer-events-none rounded-[8px]" />
      <div aria-hidden className="absolute border border-[#dfe2e2] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_4px_32px_0px_rgba(1,71,73,0.2)]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[8px] py-[16px] relative size-full">
          <Frame />
          <Controls />
          <Spacer8Px />
          <div className="relative rounded-[4px] shrink-0 w-full" data-name="MultiselectItem">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center pl-[32px] pr-[8px] py-[6px] relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
                  <div className="absolute inset-[10%]" data-name="Checked">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p3453a000} fill="var(--fill-0, #038487)" id="Checked" />
                    </svg>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092425] text-[12px] whitespace-nowrap">
                  <p className="leading-[16px]">Selected</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0 w-full" data-name="MultiselectItem">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center pl-[32px] pr-[8px] py-[6px] relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
                  <div className="absolute inset-[10%]" data-name="Checked">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p3453a000} fill="var(--fill-0, #038487)" id="Checked" />
                    </svg>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092425] text-[12px] whitespace-nowrap">
                  <p className="leading-[16px]">Selected</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0 w-full" data-name="MultiselectItem">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center pl-[32px] pr-[8px] py-[6px] relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
                  <div className="absolute inset-[10%]" data-name="Checked">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p3453a000} fill="var(--fill-0, #038487)" id="Checked" />
                    </svg>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092425] text-[12px] whitespace-nowrap">
                  <p className="leading-[16px]">Selected</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0 w-full" data-name="MultiselectItem">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center pl-[32px] pr-[8px] py-[6px] relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
                  <div className="absolute inset-[10%]" data-name="Checked">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p3453a000} fill="var(--fill-0, #038487)" id="Checked" />
                    </svg>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092425] text-[12px] whitespace-nowrap">
                  <p className="leading-[16px]">Selected</p>
                </div>
              </div>
            </div>
          </div>
          <Spacer16Px />
          <Footer />
        </div>
      </div>
      <div className="absolute inset-[-1px] pointer-events-none rounded-[inherit] shadow-[inset_-54px_54px_54px_0px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[404px] p-[8px] rounded-[8px] top-[356px] w-[204px]" data-name="Dropdown">
      <div aria-hidden className="absolute backdrop-blur-[16px] bg-[rgba(223,226,226,0.4)] inset-0 pointer-events-none rounded-[8px]" />
      <div aria-hidden className="absolute border border-[#dfe2e2] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_4px_32px_0px_rgba(1,71,73,0.2)]" />
      <div className="bg-[#ececec] mix-blend-multiply relative rounded-[4px] shrink-0 w-full" data-name="Dropdown Item">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[8px] py-[4px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-[16px] justify-center leading-[0] min-w-px not-italic relative text-[#092425] text-[12px]">
              <p className="leading-[16px]">REG - Regional</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[4px] shrink-0 w-full" data-name="Dropdown Item">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[8px] py-[4px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-[16px] justify-center leading-[0] min-w-px not-italic relative text-[#092425] text-[12px]">
              <p className="leading-[16px]">MKP - Markup Contract</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[4px] shrink-0 w-full" data-name="Dropdown Item">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[8px] py-[4px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-[16px] justify-center leading-[0] min-w-px not-italic relative text-[#092425] text-[12px]">
              <p className="leading-[16px]">SUP - Supplier Contract</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[4px] shrink-0 w-full" data-name="Dropdown Item">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[8px] py-[4px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-[16px] justify-center leading-[0] min-w-px not-italic relative text-[#092425] text-[12px]">
              <p className="leading-[16px]">CLT - Client Contract</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[-1px] pointer-events-none rounded-[inherit] shadow-[inset_-54px_54px_54px_0px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

export default function Frame9() {
  return (
    <div className="relative size-full">
      <PanelNewContract />
      <PanelNewContract1 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Bold',sans-serif] h-[203px] justify-center leading-[0] left-0 not-italic text-[60px] text-black top-[101.5px] w-[451px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[normal] underline">Create Contract</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Bold',sans-serif] h-[203px] justify-center leading-[0] left-[850px] not-italic text-[60px] text-black top-[101.5px] w-[451px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[normal] underline">Validation</p>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-[392px] overflow-clip top-[1661px] w-[288px]" data-name="dontuse">
        <Label24 />
        <Field24 />
      </div>
      <div className="[word-break:break-word] absolute font-['Lato:Regular',sans-serif] leading-[0] left-[398px] not-italic text-[#e3362b] text-[12px] top-[1125px] w-[212px]">
        <p className="font-['Lato:Bold',sans-serif] leading-[normal] mb-0 whitespace-pre-wrap">{`Customer Primary Contacts: `}</p>
        <ul>
          <li className="list-disc ms-[18px]">
            <span className="leading-[normal]">List sodexo contact list</span>
          </li>
        </ul>
      </div>
      <p className="[word-break:break-word] absolute font-['Lato:Regular',sans-serif] leading-[20px] left-[345px] not-italic text-[#e3362b] text-[12px] top-[946px] w-[251px]">UOM default selection: Enlgish</p>
      <p className="[word-break:break-word] absolute font-['Lato:Regular',sans-serif] leading-[0] left-[397px] not-italic text-[#e3362b] text-[12px] top-[723px] w-[251px] whitespace-pre-wrap">
        <span className="font-['Lato:Bold',sans-serif] leading-[20px]">{`Contract End Date: `}</span>
        <span className="leading-[20px]">
          <br aria-hidden />
          {`The contract end date is not required, by leaving this field blank, it’s indicating an “Evergreen” Flag in the back end. `}
        </span>
      </p>
      <div className="[word-break:break-word] absolute font-['Lato:Regular',sans-serif] leading-[0] left-[398px] not-italic text-[#e3362b] text-[14px] top-[1197px] w-[288px]">
        <p className="font-['Lato:Bold',sans-serif] leading-[normal] mb-0">Customer secondary Contact(s)</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[21px]">
            <span className="leading-[normal]">Contacts list from Sodexo will appear on the dropdown list.</span>
          </li>
          <li className="ms-[21px]">
            <span className="leading-[normal]">{`Internal user who created the contract will included from the list to avoid "self-approval"`}</span>
          </li>
        </ul>
      </div>
      <Component />
      <IfUserManualyEntersAWrongValue />
      <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[393px] top-[1324px] w-[288px]" data-name="Multiselect">
        <Label35 />
        <Dropdown1 />
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[306px] top-[1211px] w-[64px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[64px]">
            <div className="absolute inset-[-3.68px_-4.17%_-3.68px_-0.78%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.1667 7.36396">
                <path d={svgPaths.p2e541cc0} fill="var(--stroke-0, #E3362B)" id="Line 234" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[59px] items-center justify-center left-[619px] top-[1594px] w-0">
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[59px]">
            <div className="absolute inset-[-3.68px_-4.52%_-3.68px_-0.85%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.1667 7.36396">
                <path d={svgPaths.pd853a80} fill="var(--stroke-0, #E3362B)" id="Line 236" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[6.101px] items-center justify-center left-[306.04px] top-[1136.45px] w-[76.969px]">
        <div className="flex-none rotate-[177.73deg]">
          <div className="h-[3.054px] relative w-[76.908px]">
            <div className="absolute inset-[-116.37%_-3.47%_-87.33%_-0.65%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80.075 9.2735">
                <path d={svgPaths.p9cefef0} fill="var(--stroke-0, #E3362B)" id="Line 235" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[6.254px] items-center justify-center left-[309.53px] top-[729.38px] w-[78.976px]">
        <div className="flex-none rotate-[177.73deg]">
          <div className="h-[3.127px] relative w-[78.914px]">
            <div className="absolute inset-[-113.63%_-3.38%_-85.27%_-0.63%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82.0806 9.34726">
                <path d={svgPaths.pbb8c800} fill="var(--stroke-0, #E3362B)" id="Line 237" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[6.254px] items-center justify-center left-[309.53px] top-[452px] w-[78.976px]">
        <div className="flex-none rotate-[177.73deg]">
          <div className="h-[3.127px] relative w-[78.914px]">
            <div className="absolute inset-[-113.63%_-3.38%_-85.27%_-0.63%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82.0806 9.34726">
                <path d={svgPaths.pbb8c800} fill="var(--stroke-0, #E3362B)" id="Line 237" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[59.557px] items-center justify-center left-[170px] top-[540.5px] w-[248.619px]">
        <div className="flex-none rotate-[-173.02deg]">
          <div className="h-[29.778px] relative w-[246.83px]">
            <div className="absolute inset-[-1.87%_-0.2%_-1.67%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 247.387 30.8311">
                <path d={svgPaths.p3d8e7080} id="Line 292" stroke="var(--stroke-0, #E3362B)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[21px] justify-center leading-[0] left-[428.68px] text-[14px] text-black top-[569.5px] w-[171px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Display the list of suppliers</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Medium',sans-serif] h-[42px] justify-center leading-[0] left-[1259px] not-italic text-[#e3362b] text-[0px] top-[849px] w-[272px]">
        <p className="font-['Lato:Bold',sans-serif] leading-[20px] text-[16px]">Currency Validation</p>
      </div>
      <p className="[word-break:break-word] absolute font-['Lato:Regular',sans-serif] h-[69px] leading-[16px] left-[1259px] not-italic text-[#e3362b] text-[12px] top-[877px] w-[320px]">
        AC1: If a user manually enters an invalid value in the Currency field during contract updates, the error message should read:
        <br aria-hidden />
        {`"Invalid Selection. Please select from the list displayed"`}
      </p>
      <Dropdown2 />
    </div>
  );
}