import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [playOnce, setPlayeOnce] = useState(true);

    useEffect(() => {
        if (playOnce) {

            axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => {
                setData(res.data)
                setPlayeOnce(false)
            });
        }

          const sortedCoutry = () => {
            const countryObj = Object.keys(data).map((i) => data[i]);
            const sortedArray = countryObj.sort((a, b) => {
                return b.population - a.population
            });
        }
          sortedCoutry();
        }, [data, playOnce]);


    return(
        <div className="countries">
            <ul className="countries-list">
                 {data.map((country, index) => (
                     <Card country={country} key={index} />
            ))}
            </ul>
        </div>
    ); 
};

export default Countries;