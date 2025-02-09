import { LicensePlateGenerator } from "../src/licensePlate";

describe("LicensePlateGenerator", () => {
  it("should generate correct license plates", () => {
    expect(LicensePlateGenerator.getPlateByIndex(0)).toBe("000000");
    expect(LicensePlateGenerator.getPlateByIndex(999999)).toBe("999999");
    expect(LicensePlateGenerator.getPlateByIndex(1000000)).toBe("00000A");
    expect(LicensePlateGenerator.getPlateByIndex(2000000)).toBe("00000B");
    expect(LicensePlateGenerator.getPlateByIndex(9999999)).toBe("000AAA");
    expect(LicensePlateGenerator.getPlateByIndex(50000000)).toBe("0ZZZZZ");
    expect(LicensePlateGenerator.getPlateByIndex(9999999999)).toBe("ZZZZZZ");
  });

  it("should throw an error for negative indices", () => {
    expect(() => LicensePlateGenerator.getPlateByIndex(-1)).toThrow(
      "El índice no puede ser negativo."
    );
  });
});
