import React from "react";
import Image from "next/image";
import arrow from "../public/arrow-left-circle-outline.png";

function Username({ nameChoose, setChoosename,  choose, setChoose,username, setusername}) {

  const waitingHandler =(e)=>{
    e.preventDefault()
    setChoosename(pre=>!pre)
  }
  return (
    <div className="choose">
      <div className="topTitle" onClick={()=>{setChoose(pre=>!pre)}}>
        <div className="pic" >
            <Image src={arrow} alt="Back" width={50} height={50} />
        </div>
      
        <h1>USERNAME</h1>
      </div>

      <form className="form" onSubmit={waitingHandler}>
        <input
          className="usernameInput"
          type="text"
          name="name"
          placeholder="john mama"
          value={username}
          onChange={(e)=>setusername(e.target.value)}
        />
        <button type="submit" className="submit btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Username;
