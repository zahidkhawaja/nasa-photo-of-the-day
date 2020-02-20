import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaData from "./NasaData";
import { Spinner } from 'reactstrap';
import AlertUser from "./AlertUser";

export default function NasaCard() {
    const [nasaphoto, setNasaPhoto] = useState("");
    const [loadstatus, setLoadStatus] = useState(false);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=fUkBjsEiWIqFvwi2I0pM7NidBIu2qgggpRsmO9sf")
            .then(response => {
                setNasaPhoto(response.data);
                setLoadStatus(true);
            })
            .catch(error => {
                console.log("Error fetching data", error);
                setLoadStatus(false);
            });
    }, [loadstatus]);

    if (loadstatus) {
        return (
            <div className = "container">
                <AlertUser loaded= {loadstatus} />
                <NasaData title = {nasaphoto.title} url = {nasaphoto.url} date = {nasaphoto.date} explanation = {nasaphoto.explanation} />
            </div>
        )
    } else {
        return (
        <div className = "container">
        <AlertUser loaded= {loadstatus} />
        <Spinner color="danger" />
        </div>
        )
}
    }





