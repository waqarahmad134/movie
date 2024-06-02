import React from "react";

export default function Banner() {
  return (
    <div>
      {" "}
      <img
        className="absolute top-[112px] left-[0px] w-[1440px] h-[744px] object-cover"
        alt=""
        src="/rectangle-2@2x.png"
      />
      <b className="absolute top-[564px] left-[160px] text-[32px]">
        Avatar: The Way of Water
      </b>
      <div className="absolute top-[688px] left-[160px] font-medium inline-block w-[626px]">
        <p className="m-0">{`Set more than a decade after the events of the first film, learn the story of the `}</p>
        <p className="m-0">
          Sully family (Jake, Neytiri, and their kids), the trouble that follows
          them, the lengths they go to keep each other safe, the battles they
          fight to stay alive, and the tragedies they endure.
        </p>
      </div>
      <div className="absolute top-[620px] left-[160px] flex flex-row items-start justify-start gap-[8px] text-black">
        <div className="rounded-xl bg-white flex flex-row items-center justify-center p-2.5">
          <div className="relative font-semibold">Action</div>
        </div>
        <div className="rounded-xl bg-white flex flex-row items-center justify-center p-2.5">
          <div className="relative font-semibold">Adventure</div>
        </div>
        <div className="rounded-xl bg-white flex flex-row items-center justify-center p-2.5">
          <div className="relative font-semibold">Science Fiction</div>
        </div>
        <div className="rounded-xl flex flex-row items-center justify-center p-2.5 gap-[10px] text-white">
          <img
            className="w-[17.1px] relative h-[17px]"
            alt=""
            src="/group.svg"
          />
          <div className="relative font-medium">2022</div>
        </div>
        <div className="rounded-xl flex flex-row items-center justify-center p-2.5 gap-[10px] text-white">
          <img
            className="w-[13.3px] relative h-[13.3px] object-contain"
            alt=""
            src="/vector1.svg"
          />
          <div className="relative font-medium">3:12:00</div>
        </div>
        <div className="rounded-xl flex flex-row items-center justify-center p-2.5 gap-[10px] text-white">
          <img className="w-[17px] relative h-4" alt="" src="/vector2.svg" />
          <div className="relative font-medium">8.5</div>
        </div>
      </div>
      <div className="absolute top-[433px] left-[calc(50%_-_233px)] flex flex-row items-start justify-start gap-[44px] text-5xl">
        <div className="rounded-8xs bg-red flex flex-row items-center justify-center p-2.5">
          <div className="flex flex-row items-start justify-start p-2.5 gap-[10px]">
            <b className="relative">Watch Now</b>
            <img
              className="w-[31px] relative h-[31px]"
              alt=""
              src="/vector3.svg"
            />
          </div>
        </div>
      </div>
     
    
    </div>
  );
}
