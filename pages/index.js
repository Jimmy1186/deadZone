import Choose from "../components/Choose";
import Username from "../components/Username";
import Wait from "../components/Wait";
import React, { useState } from "react";


export default function Home() {
 
  const [choose, setChoose] = useState(false);
  const [nameChoose, setChoosename] = useState(false);

  const [teamColor, setTeamColor] = useState("");
  const [username, setusername] = useState("");
  const [ready, setready] = useState(false);

  const props  ={
    choose, setChoose,
    nameChoose, setChoosename,
    teamColor, setTeamColor,
    username, setusername,
    ready, setready
  }
  if(!choose&&!nameChoose){
    return ( <Choose {...props}/>)
  }
  if(choose&&!nameChoose){
    return (
       <Username  {...props}/>
    )
  }
  if(choose&&nameChoose){
    return (
      <Wait  {...props}/>
    )
  }
 
 
}
