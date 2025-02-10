// import { LicensePlateGenerator } from "../src/licensePlate";

import { generateLicensePlate } from "../src/licensePlate";

describe("LicensePlateGenerator", () => {
  test("should generate correct numeric plates", () => {
    expect(generateLicensePlate(1)).toBe("000000");
    expect(generateLicensePlate(2)).toBe("000001");
    expect(generateLicensePlate(999999)).toBe("999999");
  });

  test("should correctly transition to lettered plates", () => {
    expect(generateLicensePlate(1000000)).toBe("00000A");
    expect(generateLicensePlate(1000001)).toBe("00001A");
    expect(generateLicensePlate(1099999)).toBe("99999A");
    expect(generateLicensePlate(1100000)).toBe("00000B");
  });

  test("should throw an error for negative indices", () => {
    expect(() => generateLicensePlate(-1)).toThrow("Number must be positive");
  });
});
