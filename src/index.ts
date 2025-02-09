import { fetchWithConcurrency } from "./fetchConcurrency";
import { LicensePlateGenerator } from "./licensePlate";

(async () => {
    // ✅ Probar `fetchWithConcurrency`
    const urls = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/2"
    ];
    const maxConcurrency = 2;
    const responses = await fetchWithConcurrency(urls, maxConcurrency);
    
    for (const res of responses) {
        console.log(await res.json());
    }

    // ✅ Probar `LicensePlateGenerator`
    console.log("Placas de prueba:");
    console.log(LicensePlateGenerator.getPlateByIndex(0)); // "000000"
    console.log(LicensePlateGenerator.getPlateByIndex(999999)); // "999999"
    console.log(LicensePlateGenerator.getPlateByIndex(1000000)); // "00000A"
    console.log(LicensePlateGenerator.getPlateByIndex(9999999)); // "000AAA"
    console.log(LicensePlateGenerator.getPlateByIndex(50000000)); // "0ZZZZZ"
    console.log(LicensePlateGenerator.getPlateByIndex(9999999999)); // "ZZZZZZ"
})();
