import { headers } from 'next/headers'
import { Suspense } from 'react'
import { IPComponent } from '@/ui/ip'
import { Spinner } from '@/spinner'

export default function Home() {
  const referer = headers().get(`referer`)

  return (
    <section>
      <hgroup>
        <h1>Check your IP address</h1>
        <h1 style={{ fontFamily: `Samsung Sharp Sans` }}>{referer}</h1>
      </hgroup>
      <div>
        <Suspense fallback={Spinner}>
          <IPComponent />
        </Suspense>
      </div>
    </section>
  )
}
