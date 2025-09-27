import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const NATURAL_EVENT_WILDFIRE = 8;

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const LIVE_DAYS = 30; 

const markers = eventData
  .filter(ev => ev.categories[0].id === NATURAL_EVENT_WILDFIRE)
  .filter(ev => {
    const lastGeometry = ev.geometries[ev.geometries.length - 1];
    const eventDate = new Date(lastGeometry.date);
    const now = new Date();
    const daysDiff = (now - eventDate) / (1000 * 60 * 60 * 24); 
    return daysDiff <= LIVE_DAYS;
  })
  .map((ev, index) => (
    <LocationMarker
      key={index}
      lat={ev.geometries[0].coordinates[1]}
      lng={ev.geometries[0].coordinates[0]}
      onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
    />
  ));


    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map
