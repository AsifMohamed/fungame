"use client"

import Link from "next/link"
import { Heart, Flame, Users, Sparkles, BookOpen } from "lucide-react"
import type { Screen } from "@/app/page"
import { AdBanner } from "./ad-banner"

interface LandingScreenProps {
  onNavigate: (screen: Screen) => void
}

export function LandingScreen({ onNavigate }: LandingScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] py-8">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-pulse">
          <Sparkles className="w-4 h-4" />
          <span>100% Free to Play</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-balance">
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
            Party Games
          </span>
        </h1>
        
        <p className="text-muted-foreground text-lg max-w-sm mx-auto leading-relaxed">
          Fun games to play with friends. No signup needed!
        </p>
      </div>

      {/* Game Cards */}
      <div className="w-full max-w-sm space-y-4">
        {/* Truth or Dare Button */}
        <button
          onClick={() => onNavigate("truth-or-dare")}
          className="group w-full p-6 rounded-3xl bg-gradient-to-br from-primary to-pink-600 text-white shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center shrink-0">
              <Flame className="w-8 h-8" />
            </div>
            <div className="text-left">
              <h2 className="text-xl font-bold mb-1">Truth or Dare</h2>
              <p className="text-white/80 text-sm">Spicy questions & fun dares</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-white/60 text-xs">
            <Users className="w-4 h-4" />
            <span>2+ Players</span>
          </div>
        </button>

        {/* Love Score Button */}
        <button
          onClick={() => onNavigate("love-score")}
          className="group w-full p-6 rounded-3xl bg-gradient-to-br from-secondary to-red-500 text-white shadow-xl shadow-secondary/30 hover:shadow-2xl hover:shadow-secondary/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center shrink-0">
              <Heart className="w-8 h-8" />
            </div>
            <div className="text-left">
              <h2 className="text-xl font-bold mb-1">Love Score</h2>
              <p className="text-white/80 text-sm">Calculate your compatibility</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-white/60 text-xs">
            <Heart className="w-4 h-4" />
            <span>Enter two names</span>
          </div>
        </button>
      </div>

      {/* Create Challenge CTA */}
      <div className="mt-6 w-full max-w-sm">
        <button
          onClick={() => onNavigate("truth-or-dare")}
          className="w-full p-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <Sparkles className="w-5 h-5" />
          <span>Challenge a Friend</span>
        </button>
        <p className="text-center text-xs text-muted-foreground mt-2">
          Create a personalized dare and send it to friends
        </p>
      </div>

      <AdBanner position="content" />

      {/* Invite Friends Section */}
      <div className="mt-10 text-center p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50 max-w-sm w-full">
        <p className="text-sm text-muted-foreground mb-2">
          Having fun? Invite your friends!
        </p>
        <p className="text-xs text-muted-foreground/70">
          Share this website and play together
        </p>
      </div>
    </div>
  )
}
