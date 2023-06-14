import React, { useEffect, useState } from 'react';

export function Maps() {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const address = "Passatge d'Utset, 2, 08013 Barcelona"; // Dirección para geocodificar

        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyDapB6-c-4-j_hlUtlXqto4oGFSBi-AYRs`
        );

        if (!response.ok) {
          throw new Error('No se pudo obtener las coordenadas');
        }

        const data = await response.json();

        if (data.results && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setCoordinates({ lat, lng });
        } else {
          throw new Error('No se encontraron resultados');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (coordinates) {
      // Cargar la API de Google Maps
      loadGoogleMapsAPI(() => {
        // Código para inicializar y mostrar el mapa con las coordenadas
        const { lat, lng } = coordinates;

        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat, lng },
          zoom: 16,
        });

        // Código para agregar un marcador en las coordenadas
        new window.google.maps.Marker({
          position: { lat, lng },
          map,
        });
      });
    }
  }, [coordinates]);

  return <div id="map" style={{ width: '100%', height: '400px' }} />;
}

function loadGoogleMapsAPI(callback) {
  if (window.google && window.google.maps) {
    // La API de Google Maps ya está cargada
    callback();
  } else {
    // Cargar la API de Google Maps de manera asíncrona
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDapB6-c-4-j_hlUtlXqto4oGFSBi-AYRs&callback=initMap`;
    script.defer = true;
    script.async = true;
    script.onerror = () => {
      console.error('Error al cargar la API de Google Maps');
    };
    window.initMap = callback;
    document.head.appendChild(script);
  }
}

