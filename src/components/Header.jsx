import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="text-white bg-black bg-opacity-50 absolute w-full">
        <div className="flex justify-between items-center gap-2 w-11/12 m-auto py-3">
          <div>
            <img className="w-60" src="logo.png" alt="logo" />
          </div>
          <div className="w-80">
            <form className="relative">
              <input
                value="search"
                type="search"
                name="search"
                id="search"
                placeholder="Search the world best 3D model collection"
                className="w-full mx-auto h-10 bg-[#082835] rounded-full pl-6 outline-none border-none text-white"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-full text-black text-sm bg-white h-6 absolute top-2 right-2 hover:text-[#fe8133] duration-200 px-3"
              >
                <IoIosSearch />
                <span className="hidden md:block">Search</span>
              </button>
            </form>
          </div>
        </div>
        <div className="bg-black hidden md:block">
          <nav className="flex flex-wrap items-center gap-x-2 [&>a]:border-r [&>a]:p-3  ">
            <Link to={"/about"} className="relative font-semibold">
              Home
            </Link>
            <Link>Indian Movies</Link>
            <Link to={`/blog/Genre`}>Hindi Dubbed Movies</Link>
            <Link to={`/blog/Country`}>Punjabi</Link>
            <Link to={`/blog/waqar`}>English</Link>
            <Link to={`/blog/waqar`}>Movies By Actors</Link>
            <Link to={`/blog/waqar`}>Movies By Actress</Link>
            <Link to={`/blog/waqar`}>By Type</Link>
            <Link to={`/blog/waqar`}>Shows / Series</Link>
          </nav>
        </div>
      </div>
    </>
  );
}
