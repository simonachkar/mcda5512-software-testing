const { getTemperature } = require("./weatherService"); // Import your module
const originalFetch = global.fetch;
global.fetch = jest.fn(); // Mock the global fetch function

describe("getTemperature", () => {
  // Clear previous mocks before each test
  beforeEach(() => {
    fetch.mockReset();
  });

  afterAll(() => {
    global.fetch = originalFetch;
  });

  it("should return the temperature for a given city and unit", async () => {
    // Setup the fake response to simulate a successful call
    const fakeResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({
        main: { temp: 22 }, // Fake temperature data
      }),
    };

    // Mock fetch to return the fake response
    fetch.mockResolvedValue(fakeResponse);

    // Fake data
    const city = "Halifax";
    const unit = "metric";
    const apiKey = "anything";

    // Call the function with parameters
    const temperature = await getTemperature(city, unit, apiKey);

    // Assert the returned temperature value
    expect(temperature).toBe(22);
  });

  it("should call fetch once with the correct URL", async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ main: { temp: 22 } }),
    });

    const city = "Halifax",
      unit = "metric",
      apiKey = "anything";
    await getTemperature(city, unit, apiKey);

    expect(fetch).toHaveBeenCalledWith(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
    );
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("should throw an error when fetching temperature fails", async () => {
    // Simulate a failure for the fetch request
    fetch.mockRejectedValue(new Error("Failed to fetch"));

    const city = "Halifax";
    const unit = "metric";
    const apiKey = "anything";

    // Call the function and assert that it throws the correct error
    await expect(getTemperature(city, unit, apiKey)).rejects.toThrow(
      "Failed to fetch"
    );
  });

  it("should throw an error when the API returns a non-OK response", async () => {
    fetch.mockResolvedValue({
      ok: false,
      status: 404,
      json: jest.fn(),
    });

    await expect(
      getTemperature("Halifax", "metric", "anything")
    ).rejects.toThrow("Weather API error: 404");
  });
});
