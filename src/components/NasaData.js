import React from "react";

const NasaData = props => {
    return (
        <div className= "nasadata" key = "">
            <h2>{props.title}</h2> 
            <h3> Date: {props.date}</h3>
            <img className = "nasaimage" alt="nasa here" src = {props.url}/>
            <p>{props.explanation}</p>
        </div>
    )
}

export default NasaData;