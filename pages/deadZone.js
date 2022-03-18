import React, { useRef, useState, useEffect } from "react";
// import {main} from "./../utils/coords"

function deadZone() {
const [inZone,setInZone] = useState(false)


  const options = {
    enableHighAccuracy: true,
    timeout: 50000,
    maximumAge: 0,
    distanceFilter: 1,
  };

  function getPosition() {
    return new Promise((res, rej) => {
      navigator.geolocation.watchPosition(res, rej, options);
    });
  }

  const coord = {
    lng: 121.589612,
    lat: 25.038521,
  };

  const cheCoord = {
    lng: 121.367259,
    lat: 25.102381,
  };

  function arePointsNear(checkPoint, centerPoint, km) {
    var ky = 40000 / 360;
    var kx = Math.cos((Math.PI * centerPoint.lat) / 180.0) * ky;
    var dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
    var dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
    return Math.sqrt(dx * dx + dy * dy) <= km;
  }

  async function main() {
    let position = await getPosition();
    return position;
  }
  // const canvasRef = useRef(null)

  useEffect(() => {

   main().then((res) => {
      let n = arePointsNear(
        { lng: res.longitude, lat: res.latitude },
        coord,
        0.005
      );
      console.log(n)
      setInZone(n)
    });
   
 

    // const canvas = canvasRef.current
    // const A = canvas.getContext('2d')
    // const B = canvas.getContext('2d')
    // // A.beginPath();
    // A.arc(35,34,5,0, Math.PI * 2, true);
    // A.arc(24.2,32.8,5,0, Math.PI * 2, true);
    // A.arc(69.1,56.1,5,0, Math.PI * 2, true);
    // A.arc(26.8,79.4,5,0, Math.PI * 2, true);
    // A.moveTo(10,30)
    // A.lineTo(65,145)
    // A.lineTo(100,145)
    // A.lineTo(75,105)
    // A.lineTo(50,95)
    // A.lineTo(40,80)
    // A.lineTo(45,35)
    // A.stroke()
    
  }, []);

  return (
    <div className="zone">
      <div className="game">
        <div className="occupied">
          
          <div className={`radus A ${inZone? 'zoneR':'zoneB'}`}>A</div>
          <div className="radus B">B</div>
          <div className="radus C">C</div>
          <div className="radus D">D</div>
          <div className="radus E">E</div>
        </div>
      </div>
      <div className="dashboard"></div>
    </div>
  );
}

export default deadZone;
