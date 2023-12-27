import { BASE_URL } from '@/base-url'

async function getIPAddress() {
  const IP_ENDPOINT = `${BASE_URL}/api/ip`
  const res = await fetch(IP_ENDPOINT)
  const { clientIP: IPAddress } = await res.json()
  return IPAddress
}

export function IPComponent() {
  const IPAddress = getIPAddress()
  return <h2>{IPAddress ?? `No IP Address`}</h2>
}
