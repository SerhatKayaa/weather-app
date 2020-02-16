export const getCityName = (cityName) => {
    return {
        type: 'GET_CITY_NAME',
        payload: cityName
    };
}

export const selectedCity = (selectedCity) => {
    return {
        type: 'SELECTED_CITY',
        payload: selectedCity,
    }
}