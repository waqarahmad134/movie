import React from "react";

export default function Card1() {
  return (
    <div>
      <div className="absolute top-[988px] left-[160px] flex flex-row items-center justify-start gap-[24px]">
        <img
          className="w-16 relative rounded-8xs h-[103px] object-cover"
          alt=""
          src="/rectangle-22@2x.png"
        />
        <div className="flex flex-col items-start justify-start gap-[4px]">
          <div className="relative font-medium">The Flash</div>
          <div className="relative">Series/S 2/EP 9</div>
          <div className="relative">11/05/23</div>
        </div>
      </div>
    </div>
  );
}
