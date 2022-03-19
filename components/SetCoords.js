import React from "react";
import { useState } from "react";
import { usePosition } from "use-position";

function SetCoords() {
  const [coords, setCoords] = useState([]);
  const settings = {
    enableHighAccuracy: true,
  };
  const { latitude, longitude, speed, timestamp, accuracy, heading, error } =
    usePosition(true, settings);

  const saveCoordHandler = (e) => {
    e.preventDefault();
    setCoords((pre) => [{ lat: latitude, lng: longitude }, ...pre]);
  };

  const remove = (item) => {
    console.log(item);
    let filteredArr = coords.filter((_, el) => el !== item);
    setCoords(filteredArr);
  };

  //   useEffect(()=>{

  //   },[coords])
  return (
    <>
      <div className="setbk">
        <h1>座標</h1>
        <div className="setblock">
          <div className="coordsBtn">
            {coords.length >= 10 ? (
              <h1>座標到達上限</h1>
            ) : (
              <div
              className="addCoord"
                type="button"
                onClick={saveCoordHandler}
              ></div>
            )}
            <div className="sureBtn">
                確定
            </div>
          </div>
          <div className="showCoord">
            {coords.map((c, i) => {
              return (
                <div key={i} className="coords">
                  <h3>
                    {c.lat},
                    {c.lng}
                  </h3>
                  <div className="deleteBtn" onClick={() => remove(i)}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SetCoords;
