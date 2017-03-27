import axios from 'axios';

const API_KEY = '3476342d8797307b90b951f4614f0524';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
const url = `${ROOT_URL}&q=${city}` // ,us
const request = axios.get(url);

return{
    type: FETCH_WEATHER,
payload: request
}

}