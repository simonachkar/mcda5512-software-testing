# Mocking (Weather Service with Jest Testing)

This project demonstrates how to use mocking to test a weather service function that fetches temperature data from the OpenWeatherMap API using Jest.

## Project Structure

- `weatherService.js`: Contains the `getTemperature` function that fetches the current temperature for a given city using the OpenWeatherMap API.
- `weatherService.test.js`: Contains Jest tests for the `getTemperature` function, including mocking the `fetch` function used for making API requests.

## Getting Started

To get started with this project, make sure you're in the directory containing the project files, and then run:

```bash
npm install
```

### Running Tests

To run the tests, use the following command:

```bash
npm test
```

This will execute the tests defined in weatherService.test.js using Jest. Remember the project focuses on mocking, and the directory is 04-mocking.
