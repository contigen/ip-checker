import { Button } from "@nextui-org/button"
// import { Textarea } from "@nextui-org/react"

export default async function IP() {
  const res = await fetch(`http://localhost:3000/api/ip`, {
    body: `hello, other side`,
  })
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
