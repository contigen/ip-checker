const { VERCEL_URL: vURL, PORT } = process.env
export const BASE_URL = PORT || vURL
