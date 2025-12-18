import { useEffect, useRef } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader"; // <-- замість Loader
// import { BiSolidCoffeeBean } from "react-icons/bi";

type Props = { apiKey: string };

export function GoogleMap({ apiKey }: Props) {
  const mapDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let map: google.maps.Map | null = null;

    const init = async () => {
      if (!mapDivRef.current) return;

      const center: google.maps.LatLngLiteral = { lat: 50.4501, lng: 30.5234 };

      // 1) налаштування лоадера (ключ + версія)
      setOptions({ key: apiKey, v: "weekly" }); // саме key/v як у доках [web:4]

      // 2) підвантажуємо потрібні бібліотеки
      await importLibrary("maps");
      await importLibrary("marker");

      // 3) далі можна користуватись google.maps.*
      map = new google.maps.Map(mapDivRef.current, {
        center,
        zoom: 12,
        mapTypeId: "roadmap",
      });

      const marker = new google.maps.Marker({
        position: center,
        map,
        title: "Київ",
        animation: google.maps.Animation.DROP,
        icon: {
          url: "/assets/svg/coffee-bean-marker.svg",
          scaledSize: new google.maps.Size(30, 30),
          anchor: new google.maps.Point(15, 15),
        },
      });

      const infoWindow = new google.maps.InfoWindow({
        content:
          '<div style="padding: 10px;"><h3>Київ</h3><p>Столиця України</p></div>',
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

  return <div ref={mapDivRef} style={{ width: "100%", height: 400 }} />;
}
