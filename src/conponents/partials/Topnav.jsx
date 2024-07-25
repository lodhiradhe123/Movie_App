import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Topnav() {
  const [query, setquery] = useState("");
  const queryEmpty=()=>{
    setquery("");
  }
  console.log(query);
  return (
    <div className="w-full h-[10vh]  flex items-center justify-start ml-20 relative">
      <IoIosSearch className="text-3xl text-white" />
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        type="text"
        name=""
        id=""
        placeholder="search anything"
        className="text-xl p-2 w-[50%] outline-none border-none m-5 bg-transparent text-zinc-200"
      />
      {query.length > 0 && <RxCross1 onClick={queryEmpty} className="text-2xl text-white" />}

      <div className=" absolute dropdown w-[50%] max-h-[40vh] bg-zinc-900 top-16 overflow-auto">
        {/* <Link className="inline-block w-full  p-4  border-b-[0.8px] hover:bg-zinc-400 duration-300 hover:text-black text-white ">
          <img src="" alt="" />
          <span className="text-xl font-semibold ">hello dosto</span>
        </Link> */}
      </div>
    </div>
  );
}

export default Topnav;
