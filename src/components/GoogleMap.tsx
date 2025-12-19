import { useEffect, useRef } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import coffeeMarkerIcon from "../assets/svg/coffee-bean-marker.svg";

type Props = { apiKey: string };

export function GoogleMap({ apiKey }: Props) {
  const mapDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let map: google.maps.Map | null = null;

    const init = async () => {
      if (!mapDivRef.current) return;

      const center: google.maps.LatLngLiteral = { lat: 50.459, lng: 30.5255 };

      setOptions({ key: apiKey, v: "weekly" });

      const { Map } = (await importLibrary("maps")) as google.maps.MapsLibrary;
      const { Marker } = (await importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      map = new Map(mapDivRef.current, {
        center,
        zoom: 12,
        mapTypeId: "roadmap",
        disableDefaultUI: false,
      });

      const marker = new Marker({
        position: center,
        map,
        title: "Ми тут!",
        animation: google.maps.Animation.DROP,
        icon: {
          url: coffeeMarkerIcon,
          scaledSize: new google.maps.Size(50, 50),
          anchor: new google.maps.Point(25, 25),
        },
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 8px; color: #4f2d20;">
            <h3 style="margin: 0 0 5px 0;">Coffee Explorer</h3>
            <p style="margin: 0;">Найкраща кава у світі!</p>
          </div>
        `,
      });

      marker.addListener("click", () => {
        infoWindow.open({ map: map!, anchor: marker });
      });
    };

    init();

    return () => {
      map = null;
    };
  }, [apiKey]);

  return (
    <div
      ref={mapDivRef}
      style={{ width: "100%", height: 400, borderRadius: "1rem" }}
    />
  );
}
