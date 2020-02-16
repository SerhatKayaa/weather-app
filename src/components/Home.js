import React from 'react';
import { useSelector } from 'react-redux';
import ScrollMenuContainer from '../container/ScrollMenuContainer';
import useWeatherInfo from './useWeatherInfo';

const Home = () => {
    const selectedCity = useSelector(state => state.selectedCity)
    const data = useWeatherInfo(selectedCity);
    return (
        <div>
            <div class="ui large header" style={centeredText}>Choose City</div>
            <div class="ui large header" style={centeredText}>{data.name}</div>
            { data.length <= 0
                ? 'Please select a city name'
                :   (<div className="ui container ui segment">
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
            <div>
                <ScrollMenuContainer />
            </div>
        </div>
    );
};

const centeredText = {
    margin: '20px',
    textAlign: 'center',
}

const rowContainer = {
    margin: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

}


export default Home;