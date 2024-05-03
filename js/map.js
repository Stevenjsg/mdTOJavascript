document.addEventListener("DOMContentLoaded", () => {
  const API_MAPS = "YOUR_API_kEY";
  var script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${API_MAPS}&callback=initMap&region=es&lenguage=es&v=beta`;
  script.async = true;
  let directionsService;
  let directionsRenderer;

  window.initMap = async () => {
    const position = new google.maps.LatLng(
      38.91024398803711,
      1.4266932010650635
    );
    //import library
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const map = new google.maps.Map(document.getElementById("map"), {
      center: position,
      zoom: 18,
      mapId: "76a9e4440785a254",
    });
    const marker = new AdvancedMarkerElement({
      map,
      position,
      title: "GeniusWeb",
    });
    directionsRenderer.setMap(map);
  };

  const $button = document.getElementById("Arrive");
  $button.addEventListener("click", () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const origin = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          };
          getCalRoute(origin);
        },
        (error) => {
          console.error("Error al obtener la ubicacion: ", error);
        }
      );
    } else {
      console.error("La geolocalizacion no esta disponible");
    }
  });

  function getCalRoute(origin) {
    const ends = new google.maps.LatLng(38.91024398803711, 1.4266932010650635);
    const request = {
      origin,
      destination: ends,
      travelMode: "DRIVING",
      region: "es",
    };
    directionsService.route(request, (res, status) => {
      if (status === "OK") {
        directionsRenderer.setDirections(res);
      }
    });
  }

  document.head.appendChild(script);
});
