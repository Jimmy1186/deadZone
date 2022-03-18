import React from "react";

function Choose({ setChoose, setTeamColor}) {
  return (
    <>
      <div className="choose">
        <h1>CHOOSE TEAM</h1>
        <div className="choseBlock">
          <div className="redTeam" onClick={()=>{setChoose(pre=>!pre),setTeamColor("RED")}}></div>
          <div className="blueTeam" onClick={()=>{setChoose(pre=>!pre),setTeamColor("BLUE")}}></div>
        </div>
      </div>
    </>
  );
}

export default Choose;
