import React from "react";
import { Link } from "react-router-dom";

export default function Card1(props) {
  return (
    <div className="">
      <div className="flex flex-row items-center justify-start gap-[24px]">
        <Link>
        <img
          className="w-16 relative rounded-8xs h-[103px] object-cover"
          alt=""
          src="/rectangle-22@2x.png"
        />
        </Link>
        <div className="flex flex-col items-start justify-start gap-[4px]">
          <div className="relative font-medium">The Flash {props?.index}</div>
          <div className="relative">Series/S 2/EP 9</div>
          <div className="relative">11/05/23</div>
        </div>
      </div>
    </div>
  );
}
