import React from "react";
import Sidenavbar from "./partials/Sidenavbar";
import Topnav from "./partials/Topnav";

function Home() {
  return (
    < div className="flex bg-black">
      <Sidenavbar />
      <div className="w-[80%] h-full">
        <Topnav />
      </div>
    </div>
  );
}

export default Home;
