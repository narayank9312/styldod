// src/services/weatherService.js
const axios = require("axios");

const getWeatherData = async (city) => {
  const apiKey = process.env.WEATHER_API_KEY;
  console.log("process.env.WEATHER_API_KEY---", process.env.WEATHER_API_KEY);
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  try {
    const response = await axios.get(url);

    const {
      current: {
        condition: { text: weatherCondition, icon: weatherIcon },
      },
    } = response.data;

    return {
      weatherCondition,
      weatherIcon,
    };
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    throw new Error("Unable to fetch weather data");
  }
};

module.exports = { getWeatherData };
