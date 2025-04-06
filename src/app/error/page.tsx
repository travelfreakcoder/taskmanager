'use client'

import Link from "next/link"

export default function ErrorPage() {
  return <p>Sorry, something went wrong
    <Link href="/dashboard">Go to Homepage</Link>
  </p>
}