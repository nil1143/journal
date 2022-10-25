import React from "react"
import MappedJournal from "./components/MappedJournal"
import data from "./data"

export default function MapJournal() {
    const mapJournal = data.map(item => {
        return (
            <MappedJournal
            key={item.id}
            {...item}
            />
        )
    })
    return (
        <section className="journal-section">
            <div className="bar">
                <p className="headerr"><i className="fa-solid fa-earth-americas"></i> my travel journal.</p>
            </div>  
            {mapJournal}
            </section>    
    )
}