import { BASE_URL } from '@/base-url'
import { Button } from '@nextui-org/react'

export default async function IP() {
  const res = await fetch(`${BASE_URL}/api/ip`)
  const result = await res.json()
  return (
    <>
      <Button>Check IP</Button>
      <div className='border rounded-3xl shadow p-4'>
        {result.clientIP === `` ? `No IP` : result.clientIP}
      </div>
    </>
  )
}
