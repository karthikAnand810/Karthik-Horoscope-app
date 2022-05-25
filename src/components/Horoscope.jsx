import React, { useEffect, useState } from "react";
import { getHoroscopeData } from "../services/api";
export const Horoscope = ({ data }) => {
    const [horoscope, setHoroscope] = useState([]);
    // const current = new Date();
    // const dateRange = [
    //     { name: 'Aries', start: "03-21", end: "04-19" },
    //     { name: 'Taurus', start: "04-20", end: "05-20" },
    //     { name: 'Gemini', start: "05-21", end: "06-20" },
    //     { name: 'Cancer', start: "06-21", end: "07-22" },
    //     { name: 'Leo', start: "07-23", end: "08-22" },
    //     { name: 'Virgo', start: "08-23", end: "09-22" },
    //     { name: 'Libra', start: "09-23", end: "10-22" },
    //     { name: 'Scorpio', start: "10-23", end: "11-21" },
    //     { name: 'Sagittarius', start: "11-22", end: "12-21" },
    //     { name: 'Capricorn', start: "12-22", end: "01-19" },
    //     { name: 'Aquarius', start: "01-20", end: "02-18" },
    //     { name: 'Pisces', start: "02-19", end: "03-20" },
    // ]
    useEffect(() => {
        getHoroscopeData(data.sign, data.day).then(setHoroscope);
    }, [data.sign, data.day]);
    
    return (
        <div>
            <h1>{data.date}</h1>
            <h1>{data.name}</h1>
            <h1>{data.email}</h1>
            <h2>
                {data.day}, You'r Horoscope for {data.sign} is...
            </h2>
            <p>{horoscope}</p>
            
        </div>
    )
}