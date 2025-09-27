const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Wildfire Details</h2>
            <ul>
    <li>Reference: <strong>{ info.id }</strong></li>
    <li>Location Name: <strong>{ info.title }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
