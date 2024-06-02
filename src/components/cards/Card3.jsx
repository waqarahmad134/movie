import React from "react";

export default function Card3() {
  return (
    <div>
      <div className="flex flex-col items-start justify-start gap-[16px]">
        <img
          className="w-64 relative rounded-3xs h-[344px] object-cover"
          alt=""
          src="/rectangle-6@2x.png"
        />
        <div className="flex flex-row items-center justify-start gap-[65px]">
          <div className="relative font-medium">Ghosted</div>
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="rounded-8xs bg-red flex flex-col items-start justify-start p-1">
              <div className="relative font-medium">HD</div>
            </div>
            <div className="rounded-8xs flex flex-row items-center justify-center p-1 gap-[8px] border-[1px] border-solid border-red">
              <img
                className="w-[13.3px] relative h-[13.3px] object-contain"
                alt=""
                src="/vector1.svg"
              />
              <div className="relative font-medium">3:12:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
