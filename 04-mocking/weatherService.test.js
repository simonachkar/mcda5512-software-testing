const { getTemperature } = require("./weatherService");

global.fetch = jest.fn();

describe("Weather Service Tests", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("Successfully fetches temperature", async () => {
    fetch.mockResolvedValue({
      json: () =>
        Promise.resolve({
          main: {
            temp: 25,
          },
        }),
    });

    const temperature = await getTemperature("London");
    expect(temperature).toBe(25);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test("Throws error when API call fails", async () => {
    fetch.mockRejectedValue(new Error("API call failed"));

    await expect(getTemperature("London")).rejects.toThrow(
      "Failed to fetch temperature"
    );
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
