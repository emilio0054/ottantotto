import React, { useEffect, useRef, useState } from 'react';

export function Maps() {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const loadMap = () => {
      const google = window.google;

      const mapOptions = {
        center: { lat: 41.404770221563545, lng: 2.177465510753392 }, // Coordenadas de ubicación predeterminadas  
        zoom: 16,
      };

      const mapElement = mapContainerRef.current;
      const newMap = new google.maps.Map(mapElement, mapOptions);

      const geocoder = new google.maps.Geocoder();
      const address = "Passatge d'Utset, 2, 08013 Barcelona";

      geocoder.geocode({ address }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          const location = results[0].geometry.location;
          newMap.setCenter(location);

          const marker = new google.maps.Marker({
            position: location,
            map: newMap,
            title: address,
          });
        } else {
          console.error('Geocodificación fallida. Error:', status);
        }
      });

      setMap(newMap);
    };

    const loadGoogleMapsScript = () => {
      if (!window.google) {
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDapB6-c-4-j_hlUtlXqto4oGFSBi-AYRs&callback=initMap`;
        googleMapScript.async = true;
        googleMapScript.defer = true;
        window.initMap = loadMap;
        document.head.appendChild(googleMapScript);
      } else {
        loadMap();
      }
    };

    loadGoogleMapsScript();
  }, []);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }} />;
}

