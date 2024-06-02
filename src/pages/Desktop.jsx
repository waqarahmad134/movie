import { useCallback } from "react";
import { Link } from "react-router-dom";

const Desktop = () => {
  const onFrameContainer9Click = useCallback(() => {
    // Please sync "Desktop - 2" to the project
  }, []);

  return (
    <div className="w-full relative bg-black h-[3828px] overflow-hidden text-left text-base text-white font-poppins">
      <div className="absolute top-[996px] left-[1184px] rounded-[50%] bg-gainsboro w-[88px] h-[88px]" />
      <div className="absolute top-[36px] left-[224px] flex flex-row items-start justify-start gap-[16px]">
        <Link to={"/about"} className="relative font-semibold">Home</Link>
        <Link  className="relative font-semibold">Genre</Link>
        <Link to={`/blog/Genre`}>Genre</Link>
        <Link to={`/blog/Country`}>Country</Link>
        <Link to={`/blog/waqar`}>waqar</Link>
        <div className="relative font-semibold">Country</div>
      </div>
   
     
      
     
      <div className="absolute top-[62px] left-[243px] rounded-[50%] bg-red w-[5px] h-[5px]" />
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
        <div className="rounded-8xs box-border h-[76px] flex flex-row items-center justify-center p-2.5 gap-[10px] border-[3px] border-solid border-red">
          <b className="relative">Watch Later</b>
          <img className="w-5 relative h-5" alt="" src="/vector4.svg" />
        </div>
      </div>
      <div className="absolute top-[816px] left-[calc(50%_-_92px)] flex flex-row items-center justify-center gap-[16px]">
        <img
          className="w-[37px] relative max-h-full"
          alt=""
          src="/line-1.svg"
        />
        <div className="w-[21px] relative rounded-[50%] bg-white h-[21px]" />
        <div className="w-[21px] relative rounded-[50%] bg-white h-[21px]" />
        <div className="w-[21px] relative rounded-[50%] bg-white h-[21px]" />
        <div className="w-[21px] relative rounded-[50%] bg-white h-[21px]" />
      </div>
      <b className="absolute top-[1636px] left-[159px] text-5xl">
        New Release - Movies
      </b>
      <b className="absolute top-[2160px] left-[159px] text-5xl">
        New Release - Series
      </b>
      <div className="absolute top-[-112px] left-[-2896px] rounded-3xs w-[34px] h-[26px] flex flex-row items-center justify-center p-2 box-border gap-[4px]">
        <img className="w-[15px] relative h-3.5" alt="" src="/vector5.svg" />
        <div className="relative">8.0</div>
      </div>
      <div className="absolute top-[1223px] left-[160px] flex flex-row items-start justify-start gap-[33px]">
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
            <img
              className="w-[15px] relative h-3.5"
              alt=""
              src="/vector5.svg"
            />
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
        <div className="w-[350px] relative h-[341px]">
          <div className="absolute top-[303px] left-[0px] text-5xl font-semibold">
            Fast X
          </div>
          <div className="absolute top-[301px] left-[123px] rounded-3xs bg-red flex flex-row items-start justify-start p-2">
            <div className="relative">Action</div>
          </div>
          <div className="absolute top-[301px] left-[203px] rounded-3xs bg-red flex flex-row items-start justify-start p-2">
            <div className="relative">Crime</div>
          </div>
          <div className="absolute top-[301px] left-[281px] rounded-3xs bg-red flex flex-row items-start justify-start p-2">
            <div className="relative">Thriller</div>
          </div>
          <img
            className="absolute top-[0px] left-[0px] rounded-3xs w-[350px] h-[293px] object-cover"
            alt=""
            src="/rectangle-4@2x.png"
          />
          <img
            className="absolute top-[117px] left-[145px] w-[59px] h-[59px]"
            alt=""
            src="/vector6.svg"
          />
          <div className="absolute top-[11px] left-[300px] rounded-3xs w-[34px] h-[26px] flex flex-row items-center justify-center p-2 box-border gap-[4px]">
            <img
              className="w-[15px] relative h-3.5"
              alt=""
              src="/vector5.svg"
            />
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
        </div>
        <div className="w-[352px] relative h-[341px]">
          <div className="absolute top-[303px] left-[0px] text-5xl font-semibold">
            The Black Dem...
          </div>
          <div className="absolute top-[301px] left-[203px] rounded-3xs bg-red flex flex-row items-start justify-start p-2">
            <div className="relative">Horror</div>
          </div>
          <div className="absolute top-[301px] left-[283px] rounded-3xs bg-red flex flex-row items-start justify-start p-2">
            <div className="relative">Thriller</div>
          </div>
          <img
            className="absolute top-[0px] left-[0px] rounded-3xs w-[352px] h-[293px] object-cover"
            alt=""
            src="/rectangle-5@2x.png"
          />
          <img
            className="absolute top-[117px] left-[149px] w-[59px] h-[59px]"
            alt=""
            src="/vector6.svg"
          />
          <div className="absolute top-[11px] left-[302px] rounded-3xs w-[34px] h-[26px] flex flex-row items-center justify-center p-2 box-border gap-[4px]">
            <img
              className="w-[15px] relative h-3.5"
              alt=""
              src="/vector5.svg"
            />
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
        </div>
      </div>
      <div className="absolute top-[-115px] left-[-3182px] rounded-3xs flex flex-row items-center justify-center p-1 gap-[8px]">
        <img
          className="w-[13.3px] relative h-[13.3px] object-contain"
          alt=""
          src="/vector1.svg"
        />
        <div className="relative font-medium">3:12:00</div>
      </div>
      <div className="absolute top-[1696px] left-[160px] flex flex-row items-start justify-start gap-[32px]">
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
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <img
            className="w-64 relative rounded-3xs h-[344px] object-cover"
            alt=""
            src="/rectangle-7@2x.png"
          />
          <div className="flex flex-row items-center justify-start gap-[9px]">
            <div className="relative font-medium">John Wick: Ch...</div>
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
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <img
            className="w-64 relative rounded-3xs h-[344px] object-cover"
            alt=""
            src="/rectangle-8@2x.png"
          />
          <div className="flex flex-row items-center justify-start gap-[2px]">
            <div className="relative font-medium">Guardians of th..</div>
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
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <img
            className="w-64 relative rounded-3xs h-[344px] object-cover"
            alt=""
            src="/rectangle-9@2x.png"
          />
          <div className="flex flex-row items-center justify-start gap-[26px]">
            <div className="relative font-medium">The Conven...</div>
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
      <div
        className="absolute top-[2220px] left-[160px] flex flex-col items-start justify-start gap-[16px] cursor-pointer"
        onClick={onFrameContainer9Click}
      >
        <img
          className="w-64 relative rounded-3xs h-[344px] object-cover"
          alt=""
          src="/rectangle-10@2x.png"
        />
        <div className="flex flex-row items-center justify-start gap-[109px]">
          <div className="relative font-medium">Silo</div>
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="rounded-8xs bg-red flex flex-col items-start justify-start p-1">
              <div className="relative font-medium">HD</div>
            </div>
            <div className="rounded-8xs flex flex-row items-center justify-center p-1 border-[1px] border-solid border-red">
              <div className="relative font-medium">Season 1</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2220px] left-[448px] flex flex-col items-end justify-start gap-[16px]">
        <img
          className="w-64 relative rounded-3xs h-[344px] object-cover"
          alt=""
          src="/rectangle-11@2x.png"
        />
        <div className="flex flex-row items-center justify-start gap-[38px]">
          <div className="relative font-medium">Black Knight</div>
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="rounded-8xs bg-red flex flex-col items-start justify-start p-1">
              <div className="relative font-medium">HD</div>
            </div>
            <div className="rounded-8xs flex flex-row items-center justify-center p-1 border-[1px] border-solid border-red">
              <div className="relative font-medium">Season 1</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2220px] left-[736px] flex flex-col items-end justify-start gap-[16px]">
        <img
          className="w-64 relative rounded-3xs h-[344px] object-cover"
          alt=""
          src="/rectangle-12@2x.png"
        />
        <div className="flex flex-row items-center justify-start gap-[32px]">
          <div className="relative font-medium">Drops of God</div>
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="rounded-8xs bg-red flex flex-col items-start justify-start p-1">
              <div className="relative font-medium">HD</div>
            </div>
            <div className="rounded-8xs flex flex-row items-center justify-center p-1 border-[1px] border-solid border-red">
              <div className="relative font-medium">Season 1</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2220px] left-[1024px] flex flex-col items-start justify-start gap-[16px]">
        <img
          className="w-64 relative rounded-3xs h-[344px] object-cover"
          alt=""
          src="/rectangle-13@2x.png"
        />
        <div className="flex flex-row items-center justify-start gap-[10px]">
          <div className="relative font-medium">The Night Agent</div>
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="rounded-8xs bg-red flex flex-col items-start justify-start p-1">
              <div className="relative font-medium">HD</div>
            </div>
            <div className="rounded-8xs flex flex-row items-center justify-center p-1 border-[1px] border-solid border-red">
              <div className="relative font-medium">Season 1</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2752px] left-[160px] flex flex-row items-start justify-start gap-[32px]">
        <div className="flex flex-col items-end justify-start gap-[15px]">
          <img
            className="w-64 relative rounded-3xs h-[344px] object-cover"
            alt=""
            src="/rectangle-14@2x.png"
          />
          <div className="flex flex-row items-center justify-start gap-[63px]">
            <div className="relative font-medium">Robots</div>
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="rounded-8xs bg-red flex flex-col items-start justify-start p-1">
                <div className="relative font-medium">CAM</div>
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
        <div className="flex flex-col items-start justify-start gap-[15px]">
          <img
            className="w-64 relative rounded-3xs h-[344px] object-cover"
            alt=""
            src="/rectangle-15@2x.png"
          />
          <div className="flex flex-row items-center justify-start gap-[31px]">
            <div className="relative font-medium">Love Again</div>
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="rounded-8xs bg-red flex flex-col items-start justify-start p-1">
                <div className="relative font-medium">CAM</div>
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
        <div className="flex flex-col items-start justify-start gap-[15px]">
          <img
            className="w-64 relative rounded-3xs h-[344px] object-cover"
            alt=""
            src="/rectangle-16@2x.png"
          />
          <div className="flex flex-row items-center justify-start gap-[47px]">
            <div className="relative font-medium">Hypnotic</div>
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="rounded-8xs bg-red flex flex-col items-start justify-start p-1">
                <div className="relative font-medium">CAM</div>
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
        <div className="flex flex-col items-start justify-start gap-[15px]">
          <img
            className="w-64 relative rounded-3xs h-[344px] object-cover"
            alt=""
            src="/rectangle-17@2x.png"
          />
          <div className="flex flex-row items-center justify-start gap-[93px]">
            <div className="relative font-medium">Paint</div>
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
      <div className="absolute top-[3179px] left-[160px] flex flex-row items-start justify-start gap-[32px]">
        <div className="flex flex-col items-start justify-start gap-[15px]">
          <img
            className="w-64 relative rounded-3xs h-[344px] object-cover"
            alt=""
            src="/rectangle-18@2x.png"
          />
          <div className="flex flex-row items-center justify-start gap-[38px]">
            <div className="relative font-medium">Book Club</div>
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="rounded-8xs bg-red flex flex-col items-start justify-start p-1">
                <div className="relative font-medium">CAM</div>
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
        <div className="flex flex-col items-start justify-start gap-[15px]">
          <img
            className="w-64 relative rounded-3xs h-[344px] object-cover"
            alt=""
            src="/rectangle-19@2x.png"
          />
          <div className="flex flex-row items-center justify-start gap-[44px]">
            <div className="relative font-medium">The Mother</div>
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
        <div className="flex flex-col items-start justify-start gap-[15px]">
          <img
            className="w-64 relative rounded-3xs h-[344px] object-cover"
            alt=""
            src="/rectangle-20@2x.png"
          />
          <div className="flex flex-row items-center justify-start gap-[36px]">
            <div className="relative font-medium">January 6th</div>
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
        <div className="flex flex-col items-start justify-start gap-[15px]">
          <img
            className="w-64 relative rounded-3xs h-[344px] object-cover"
            alt=""
            src="/rectangle-21@2x.png"
          />
          <div className="flex flex-row items-center justify-start gap-[102px]">
            <div className="relative font-medium">Sisu</div>
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
      <img
        className="absolute h-[0.42%] w-[0.83%] top-[1.1%] right-[11.53%] bottom-[98.48%] left-[87.64%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector7.svg"
      />
      <div className="absolute top-[2228px] left-[176px] rounded-8xs bg-red flex flex-row items-start justify-start py-0.5 px-1 text-xs">
        <div className="relative font-medium">EP 6</div>
      </div>
      <div className="absolute top-[2228px] left-[464px] rounded-8xs bg-red flex flex-row items-start justify-start py-0.5 px-1 text-xs">
        <div className="relative font-medium">EP 6</div>
      </div>
      <div className="absolute top-[2228px] left-[752px] rounded-8xs bg-red flex flex-row items-start justify-start py-0.5 px-1 text-xs">
        <div className="relative font-medium">EP 6</div>
      </div>
      <div className="absolute top-[2228px] left-[1040px] rounded-8xs bg-red flex flex-row items-start justify-start py-0.5 px-1 text-xs">
        <div className="relative font-medium">EP 6</div>
      </div>
      <div className="absolute top-[928px] left-[160px] text-5xl font-medium">
        Recently Updated
      </div>
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
      <div className="absolute top-[988px] left-[406px] flex flex-row items-center justify-start gap-[24px]">
        <img
          className="w-16 relative rounded-8xs h-[103px] object-cover"
          alt=""
          src="/rectangle-221@2x.png"
        />
        <div className="flex flex-col items-start justify-start gap-[4px]">
          <div className="relative font-medium">Fubar</div>
          <div className="relative">Series/S 1/EP 8</div>
          <div className="relative">11/05/23</div>
        </div>
      </div>
      <div className="absolute top-[988px] left-[648px] flex flex-row items-center justify-start gap-[24px]">
        <img
          className="w-16 relative rounded-8xs h-[103px] object-cover"
          alt=""
          src="/rectangle-222@2x.png"
        />
        <div className="flex flex-col items-start justify-start gap-[4px]">
          <div className="relative font-medium">Manifest</div>
          <div className="relative">Series/S 4/EP 12</div>
          <div className="relative">11/05/23</div>
        </div>
      </div>
      <div className="absolute top-[988px] left-[899px] flex flex-row items-center justify-start gap-[24px]">
        <img
          className="w-16 relative rounded-8xs h-[103px] object-cover"
          alt=""
          src="/rectangle-223@2x.png"
        />
        <div className="flex flex-col items-start justify-start gap-[4px]">
          <div className="relative font-medium">Silo</div>
          <div className="relative">Series/S 1/EP 10</div>
          <div className="relative">11/05/23</div>
        </div>
      </div>
      <b className="absolute top-[1163px] left-[159px] text-5xl">Trending</b>
      <div className="absolute top-[1163px] left-[1155px] flex flex-row items-center justify-start gap-[8px] text-5xl">
        <div className="relative font-semibold opacity-[0.5]">View all</div>
        <img
          className="w-[22px] relative h-5 opacity-[0.5]"
          alt=""
          src="/vector8.svg"
        />
      </div>
      <img
        className="absolute top-[1024px] left-[1210px] w-9 h-8"
        alt=""
        src="/group-5.svg"
      />
      <div className="absolute top-[1636px] left-[1155px] flex flex-row items-center justify-start gap-[8px] text-5xl">
        <div className="relative font-semibold opacity-[0.5]">View all</div>
        <img
          className="w-[22px] relative h-5 opacity-[0.5]"
          alt=""
          src="/vector8.svg"
        />
      </div>
      <div className="absolute top-[2160px] left-[1155px] flex flex-row items-center justify-start gap-[8px] text-5xl">
        <div className="relative font-semibold opacity-[0.5]">View all</div>
        <img
          className="w-[22px] relative h-5 opacity-[0.5]"
          alt=""
          src="/vector8.svg"
        />
      </div>
      <div className="absolute top-[2684px] left-[159px] flex flex-row items-center justify-start gap-[485px]">
        <div className="flex flex-row items-center justify-start gap-[24px]">
          <b className="relative text-5xl">{`Recommended `}</b>
          <div className="flex flex-row items-start justify-start gap-[24px]">
            <div className="rounded-mini bg-red flex flex-row items-start justify-start p-2.5">
              <div className="relative font-semibold">Movies</div>
            </div>
            <div className="rounded-mini flex flex-row items-start justify-start p-2.5 opacity-[0.5] border-[2px] border-solid border-red">
              <div className="relative opacity-[0.8]">Series</div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="rounded-mini flex flex-row items-start justify-start p-2.5 opacity-[0.5] border-[2px] border-solid border-red">
              <div className="relative opacity-[0.8]">Animation</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[8px] text-5xl">
          <div className="relative font-semibold opacity-[0.5]">View all</div>
          <img
            className="w-[22px] relative h-5 opacity-[0.5]"
            alt=""
            src="/vector8.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Desktop;
