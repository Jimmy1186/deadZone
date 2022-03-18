import { useState, useEffect } from "react";
import { usePosition } from "use-position";

function DeadZone() {
  const [inZone, setInZone] = useState(false);
  // const[crood,setCrood] =useState({})
  const watch = true;
  const settings ={
    enableHighAccuracy:true
  }
  const { latitude, longitude, speed, timestamp, accuracy, heading, error } =
    usePosition(watch,settings);

  useEffect(() => {
    // const options = {
    //   enableHighAccuracy: true,
    //   timeout: 50000,
    //   maximumAge:60*60*24,
    //   distanceFilter: 1,
    // };
    // function getPosition() {
    //   return new Promise((res, rej) => {
    //     navigator.geolocation.watchPosition(res, rej, options);
    //   });
    // }

    function arePointsNear(checkPoint, centerPoint, km) {
      var ky = 40000 / 360;
      var kx = Math.cos((Math.PI * centerPoint.lat) / 180.0) * ky;
      var dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
      var dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
      return Math.sqrt(dx * dx + dy * dy) <= km;
    }
    // async function main() {
    //   let position = await getPosition();
    //   return position;
    // }
    // main().then((res) => {
    //   const coord = {
    //     lng: 121.589612,
    //     lat: 25.038521,
    //   };
    //   console.log( res.coords.latitude,res.coords.longitude )
    //   setCrood({ lat: res.coords.latitude, lng:res.coords.longitude })
    //   let n = arePointsNear(
    //     { lng: res.longitude, lat: res.latitude },
    //     coord,
    //     0.01
    //   );
    //   console.log(n);
    //   setInZone(n);
    // });
    const coord = {
      lng: 121.589612,
      lat: 25.038521,
    };
    // console.log( res.coords.latitude,res.coords.longitude )
    // setCrood({ lat: res.coords.latitude, lng:res.coords.longitude })
    let n = arePointsNear({ lng: longitude, lat: latitude }, coord, 0.01);
    console.log(n);
    setInZone(n);
  }, [latitude, longitude]);

  return (
    <div className="zone">
      <div className="game">
        <div className="occupied">
          <div className={`radus A ${inZone ? "zoneR" : "zoneB"}`}>A</div>
          <div className="radus B">B</div>
          <div className="radus C">C</div>
          <div className="radus D">D</div>
          <div className="radus E">E</div>
        </div>
        latitude: {latitude}
        <br />
        longitude: {longitude}
        <br />
        speed: {speed}
        <br />
        timestamp: {timestamp}
        <br />
        accuracy: {accuracy && `${accuracy} meters`}
        <br />
        heading: {heading && `${heading} degrees`}
        <br />
        error: {error}
        <br />
        in zone : {inZone.toString()}
      </div>
      <div className="dashboard"></div>
    </div>
  );
}

export default DeadZone;
