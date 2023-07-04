import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <div className="logo">
          {/* src is the path in the public folder & Image is a NextJS componet and needs the height and width property*/}
            <Image src="/logo.png" alt="" width={120} height={77} />
        </div>
        
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/ninjas">Ninja Listing</Link>
    </nav>
  )
}
