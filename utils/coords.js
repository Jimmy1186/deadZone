const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
    distanceFilter: 1

  };
  function getPosition() {
    return new Promise((res, rej) => {
    	navigator.geolocation.getCurrentPosition(res, rej,options)
    });
}

export async function main() {
    var position = await getPosition();
    console.log(position);
}


