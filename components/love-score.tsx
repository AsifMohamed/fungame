"use client"

import { useState, useEffect, useRef } from "react"
import { Heart, Sparkles, RefreshCw, Share2, MessageCircle, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AdBanner } from "./ad-banner"

type GameState = "input" | "calculating" | "result"

const loveMessages = [
  { min: 0, max: 15, message: "Different paths, but friendship awaits!", emoji: "🌟" },
  { min: 16, max: 30, message: "A unique connection forming!", emoji: "✨" },
  { min: 31, max: 45, message: "There is a spark between you two!", emoji: "💛" },
  { min: 46, max: 60, message: "Growing bond and great potential!", emoji: "💜" },
  { min: 61, max: 75, message: "Strong chemistry detected!", emoji: "🧡" },
  { min: 76, max: 85, message: "Wonderful connection!", emoji: "💕" },
  { min: 86, max: 95, message: "Amazing compatibility!", emoji: "❤️" },
  { min: 96, max: 100, message: "Incredible match made in heaven!", emoji: "💖" },
]

const WEBSITE_URL = "https://fungames.app"

export function LoveScore() {
  const [name1, setName1] = useState("")
  const [name2, setName2] = useState("")
  const [score, setScore] = useState(0)
  const [displayScore, setDisplayScore] = useState(0)
  const [gameState, setGameState] = useState<GameState>("input")
  const [copied, setCopied] = useState(false)
  const animationRef = useRef<number>()

  const calculateScore = (n1: string, n2: string) => {
    // Simple hash-based calculation for consistent results
    const combined = (n1 + n2).toLowerCase().replace(/\s/g, "")
    let hash = 0
    for (let i = 0; i < combined.length; i++) {
      const char = combined.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash
    }
    return Math.abs(hash % 101)
  }

  const getMessage = (score: number) => {
    return loveMessages.find(m => score >= m.min && score <= m.max) || loveMessages[0]
  }

  const handleCalculate = () => {
    if (!name1.trim() || !name2.trim()) return
    
    const calculatedScore = calculateScore(name1, name2)
    setScore(calculatedScore)
    setDisplayScore(0)
    setGameState("calculating")
  }

  useEffect(() => {
    if (gameState === "calculating") {
      const startTime = Date.now()
      const duration = 2000 // 2 seconds animation

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplayScore(Math.round(eased * score))

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate)
        } else {
          setGameState("result")
        }
      }

      animationRef.current = requestAnimationFrame(animate)

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      }
    }
  }, [gameState, score])

  const getShareText = () => {
    const message = getMessage(score)
    return `💕 Love Score Result 💕\n\n${name1} + ${name2} = ${score}%\n${message.emoji} ${message.message}\n\nCalculate your love score at ${WEBSITE_URL}`
  }

  const handleShare = async (platform?: "whatsapp" | "copy") => {
    const text = getShareText()
    
    if (platform === "whatsapp") {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank")
      return
    }

    if (platform === "copy") {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      return
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Love Score Result",
          text: text,
        })
      } catch {
        // User cancelled sharing
      }
    } else {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleReset = () => {
    setName1("")
    setName2("")
    setScore(0)
    setDisplayScore(0)
    setGameState("input")
  }

  if (gameState === "input") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] py-8">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
          <Heart className="w-8 h-8 text-white" />
        </div>
        
        <h1 className="text-3xl font-bold mb-2 text-center">Love Score</h1>
        <p className="text-muted-foreground mb-10 text-center">Find your compatibility!</p>

        <div className="w-full max-w-sm space-y-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Your Name"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              className="h-14 rounded-2xl text-lg px-5 bg-card border-border/50 focus:border-primary/50 transition-all duration-300"
            />
            <Heart className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
          </div>

          <div className="flex justify-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold">+</span>
            </div>
          </div>

          <div className="relative">
            <Input
              type="text"
              placeholder="Crush Name"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              className="h-14 rounded-2xl text-lg px-5 bg-card border-border/50 focus:border-primary/50 transition-all duration-300"
            />
            <Heart className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary/50" />
          </div>

          <Button
            onClick={handleCalculate}
            disabled={!name1.trim() || !name2.trim()}
            size="lg"
            className="w-full h-14 rounded-2xl text-lg font-semibold bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Calculate Love Score
          </Button>
        </div>

        <AdBanner position="content" />
      </div>
    )
  }

  const message = getMessage(displayScore)

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] py-8">
      {/* Result Card */}
      <div className="w-full max-w-sm p-8 rounded-3xl bg-gradient-to-br from-primary to-secondary text-white shadow-xl shadow-primary/30">
        <div className="text-center">
          <p className="text-white/80 text-sm mb-2">Love Score</p>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-lg font-medium truncate max-w-[100px]">{name1}</span>
            <Heart className="w-6 h-6 animate-pulse" fill="currentColor" />
            <span className="text-lg font-medium truncate max-w-[100px]">{name2}</span>
          </div>

          {/* Animated Score Circle */}
          <div className="relative w-40 h-40 mx-auto mb-6">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="8"
              />
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${(displayScore / 100) * 339.292} 339.292`}
                className="transition-all duration-100"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-bold">{displayScore}</span>
              <span className="text-xl">%</span>
            </div>
          </div>

          {/* Message */}
          <div className={`transition-opacity duration-500 ${gameState === "result" ? "opacity-100" : "opacity-0"}`}>
            <span className="text-4xl block mb-2">{message.emoji}</span>
            <p className="text-lg font-medium">{message.message}</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={`w-full max-w-sm mt-6 space-y-3 transition-opacity duration-500 ${gameState === "result" ? "opacity-100" : "opacity-0"}`}>
        <div className="grid grid-cols-3 gap-3">
          <Button
            onClick={() => handleShare("whatsapp")}
            variant="outline"
            className="h-12 rounded-xl hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
          </Button>
          
          <Button
            onClick={() => handleShare("copy")}
            variant="outline"
            className="h-12 rounded-xl transition-all duration-300"
          >
            {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
          </Button>

          <Button
            onClick={() => handleShare()}
            variant="outline"
            className="h-12 rounded-xl transition-all duration-300"
          >
            <Share2 className="w-5 h-5" />
          </Button>
        </div>

        <Button
          onClick={handleReset}
          size="lg"
          className="w-full h-14 rounded-2xl text-lg font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Try Another Match
        </Button>
      </div>

      <AdBanner position="content" />
    </div>
  )
}
