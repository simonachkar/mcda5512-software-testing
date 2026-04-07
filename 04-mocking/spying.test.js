/*
- Mocking: replace a function completely with a mock implementation that you can control and inspect
- Spying: watch a real function (and optionally override its result) so you can assert how it was used
*/
const { getTemperature } = require("./weatherService");

describe("getTemperature (with spies)", () => {
  let fetchSpy;

  beforeEach(() => {
    fetchSpy = jest.spyOn(global, "fetch");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns temperature and verifies fetch + json were called", async () => {
    const jsonSpy = jest.fn().mockResolvedValue({ main: { temp: 22 } });

    fetchSpy.mockResolvedValue({
      ok: true,
      json: jsonSpy,
    });

    const result = await getTemperature("Halifax", "metric", "anything");

    expect(result).toBe(22);
    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(fetchSpy).toHaveBeenCalledWith(
      "http://api.openweathermap.org/data/2.5/weather?q=Halifax&appid=anything&units=metric"
    );
    expect(jsonSpy).toHaveBeenCalledTimes(1);
  });

  it("throws when API is non-OK", async () => {
    fetchSpy.mockResolvedValue({
      ok: false,
      status: 404,
      json: jest.fn(),
    });

    await expect(
      getTemperature("Halifax", "metric", "anything")
    ).rejects.toThrow("Weather API error: 404");
  });
});