import React from "react";

const NasaData = props => {
    return (
        <div className= "nasadata" key = "">
            <h2>{props.title}</h2> 
            <h4>{props.date}</h4>
            <img className = "nasaimage" alt="nasa here" src = {props.url}/>
            <div className = "para">
            <p>{props.explanation}</p>
            </div>
        </div>
    )
}

export default NasaData;