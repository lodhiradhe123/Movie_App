import React from "react";
import { Link } from "react-router-dom";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaFire } from "react-icons/fa";
import { SiTrendmicro } from "react-icons/si";
import { RiMovie2Line } from "react-icons/ri";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { MdOutlineGroups } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";








function Sidenavbar() {
  return (
    <div className="w-1/5 min-h-screen bg-stone-900 p-1 text-white p-5">
      <section className="text-3xl w-full flex gap-2 mt-4 p-1">
        <span className="text-4xl">
          <PiTelevisionSimpleFill />
        </span>
        <h1 className=" font-semibold"> SCSDB</h1>
      </section>
      <h1 className="text-xl font-semibold mt-5">New Feeds</h1>
      <section className="text-xl font-semibold text-zinc-400 ml-4 mt-2 flex flex-col gap-1   pb-5 border-b-2 border-zinc-700 ">
        {[{icon:<FaFire/>,name:"Trending"}, {icon:<SiTrendmicro/>,name:"Popular"}, {icon:<RiMovie2Line/>,name:"Movies"}, {icon:<PiTelevisionSimpleBold/>,name:"Tv Shows"}, {icon:<MdOutlineGroups/>,name:"Poeple"}].map(
          (ele, i) => (
            <span key={i} className="w-52 h-12 hover:bg-blue-300 hover:text-white duration-300 flex items-center px-2 rounded-lg gap-1 ">
              {ele.icon}
              <Link >{ele.name}</Link>
            </span>
          )
        )}
      </section>
      <h1 className="text-xl font-semibold mt-5">Website information</h1>
      <section className="text-xl font-semibold text-zinc-400 ml-4 mt-3 flex flex-col gap-3  ">
        {[{icon:<IoIosInformationCircle/>,name:"About SCSDB"}, {icon:<FaPhone/>,name:"Contact us"}].map(
          (ele, i) => (
            <span key={i} className="w-52 h-8 hover:bg-blue-300 hover:text-white duration-300 flex items-center px-2 rounded-lg gap-1 ">
              {ele.icon}
              <Link >{ele.name}</Link>
            </span>
          )
        )}
      </section>
    </div>
  );
}

export default Sidenavbar;
