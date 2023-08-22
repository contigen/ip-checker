import { getBaseUrl } from "../utils/baseurl"

export default async function IP() {
  const URL = getBaseUrl()
  const res = await fetch(`${URL}/api/ip`)
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
