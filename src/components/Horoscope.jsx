import React, { useEffect, useState } from "react";
import { getHoroscopeData } from "../services/api";
import { Card } from 'primereact/card';
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

    const footer = (
        <span>
            Thank You
        </span>
    );


    return (
        // <div>
        //     <h1>{data.date}</h1>
        //     <h1>{data.name}</h1>
        //     <h1>{data.email}</h1>
        //     <h2>
        //         {data.day}, You'r Horoscope for {data.sign} is...
        //     </h2>
        //     <p>{horoscope}</p>
        // </div>

        <div>
            <div className='header' style={{ width: "250px", height: "100px" }} />
            <Card footer={footer} className="horoscope-data">
                <div style={{ marginBottom: "-31px" }}>
                    <label style={{ paddingRight: "5px" }}>Name of The User:</label><h4 style={{ display: "inline-block" }}>{data.name}</h4>
                </div>
                <div style={{ marginBottom: "-31px" }}>
                    <label style={{ paddingRight: "5px" }}>Email Id:</label>
                    <h4 style={{ display: "inline-block" }}>{data.email}</h4>
                </div>
                <div style={{ marginBottom: "-31px" }}>
                    <label style={{ paddingRight: "5px" }}>Today's Date:</label>
                    <h4 style={{ display: "inline-block" }}>{data.date}</h4>
                </div>
                <div style={{ textTransform: "capitalize", }}>
                    <h2>{data.day}</h2>
                    <h4 style={{ marginTop: "-20px" }}>{`Your Horoscope for ${data.sign} is`}</h4>
                </div>
                <p className="m-0" style={{ lineHeight: '1.5', textAlign: "justify" }}>{horoscope}</p>
            </Card>
        </div>
    )
}