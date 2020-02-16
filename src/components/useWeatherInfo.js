import { useState, useEffect } from 'react';
import axios from 'axios';

const useWeatherInfo = (cityName) => {
    console.log(cityName);
    const [data, setData] = useState([]);
    const API_KEY = "ca9030d3b4aa13f0fe710235aea3d334";

    const fetchWeatherByName = async (cityName) => {
        if(cityName !== '') {
            const response = await axios.get(
                `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
            );
            console.log(response.status);
            if(response.status === 200) {
                console.log(response.data);
                setData(response.data);
            }
        }
    }

    useEffect(() => {
        if(cityName !== '') {
            fetchWeatherByName(cityName);
        }
    }, [cityName]);
    
    return data;
}

export default useWeatherInfo;