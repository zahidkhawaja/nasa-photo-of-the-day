import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaData from "./NasaData";

export default function NasaCard() {
    const [nasaphoto, setNasaPhoto] = useState("");

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(response => {
                setNasaPhoto(response.data);
            })
            .catch(error => {
                console.log("Error fetching data", error);
            });
    }, []);

    return (
        <div className = "container">
            <NasaData title = {nasaphoto.title} url = {nasaphoto.url} date = {nasaphoto.date} explanation = {nasaphoto.explanation} />
        </div>
    )
}





