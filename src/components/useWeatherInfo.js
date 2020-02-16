import { useState, useEffect } from 'react';
import axios from 'axios';

const useWeatherInfo = (cityName) => {
    const [data, setData] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;
    console.log('apikey', process.env.REACT_APP_API_KEY);
    const fetchWeatherByName = async (cityName) => {
        if(cityName !== '') {
            const response = await axios.get(
                `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
            );
            if(response.status === 200) {
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