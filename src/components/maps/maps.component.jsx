import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerMapStyle = {
    width: '100%',
    height: '455px'
}
const Maps = ({latitude, longitude}) => {
    const apiKey = 'AIzaSyANr-phi6P3AdJkTfOjBeyU7kRtlo_4e4E';
    const center = {
        lat: Number(latitude),
        lng: Number(longitude),
    }
    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap 
                mapContainerStyle={containerMapStyle}
                center={center}
                zoom={14}
            >
                <Marker position={center}/>
            </GoogleMap>
        </LoadScript>
    )
}

export default Maps;