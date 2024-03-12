const validateName = require("./validateName");

describe("Name validation tests", () => {
  test("Valid name: Simon", () => {
    expect(validateName("Simon")).toBe(true);
  });

  test("Valid name: Neil", () => {
    expect(validateName("Neil")).toBe(true);
  });

  test("Valid name: Dan", () => {
    expect(validateName("Dan")).toBe(true);
  });

  test("Invalid name: Simon123", () => {
    expect(validateName("Simon123")).toBe(false);
  });

  test("Invalid name: Jake-Paul", () => {
    expect(validateName("Jake-Paul")).toBe(false);
  });

  test("Invalid name: empty string", () => {
    expect(validateName("")).toBe(false);
  });

  test("Invalid name: Renée (accented character)", () => {
    expect(validateName("Renée")).toBe(false);
  });

  test("Invalid name: Sørina (special character)", () => {
    expect(validateName("Sørina")).toBe(false);
  });

  test("Invalid name: Юрий (Cyrillic script)", () => {
    expect(validateName("Юрий")).toBe(false);
  });

  test("Invalid name: غسان (Arabic script)", () => {
    expect(validateName("غسان")).toBe(false);
  });
});
