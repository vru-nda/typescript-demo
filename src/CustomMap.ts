import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.MAPBOX_TOKEN as string;

export interface MapData {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private mapboxMap: mapboxgl.Map;

  constructor(divId: string) {
    this.mapboxMap = new mapboxgl.Map({
      container: divId,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [0, 0],
      zoom: 1,
    });
  }

  addMarker(mapData: MapData): void {
    const popup = new mapboxgl.Popup().setHTML(mapData.markerContent());
    new mapboxgl.Marker({
      color: mapData.color,
    })
      .setLngLat([mapData.location.lng, mapData.location.lat])
      .setPopup(popup)
      .addTo(this.mapboxMap);
  }
}

// private googleMap: google.maps.Map;

// this.googleMap = new google.maps.Map(
//   document.querySelector("#map") as HTMLElement,
//   {
//     zoom: 1,
//     center: {
//       lat: 0,
//       lng: 0,
//     },
//   }
// );

// const marker = new google.maps.Marker({
//   map: this.googleMap,
//   position: {
//     lat: user.location.lat,
//     lng: user.location.lng,
//   },
// });

// marker.addListener("click", () => {
//   const infoWindow = new google.maps.InfoWindow({
//     content: "HI there",
//   });
//   infoWindow.open(this.googleMap, marker);
// });
