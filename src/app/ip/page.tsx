export default async function IP() {
  const res = await fetch(`http://localhost:3000/api/ip`, {
    body: `hello, other side`,
  })
  const result = await res.json()
  return (
    <>
      <button>Check IP</button>
      <div className='border rounded-3xl shadow p-4'>
        {result.clientIP === `` ? `No IP` : result.clientIP}
      </div>
    </>
  )
}
