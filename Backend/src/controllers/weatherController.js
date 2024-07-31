const { getWeatherData } = require("../services/weatherService");

const getWeather = async (req, res) => {
  const city = req.params.city;

  try {
    const weatherData = await getWeatherData(city);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getWeather };
