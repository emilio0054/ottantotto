import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

function Map() {
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 40.7128, lng: -74.0060 }} // Cambia las coordenadas según tu ubicación
    >
      <Marker position={{ lat: 40.7128, lng: -74.0060 }} title="¡Aquí estoy!" />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export function Maps() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDapB6-c-4-j_hlUtlXqto4oGFSBi-AYRs`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
}
