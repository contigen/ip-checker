import { BASE_URL } from '@/base-url'

export default function Home() {
  return (
    <section>
      <hgroup>
        <h1>Check your IP address</h1>
        <h1 style={{ fontFamily: `Samsung Sharp Sans` }}>
          {BASE_URL ?? `No base URL.`}
        </h1>
      </hgroup>
    </section>
  )
}
