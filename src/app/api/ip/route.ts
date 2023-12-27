import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { geolocation, ipAddress } from '@vercel/edge'

export async function GET(req: Request) {
  const clientIP = headers().get(`x-forwarded-for`)
  console.log(headers().get(`x-real-ip`))
  const { city, country, countryRegion, latitude, longitude, flag, region } =
    geolocation(req)
  return NextResponse.json({
    city,
    country,
    countryRegion,
    latitude,
    longitude,
    flag,
    region,
    clientIP,
    ipAddress,
  })
}
