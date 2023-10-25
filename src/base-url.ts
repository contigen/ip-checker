const { VERCEL_URL: vURL, PORT } = process.env
export const BASE_URL = `http://localhost:${PORT}` || vURL

console.log(BASE_URL)
