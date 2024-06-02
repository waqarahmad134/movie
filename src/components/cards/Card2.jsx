import React from "react";

export default function Card2() {
  return (
    <div>
      <div className="w-[352px] relative h-[341px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-3xs w-[352px] h-[293px] object-cover"
          alt=""
          src="/rectangle-3@2x.png"
        />
        <div className="absolute top-[303px] left-[0px] text-5xl font-semibold">
          Medellin
        </div>
        <div className="absolute top-[301px] left-[187px] rounded-3xs bg-red flex flex-row items-start justify-start p-2">
          <div className="relative">Action</div>
        </div>
        <div className="absolute top-[301px] left-[267px] rounded-3xs bg-red flex flex-row items-start justify-start p-2">
          <div className="relative">Comedy</div>
        </div>
        <div className="absolute top-[11px] left-[302px] rounded-3xs w-[34px] h-[26px] flex flex-row items-center justify-center p-2 box-border gap-[4px]">
          <img className="w-[15px] relative h-3.5" alt="" src="/vector5.svg" />
          <div className="relative">8.0</div>
        </div>
        <div className="absolute top-[8px] left-[16px] rounded-3xs flex flex-row items-center justify-center p-1 gap-[8px]">
          <img
            className="w-[13.3px] relative h-[13.3px] object-contain"
            alt=""
            src="/vector1.svg"
          />
          <div className="relative font-medium">3:12:00</div>
        </div>
        <img
          className="absolute top-[117px] left-[146px] w-[59px] h-[59px]"
          alt=""
          src="/vector6.svg"
        />
      </div>
    </div>
  );
}
