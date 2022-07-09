import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

const Map = withScriptjs(withGoogleMap(props => {
    return (
        <GoogleMap
            defaultZoom={13}
            defaultCenter={props.location}
        >
            <Marker
                position={props.location}
            />
        </GoogleMap>
    )
}
));

export default Map

