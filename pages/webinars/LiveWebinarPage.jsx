import React, {useState} from 'react'
import dynamic from 'next/dynamic'

const LiveWebinar = dynamic(
  () => import('app/components/common/LiveWebinar'),
  { ssr: false }
)
export default function LiveWebinarPage() {

  return (
    <>
        <LiveWebinar />
    </>
  )
}
