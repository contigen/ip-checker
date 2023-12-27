import { BASE_URL } from '@/base-url'

export async function IPComponent() {
  const IP_ENDPOINT = `${BASE_URL}/api/ip`
  const res = await fetch(IP_ENDPOINT)
  const { clientIP: IPAddress } = await res.json()
  return <h2>{IPAddress ?? `No IP Address`}</h2>
}
