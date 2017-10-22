import axios from "axios";

//Don't abuse my API please. You can generate yours for free - check README.md
const API_KEY = "1e9e04d2a5b479bb7e8f9f9b7d9763e0";
// Not so sneaky beaky trick to use the URL in both actions
var ROOT_URL1 = `http://api.openweathermap.org/data/2.5/`;
var ROOT_URL2 = `?appid=${API_KEY}&units=metric`;

export const FETCH_WEATHER = "FETCH_WEATHER";
export const ONE_FETCH = "ONE_FETCH";

// To refactor with Middlewares

export function oneWeather(city, country) {
  const url = `${ROOT_URL1}weather${ROOT_URL2}&q=${city},${country}`;
  const request = axios.get(url);

  return {
    type: ONE_FETCH,
    payload: request
  };
}
export function fetchWeather(city, country) {
  const url = `${ROOT_URL1}forecast${ROOT_URL2}&q=${city},${country}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
