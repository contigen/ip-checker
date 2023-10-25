import { headers } from 'next/headers'
// import { BASE_URL } from '@/base-url'
import { Button } from '@nextui-org/button'

export default async function IP() {
  const host = headers().get('host')
  // const res = await fetch(`${BASE_URL}/api/ip`)
  // const result = await res.json()
  return (
    <>
      <h1>{host}</h1>
      <Button>Check IP</Button>
      {/* <h2>{result.clientIP === `` ? `No IP` : result.clientIP}</h2> */}
    </>
  )
}
