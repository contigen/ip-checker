import { geolocation } from '@vercel/edge'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export function GET(request: NextRequest) {
  console.log(request.geo)
  const { city } = geolocation(request)
  return new Response(`<h1>Your location is ${city}</h1>`, {
    headers: { 'content-type': 'text/html' },
  })
}
