const functions = require("./functions");

describe("add function", () => {
  test("Add 2 + 2 to equal 4", () => {
    expect(functions.add(2, 2)).toBe(4);
  });

  test("Add 2 + 2 should not equal 5", () => {
    expect(functions.add(2, 2)).not.toBe(5);
  });
});

describe("isNull function", () => {
  test("Should return null", () => {
    expect(functions.isNull()).toBeNull();
  });
});

describe("Falsy & Truthy values", () => {
  test("Should be falsy", () => {
    expect(0).toBeFalsy();
    expect(false).toBeFalsy();
    expect("").toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
  });

  test("Should be truthy", () => {
    expect(1).toBeTruthy();
    expect(true).toBeTruthy();
    expect("text").toBeTruthy();
    expect(2).toBeTruthy();
    expect(4.7).toBeTruthy();
  });
});

describe("Comparisons", () => {
  test("Should be under 10 items but more than 1 item", () => {
    const qty = 7;
    expect(qty).toBeLessThan(10);
    expect(qty).toBeGreaterThan(1);
  });
});

describe("getUser function", () => {
  test("User should be Joe Doe", () => {
    expect(functions.getUser()).toEqual({ firstName: "Joe", lastName: "Doe" });
  });
});

describe("throwError function", () => {
  test("Should throw an error", () => {
    expect(() => functions.throwError()).toThrow();
    expect(() => functions.throwError()).toThrow(Error);
    expect(() => functions.throwError()).toThrow("Error thrown");
  });
});

describe("Regex tests", () => {
  test("There is no I in team", () => {
    expect("team").not.toMatch(/I/i);
  });
});

describe("Arrays", () => {
  const admins = ["simon", "neil", "dan"];

  test("simon should be an admin", () => {
    expect(admins).toContain("simon");
  });

  test("dan should also be an admin", () => {
    expect(admins).toContain("dan");
  });
});

describe("Async code", () => {
  test("fetchData returns 'data received'", async () => {
    const data = await functions.fetchData();
    expect(data).toBe("data received");
  });
});

/** Check API Docs here -> https://jestjs.io/docs/expect */
