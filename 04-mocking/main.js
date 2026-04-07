const { getTemperature } = require("./weatherService");

const city = "Halifax";
const unit = "metric";
const apiKey = "ba54be19d96707cf43191d3e9adbd4f9";

(async () => {
  try {
    const temperature = await getTemperature(city, unit, apiKey);
    console.log(`Temperature in ${city}: ${temperature}°C`);
  } catch (error) {
    console.error(error.message);
  }
})();