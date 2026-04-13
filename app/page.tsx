"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { LandingScreen } from "@/components/landing-screen"
import { TruthOrDare } from "@/components/truth-or-dare"
import { LoveScore } from "@/components/love-score"
import { AdBanner } from "@/components/ad-banner"
import { FloatingShare } from "@/components/floating-share"
import { Header } from "@/components/header"
import { ReceivedChallenge } from "@/components/received-challenge"

export type Screen = "landing" | "truth-or-dare" | "love-score" | "received-challenge"

interface ChallengeData {
  type: "truth" | "dare"
  challenge: string
  friend?: string
}

function HomeContent() {
  const searchParams = useSearchParams()
  const [currentScreen, setCurrentScreen] = useState<Screen>("landing")
  const [challengeData, setChallengeData] = useState<ChallengeData | null>(null)

  useEffect(() => {
    // Check for challenge parameters in URL
    const type = searchParams.get("type")
    const challenge = searchParams.get("challenge")
    const friend = searchParams.get("friend")

    if (type && challenge && (type === "truth" || type === "dare")) {
      setChallengeData({
        type,
        challenge: decodeURIComponent(challenge),
        friend: friend ? decodeURIComponent(friend) : undefined,
      })
      setCurrentScreen("received-challenge")
    }
  }, [searchParams])

  const handleAcceptChallenge = () => {
    // Clear the URL parameters
    window.history.replaceState({}, "", window.location.pathname)
    setChallengeData(null)
    setCurrentScreen("truth-or-dare")
  }

  const handleBack = () => {
    // Clear URL params when going back from received challenge
    if (currentScreen === "received-challenge") {
      window.history.replaceState({}, "", window.location.pathname)
      setChallengeData(null)
    }
    setCurrentScreen("landing")
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-background to-orange-50 relative overflow-x-hidden">
      <Header onBack={handleBack} showBack={currentScreen !== "landing"} />
      
      <AdBanner position="header" />
      
      <div className="container mx-auto px-4 pb-24">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {currentScreen === "landing" && (
            <LandingScreen onNavigate={setCurrentScreen} />
          )}
          {currentScreen === "truth-or-dare" && (
            <TruthOrDare />
          )}
          {currentScreen === "love-score" && (
            <LoveScore />
          )}
          {currentScreen === "received-challenge" && challengeData && (
            <ReceivedChallenge
              type={challengeData.type}
              challenge={challengeData.challenge}
              friendName={challengeData.friend}
              onAccept={handleAcceptChallenge}
            />
          )}
        </div>
      </div>
      
      <FloatingShare />
    </main>
  )
}

import { Suspense } from "react"

export default function Home() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gradient-to-br from-pink-50 via-background to-orange-50 flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </main>
    }>
      <HomeContent />
    </Suspense>
  )
}
