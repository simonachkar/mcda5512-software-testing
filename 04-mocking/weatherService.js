const getTemperature = async (city, unit, apiKey) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return data.main.temp; // Temperature in Celsius
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getTemperature };

