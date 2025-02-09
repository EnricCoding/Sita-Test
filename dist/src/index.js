"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchConcurrency_1 = require("./fetchConcurrency");
const licensePlate_1 = require("./licensePlate");
(async () => {
    // ✅ Probar `fetchWithConcurrency`
    const urls = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/2"
    ];
    const maxConcurrency = 2;
    const responses = await (0, fetchConcurrency_1.fetchWithConcurrency)(urls, maxConcurrency);
    for (const res of responses) {
        console.log(await res.json());
    }
    // ✅ Probar `LicensePlateGenerator`
    console.log("Placas de prueba:");
    console.log(licensePlate_1.LicensePlateGenerator.getPlateByIndex(0)); // "000000"
    console.log(licensePlate_1.LicensePlateGenerator.getPlateByIndex(999999)); // "999999"
    console.log(licensePlate_1.LicensePlateGenerator.getPlateByIndex(1000000)); // "00000A"
    console.log(licensePlate_1.LicensePlateGenerator.getPlateByIndex(9999999)); // "000AAA"
    console.log(licensePlate_1.LicensePlateGenerator.getPlateByIndex(50000000)); // "0ZZZZZ"
    console.log(licensePlate_1.LicensePlateGenerator.getPlateByIndex(9999999999)); // "ZZZZZZ"
})();
