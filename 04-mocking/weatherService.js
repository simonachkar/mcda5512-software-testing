const getTemperature = async (city, unit, apiKey) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();

    if (typeof data?.main?.temp !== "number") {
      throw new Error("Temperature data is unavailable");
    }

    return data.main.temp; // Temperature in Celsius
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getTemperature };

