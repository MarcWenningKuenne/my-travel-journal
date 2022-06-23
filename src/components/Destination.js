import React from "react"

function Destination(props) {
    const imgLocation = require(`../img/location.png`)

    return (
        <div className="destination--div">
            <div className="destination--div_image">
                <img className="destination--image" src={props.imageUrl}/>
            </div>
            <div className="destination--div_info">
                <div className="destination--div_location">
                    <img src={imgLocation}/>
                    <h3>{props.location}</h3>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p className="destination--date">{props.startDate} - {props.endDate}</p>
                <p className="destination--text">{props.description}</p>
            </div>
        </div>
    )
}

export default Destination