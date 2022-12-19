import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
export default function Dashboard() {
    const user = useContext(userContext)
    const [lat, setLat] = useState()
    const [long, setLong] = useState()
    const [data, setData] = useState()
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            // console.log("position",position)
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });

        console.log("Latitude is:", lat)
        console.log("Longitude is:", long)
        getWeather()
    }, [lat, long]);

    async function getWeather() {
        await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=a9a41563fe3734ac7dd5c3edea5a0b3f`)
            .then(res => res.json())
            .then(result => {
                setData(result)
                // console.log(result);
            });

            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '7736db4254msh7cd6b1a74b6a581p1cec5bjsnfdf2119a6e3e',
                    'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
                }
            };
            
            fetch(`https://forecast9.p.rapidapi.com/rapidapi/forecast/${lat}/${long}/hourly/`, options)
                .then(response => response.json())
                .then(response => console.log(response))
                .catch(err => console.error(err));
    }
    return (
        <>
            <div>Hii {user?.state?.user?.name}</div>
            <div className="card col-4">
                <div>
                    <h3>{data?.name}</h3>
                    <hr></hr>
                    <p>{data?.main?.temp}*C</p>
                </div>
            </div>
        </>
    )
}