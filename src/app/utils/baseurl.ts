export function getBaseUrl() {
  if (typeof window !== `undefined`) return ``
  const { VERCEL_URL: vURL, NODE_ENV } = process.env
  return NODE_ENV === `production` ? `https://${vURL}` : `http://localhost:3000`
}
