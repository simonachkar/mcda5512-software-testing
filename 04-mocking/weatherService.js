const getTemperature = async (city) => {
  const apiKey = "ba54be19d96707cf43191d3e9adbd4f9";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.main.temp; // Temperature in Celsius
  } catch (error) {
    throw new Error("Failed to fetch temperature");
  }
};

module.exports = { getTemperature };

/* If you want to run this file `node weatherService.js`, add this code */

// (async () => {
//   try {
//     const temperature = await getTemperature("London");
//     console.log(`Temperature in London: ${temperature}°C`);
//   } catch (error) {
//     console.error(error.message);
//   }
// })();
