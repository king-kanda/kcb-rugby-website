"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, ReactNode } from "react"

interface ProtectedRouteProps {
  children: ReactNode
  requireAuth?: boolean
  redirectTo?: string
}

export default function ProtectedRoute({ 
  children, 
  requireAuth = true, 
  redirectTo = "/auth/signin" 
}: ProtectedRouteProps) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "loading") return // Still loading

    if (requireAuth && !session) {
      router.push(redirectTo)
    }
  }, [session, status, router, requireAuth, redirectTo])

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-lime-600"></div>
      </div>
    )
  }

  if (requireAuth && !session) {
    return null
  }

  return <>{children}</>
}
