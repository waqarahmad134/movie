import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="absolute top-[36px] left-[224px] flex flex-row items-start justify-start gap-[16px]">
        <Link to={"/about"} className="relative font-semibold">
          Home
        </Link>
        <Link className="relative font-semibold">Genre</Link>
        <Link to={`/blog/Genre`}>Genre</Link>
        <Link to={`/blog/Country`}>Country</Link>
        <Link to={`/blog/waqar`}>waqar</Link>
        <div className="relative font-semibold">Country</div>
      </div>
    </div>
  );
}
