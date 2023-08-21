import { headers } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  // const clientIP = headers().get(`x-forwarded-for`)
  // return NextResponse.json({ clientIP })
  const allowedIP = process.env.NODE_ENV === `production` ? "prodip" : "::1"
  const data = await req.json()
  const headersList = headers()
  const clientIP = headersList.get("x-forwarded-for")
  console.log(clientIP)
}
