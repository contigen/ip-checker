'use client'

import { useState } from 'react'
import { Spinner } from '@/spinner'
import { Button } from '@nextui-org/button'

export function IPClient({ children }: { children: React.ReactElement }) {
  const [loading, setLoading] = useState(false)
  return (
    <Button
      color='primary'
      isDisabled={loading}
      onClick={() => setLoading(true)}
    >
      {loading ? Spinner : `Check IP Address`}
      {loading && children}
      {children}
    </Button>
  )
}
