import React from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../container/SearchBar';
import useWeatherInfo from './useWeatherInfo';

const SearchByName = () => {
    const cityName = useSelector(state => state.cityName)

    const data = useWeatherInfo(cityName);

    return (
        <div className="ui container">
            <SearchBar />
            <div className="ui segment">
                <div className="ui container">
                    <div className="ui medium header" style={centerText}>{data.name}</div>
                    <div>
                        { data.length <= 0
                            ? 'Please select a city name'
                            :   (<div>
                                    <div style={rowContainer}>
                                        <div>
                                            Current Temp
                                        </div>
                                        <div>
                                            Feels Like Temp
                                        </div>
                                        <div>
                                            Max Temp
                                        </div>
                                        <div>
                                            Min Temp
                                         </div>
                                    </div>
                                    <div className="ui divider"></div>
                                    <div style={rowContainer}>
                                        <div>
                                            {parseFloat(data.main.temp - 273).toFixed(2)}C
                                        </div>
                                        <div>
                                            {parseFloat(data.main.feels_like - 273).toFixed(2)}C
                                        </div>
                                        <div>
                                            {parseFloat(data.main.temp_max - 273).toFixed(2)}C
                                        </div>
                                        <div>
                                            {parseFloat(data.main.temp_min - 273).toFixed(2)}C
                                        </div>
                                    </div>
                                    <div className="ui divider"></div>
                                    <div style={rowContainer}>
                                        <div>
                                            {data.weather[0]["main"]}
                                        </div>
                                        <div>
                                            {data.weather[0]["description"]}
                                        </div>
                                    </div>
                                    <div className="ui divider"></div>
                                    <div style={rowContainer}>
                                        <div>
                                            WindSpeed
                                        </div>
                                        <div>
                                            WindSpeed Deg
                                        </div>
                                        <div>
                                            WindSpeed Power
                                        </div>
                                    </div>
                                    <div className="ui divider"></div>
                                    <div style={rowContainer}>
                                        <div>
                                            {data.wind.speed}
                                        </div>
                                        <div>
                                            {data.wind.deg}
                                        </div>
                                        <div>
                                            {data.wind.gust}
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
}

const centerText = {
    textAlign: 'center',
}

const rowContainer = {
    margin: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

}


export default SearchByName;