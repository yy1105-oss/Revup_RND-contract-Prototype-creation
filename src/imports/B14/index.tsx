import svgPaths from "./svg-gd8jrwxj1t";

function Title() {
  return (
    <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0 w-[288px]" data-name="Title">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#092425] text-[18px] tracking-[-0.36px]">
        <p className="leading-[20px]">Notify Customer Contacts</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Close">
        <div className="absolute inset-[20%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 9.6">
            <path d={svgPaths.p33c88b00} fill="var(--fill-0, #687576)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function B() {
  return (
    <div className="backdrop-blur-[16px] bg-[rgba(91,144,146,0.2)] content-stretch flex flex-col items-center justify-center px-[624px] py-[330px] relative size-full" data-name="B - 14">
      <div className="bg-white max-h-[600px] relative rounded-[30px] shrink-0 w-[352px]" data-name="Modal">
        <div className="content-stretch flex flex-col gap-[24px] items-start max-h-[inherit] overflow-clip p-[32px] relative rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col h-[48px] items-start justify-center overflow-clip relative shrink-0 w-[288px]" data-name="[modalHeader]ModalHeader">
            <Title />
          </div>
          <div className="content-stretch flex h-[96px] items-start overflow-clip relative shrink-0 w-full" data-name="[placeholder_modal_text]">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[16px] min-w-px not-italic relative self-stretch text-[12px] text-black">{`This will notify the customer primary and the secondary contacts, do you wish to continue? `}</p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-end overflow-clip relative shrink-0 w-[288px]" data-name="[modalFooter]ModalFooter">
            <div className="content-stretch flex h-[24px] items-center justify-center overflow-clip px-[16px] py-[6px] relative rounded-[6px] shrink-0" data-name="ButtonHug">
              <div className="[word-break:break-word] capitalize flex flex-col font-['Lato:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3a3a] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
                <p className="leading-[12px]">Cancel</p>
              </div>
            </div>
            <div className="bg-[#ffd075] content-stretch flex items-center justify-center min-w-[96px] overflow-clip px-[16px] py-[6px] relative rounded-[6px] shrink-0" data-name="ButtonHug">
              <div className="[word-break:break-word] capitalize flex flex-col font-['Lato:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3a3a] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
                <p className="leading-[12px]">Continue</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dfe2e2] border-solid inset-0 pointer-events-none rounded-[30px]" />
      </div>
    </div>
  );
}