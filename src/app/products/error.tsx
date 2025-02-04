"use client"

import { useRouter } from "next/navigation"
import { startTransition } from "react"

function ErrorPage({error, reset}:{error: Error, reset: () => void}) {
  const router = useRouter()
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    })
  }
  return (
    <div>ErrorPage Lek: {error.message} <button onClick={reload}>Try Again</button></div>
  )
}

export default ErrorPage