"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const licensePlate_1 = require("../src/licensePlate");
describe("LicensePlateGenerator", () => {
    it("should generate correct license plates", () => {
        expect(licensePlate_1.LicensePlateGenerator.getPlateByIndex(0)).toBe("000000");
        expect(licensePlate_1.LicensePlateGenerator.getPlateByIndex(999999)).toBe("999999");
        expect(licensePlate_1.LicensePlateGenerator.getPlateByIndex(1000000)).toBe("00000A");
        expect(licensePlate_1.LicensePlateGenerator.getPlateByIndex(2000000)).toBe("00000B");
        expect(licensePlate_1.LicensePlateGenerator.getPlateByIndex(9999999)).toBe("000AAA");
        expect(licensePlate_1.LicensePlateGenerator.getPlateByIndex(50000000)).toBe("0ZZZZZ");
        expect(licensePlate_1.LicensePlateGenerator.getPlateByIndex(9999999999)).toBe("ZZZZZZ");
    });
    it("should throw an error for negative indices", () => {
        expect(() => licensePlate_1.LicensePlateGenerator.getPlateByIndex(-1)).toThrow("El índice no puede ser negativo.");
    });
});
