import React from "react"

export default function MappedJournal(props) {
        
    return(
        <div className="journal">
            <img src={`./images/${props.img}`} alt='rendered-imgs'></img>
            <div className="content">
                <h5><i className="fa-sharp fa-solid fa-location-dot"></i>{props.location}</h5>
             
                <h1>{props.title}</h1>
                <h4>{props.date}</h4>
                <p>{props.description}</p>
            </div>
        </div>
        )
}