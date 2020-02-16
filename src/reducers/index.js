import { combineReducers } from "redux";

export const cityNameReducer = (cityName='', action) => {
    if(action.type === 'GET_CITY_NAME') {
        return action.payload;
    }

    return cityName;
};

export const selectedCityReducer = (selectedCity = '', action) => {
    if(action.type === 'SELECTED_CITY') {
        return action.payload;
    }
    return selectedCity
}

export default combineReducers({
    cityName: cityNameReducer,
    selectedCity: selectedCityReducer
})