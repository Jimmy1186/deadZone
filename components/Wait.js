import React from "react";
import Image from "next/image";
import arrow from "../public/arrow-left-circle-outline.png";
import {useRouter} from "next/router"

function Wait() {

  const router = useRouter()

  return (
    <div className="choose">
      <div className="topTitle">
        <Image src={arrow} alt="Back" width={50} height={50} />
        <h1>Waiting</h1>
      </div>

      <div className="people">
        <div className="players">
          <p>Jimmy</p>
          <div className="r"></div>
        </div>

      </div>

    
      

          <input type="button" className="ready-not btn" value="Ready" onClick={()=>router.replace("/deadZone")}/>
 
    </div>
  );
}

export default Wait;
