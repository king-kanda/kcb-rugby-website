"use client"

import { useSession } from "next-auth/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ProtectedRoute from "@/components/ProtectedRoute"

export default function Dashboard() {
  const { data: session } = useSession()

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-slate-900 text-white p-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="https://ke.kcbgroup.com/templates/corporate/images/logo.svg" 
                alt="KCB Logo" 
                className="h-10 mr-4"
              />
              <h1 className="text-xl font-bold" style={{ fontFamily: "Raleway, sans-serif" }}>
                Dashboard
              </h1>
            </div>
            <Link href="/">
              <Button variant="outline" size="sm">
                Back to Home
              </Button>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: "Raleway, sans-serif" }}>
              Welcome to your Dashboard!
            </h2>
            <p className="text-gray-600">
              You are successfully authenticated and can access protected content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* User Info Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lime-600">User Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Name:</strong> {session?.user?.name || "N/A"}</p>
                  <p><strong>Email:</strong> {session?.user?.email || "N/A"}</p>
                  <p><strong>Role:</strong> {(session?.user as any)?.role || "user"}</p>
                </div>
              </CardContent>
            </Card>

            {/* Tickets Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lime-600">My Tickets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-gray-600">You have no tickets yet.</p>
                  <Link href="/">
                    <Button size="sm" className="bg-lime-600 hover:bg-lime-700">
                      Browse Tickets
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Account Settings Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lime-600">Account Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-gray-600">Manage your account preferences.</p>
                  <Button size="sm" variant="outline">
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Session Debug Info (Development) */}
          {process.env.NODE_ENV === "development" && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-red-600">Debug Info (Development Only)</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded text-xs overflow-auto">
                  {JSON.stringify(session, null, 2)}
                </pre>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </ProtectedRoute>
  )
}
