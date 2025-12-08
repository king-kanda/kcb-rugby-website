"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const errorMessages: Record<string, string> = {
  Configuration: "There is a problem with the server configuration.",
  AccessDenied: "You do not have permission to sign in.",
  Verification: "The token has expired or has already been used.",
  Default: "Unable to sign in.",
}

function AuthErrorContent() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Image 
            src="https://ke.kcbgroup.com/templates/corporate/images/logo.svg" 
            alt="KCB Logo" 
            className="mx-auto"
            width={80}
            height={80}
            priority
          />
          <h2 className="mt-6 text-3xl font-bold text-slate-900" style={{ fontFamily: "Raleway, sans-serif" }}>
            Authentication Error
          </h2>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-red-600">
              Sign In Failed
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <div className="p-4 bg-red-50 rounded-md">
              <p className="text-red-700">
                {error ? errorMessages[error] || errorMessages.Default : errorMessages.Default}
              </p>
            </div>
            
            <div className="space-y-2">
              <Link href="/auth/signin">
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white">
                  Try Again
                </Button>
              </Link>
              
              <Link href="/">
                <Button variant="outline" className="w-full">
                  Go Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function AuthError() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lime-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <AuthErrorContent />
    </Suspense>
  )
}
