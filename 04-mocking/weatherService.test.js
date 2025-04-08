const { getTemperature } = require('./weatherService');  // Import your module
global.fetch = jest.fn(); // Mock the global fetch function

describe('getTemperature', () => {
  // Clear previous mocks before each test
  beforeEach(() => {
    fetch.mockClear();
  });

  it('should return the temperature for a given city and unit', async () => {
    // Define the fake response for fetch
    const fakeResponse = {
      json: jest.fn().mockResolvedValue({
        main: { temp: 22 },  // Fake temperature data
      }),
    };

    // Mock fetch to return the fake response
    fetch.mockResolvedValue(fakeResponse);

    // Fake data
    const city = 'Halifax';
    const unit = 'metric'; 
    const apiKey = 'anything';

    // Call the function with parameters
    const temperature = await getTemperature(city, unit, apiKey);

    // Assert the returned temperature value
    expect(temperature).toBe(22);  

    // Assert fetch was called with the correct URL, including the city, unit, and apiKey
    expect(fetch).toHaveBeenCalledWith(  
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
    );
  });

  it('should throw an error when fetching temperature fails', async () => {
    // Simulate a failure for the fetch request
    fetch.mockRejectedValue(new Error('Failed to fetch'));

    const city = 'Halifax';
    const unit = 'metric'; 
    const apiKey = 'anything';

    // Call the function and assert that it throws the correct error
    await expect(getTemperature(city, unit, apiKey)).rejects.toThrow('Failed to fetch');
  });
});
