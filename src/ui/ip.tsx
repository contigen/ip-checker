import { BASE_URL } from '@/app/base-url'

export async function IPComponent() {
  const IP_ENDPOINT = `${BASE_URL}/api/ip`
  const res = await fetch(IP_ENDPOINT)
  const clonedResponse = res.clone()
  const response = await clonedResponse.json()
  return (
    <div>
      <h2>{response ? JSON.stringify(response, null, 2) : `No IP Address`}</h2>
    </div>
  )
}
