import { headers } from 'next/headers'
import { geolocation, ipAddress } from '@vercel/edge'

export async function GET(req: Request) {
  const clientIP = headers().get(`x-forwarded-for`)
  const { city, country, countryRegion, latitude, longitude, flag, region } =
    geolocation(req)
  const ResponseHeaders = new Headers(req.headers)
  ResponseHeaders.set(`Content-Type`, `application/json`)
  const ip = ipAddress(req)
  return Response.json(
    {
      city,
      country,
      countryRegion,
      latitude,
      longitude,
      flag,
      region,
      clientIP,
      ip,
    },
    { headers: ResponseHeaders }
  )
}
