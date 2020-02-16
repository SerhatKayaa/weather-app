import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        dispatch({type: 'GET_CITY_NAME', payload: term});
    }; 
    return (
        <div className="ui segment" style={margin}>
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Search weather condition by City name. Write your city name and click ENTER!</label>
                    <input 
                        type="text"
                        onChange={(e) => setTerm(e.target.value)}/>
                </div>
            </form>
        </div>
    );
};  

const margin = {
    margin: '20px auto',
}

export default SearchBar;