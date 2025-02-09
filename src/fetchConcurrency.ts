export async function fetchWithConcurrency(
  urls: string[],
  maxConcurrency: number
): Promise<Response[]> {
  const results: Response[] = [];
  const executing: Promise<void>[] = [];

  async function fetchUrl(url: string, index: number) {
    try {
      const response = await fetch(url);
      results[index] = response;
    } catch (error) {
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
