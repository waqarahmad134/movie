import React from "react";

export default function MovieSection1() {
  return (
    <div>
      {" "}
      <b className="absolute top-[1163px] left-[159px] text-5xl">Trending</b>
      <div className="absolute top-[1163px] left-[1155px] flex flex-row items-center justify-start gap-[8px] text-5xl">
        <div className="relative font-semibold opacity-[0.5]">View all</div>
        <img
          className="w-[22px] relative h-5 opacity-[0.5]"
          alt=""
          src="/vector8.svg"
        />
      </div>
    </div>
  );
}
