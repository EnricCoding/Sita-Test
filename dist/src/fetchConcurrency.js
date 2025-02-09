"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchWithConcurrency = fetchWithConcurrency;
async function fetchWithConcurrency(urls, maxConcurrency) {
    const results = [];
    const executing = [];
    async function fetchUrl(url, index) {
        try {
            const response = await fetch(url);
            results[index] = response;
        }
        catch (error) {
            console.error(`Error fetching ${url}:`, error);
            results[index] = new Response(null, {
                status: 500,
                statusText: "Fetch Error",
            });
        }
    }
    for (let i = 0; i < urls.length; i++) {
        const fetchPromise = fetchUrl(urls[i], i).then(() => {
            executing.splice(executing.indexOf(fetchPromise), 1);
        });
        executing.push(fetchPromise);
        if (executing.length >= maxConcurrency) {
            await Promise.race(executing);
        }
    }
    await Promise.all(executing);
    return results;
}
