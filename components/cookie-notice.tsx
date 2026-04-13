"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // Small delay to prevent flash on page load
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleDismiss = () => {
    localStorage.setItem("cookie-consent", "dismissed")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto max-w-lg">
        <div className="bg-card border border-border rounded-2xl shadow-xl p-4">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <p className="text-sm text-foreground font-medium mb-1">
                We use cookies
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We use cookies to improve your experience and show relevant ads. 
                By using our site, you agree to our{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <button
              onClick={handleDismiss}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-2 mt-3">
            <Button
              onClick={handleAccept}
              size="sm"
              className="flex-1 h-9 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Accept All
            </Button>
            <Button
              onClick={handleDismiss}
              variant="outline"
              size="sm"
              className="flex-1 h-9 rounded-xl"
            >
              Necessary Only
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
