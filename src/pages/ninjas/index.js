import Link from 'next/link'
import React from 'react'


export default function Index() {
  return (
    <div>
        <h1>All Ninjas</h1>
        <Link href="/ninjas">See All Ninjas</Link>
    </div>
  )
}
