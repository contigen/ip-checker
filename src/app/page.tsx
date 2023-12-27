import { BASE_URL } from '@/base-url'
import { IPComponent } from '@/ui/ip'
import { IPClient } from '@/ui/ip-client'

export default function Home() {
  return (
    <section>
      <hgroup>
        <h1>Check your IP address</h1>
        <h1 style={{ fontFamily: `Samsung Sharp Sans` }}>
          {BASE_URL ?? `No base URL.`}
        </h1>
      </hgroup>
      <div>
        <IPClient>
          <IPComponent />
        </IPClient>
      </div>
    </section>
  )
}
