import { headers } from 'next/headers'

export async function IPComponent() {
  const referer = headers().get(`referer`)
  const IP_ENDPOINT = `${referer}api/ip`
  const res = await fetch(IP_ENDPOINT)
  const clonedResponse = res.clone()
  const response = await clonedResponse.text()
  return (
    <div>
      <h2>{response ? JSON.stringify(response, null, 2) : `No IP Address`}</h2>
    </div>
  )
}
