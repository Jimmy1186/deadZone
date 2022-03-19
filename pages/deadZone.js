import { useState, useEffect } from "react";
import { usePosition } from "use-position";

function DeadZone() {
  const [inZoneA, setInZoneA] = useState(false);
  const [inZoneB, setInZoneB] = useState(false);
  const [inZoneC, setInZoneC] = useState(false);
  const [inZoneD, setInZoneD] = useState(false);
  const [inZoneE, setInZoneE] = useState(false);
  // const[crood,setCrood] =useState({})
  const watch = true;
  const settings = {
    enableHighAccuracy: true,
  };
  const { latitude, longitude, speed, timestamp, accuracy, heading, error } =
    usePosition(watch, settings);

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
    const coordA = {
      lng: 121.367291,
      lat: 25.102351,
    };
    const coordB = {
      lng: 121.367524,
      lat: 25.102774,
    };
    const coordC = {
      lng: 121.367528,
      lat: 25.103143,
    };
    const coordD = {
      lng: 121.366764,
      lat: 25.103007,
    };
    const coordE = {
      lng: 121.367058,
      lat: 25.102805,
    };
    // console.log( res.coords.latitude,res.coords.longitude )
    // setCrood({ lat: res.coords.latitude, lng:res.coords.longitude })
    let A = arePointsNear({ lng: longitude, lat: latitude }, coordA, 0.01);
    let B = arePointsNear({ lng: longitude, lat: latitude }, coordB, 0.01);
    let C = arePointsNear({ lng: longitude, lat: latitude }, coordC, 0.01);
    let D = arePointsNear({ lng: longitude, lat: latitude }, coordD, 0.01);
    let E = arePointsNear({ lng: longitude, lat: latitude }, coordE, 0.01);

    setInZoneA(A);
    setInZoneB(B);
    setInZoneC(C);
    setInZoneD(D);
    setInZoneE(E);
  }, [latitude, longitude]);

  return (
    <div className="zone">
      <div className="game">
        <div className="occupied">
          <div className={`radus A ${inZoneA ? "zoneR" : "zoneB"}`}>A</div>
          <div className={`radus B ${inZoneB ? "zoneR" : "zoneB"}`}>B</div>
          <div className={`radus C ${inZoneC ? "zoneR" : "zoneB"}`}>C</div>
          <div className={`radus D ${inZoneD ? "zoneR" : "zoneB"}`}>D</div>
          <div className={`radus E ${inZoneE ? "zoneR" : "zoneB"}`}>E</div>
        </div>
        <div className="data">
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
        </div>
      </div>
      <div className="dashboard"></div>
    </div>
  );
}

export default DeadZone;
