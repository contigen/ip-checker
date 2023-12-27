const { VERCEL_URL: vURL, PORT } = process.env

export const BASE_URL = PORT ? `http://localhost:${PORT}` : `https://${vURL}`
