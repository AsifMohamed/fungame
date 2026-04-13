"use client"

import { useState, useCallback } from "react"
import { Flame, CircleHelp, RefreshCw, Share2, MessageCircle, Copy, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AdBanner } from "./ad-banner"
import { PersonalizedChallenge } from "./personalized-challenge"

type GameMode = "select" | "truth" | "dare" | "create"

const truths = [
  "What is your biggest fear?",
  "Have you ever lied to your best friend?",
  "What is your most embarrassing moment?",
  "Who was your first crush?",
  "What is the last lie you told?",
  "Have you ever cheated on a test?",
  "What is your guilty pleasure?",
  "Who do you secretly admire here?",
  "What is the worst gift you have received?",
  "Have you ever pretended to like a gift?",
  "What is your biggest regret?",
  "Have you ever ghosted someone?",
  "What is your most annoying habit?",
  "What is the craziest thing you have done for love?",
  "Have you ever had a secret crush on a friend?",
  "What is the most childish thing you still do?",
  "Have you ever eavesdropped on a conversation?",
  "What is your biggest insecurity?",
  "Have you ever broken someone&apos;s heart?",
  "What is your weirdest dream?",
  "Have you ever stalked someone on social media?",
  "What is the most embarrassing thing in your phone?",
  "Have you ever said I love you without meaning it?",
  "What is your secret talent?",
  "Have you ever had a wardrobe malfunction?",
]

const dares = [
  "Do your best dance move right now!",
  "Sing the chorus of your favorite song!",
  "Let another player post on your social media!",
  "Do 10 push-ups right now!",
  "Talk in an accent for the next 3 rounds!",
  "Let someone go through your phone for 1 minute!",
  "Send a funny selfie to your crush!",
  "Imitate another player until someone guesses who!",
  "Do your best celebrity impression!",
  "Let another player give you a new hairstyle!",
  "Speak only in questions for the next 2 rounds!",
  "Do a plank for 30 seconds!",
  "Call a friend and sing happy birthday!",
  "Let someone write something on your face!",
  "Do your best robot dance!",
  "Share your most recent photo!",
  "Act like a chicken for 30 seconds!",
  "Let someone tickle you for 10 seconds!",
  "Do jumping jacks until your next turn!",
  "Speak in slow motion for 1 minute!",
  "Post an embarrassing photo to your story!",
  "Let the group pick your profile picture for a day!",
  "Do your best impression of a baby!",
  "Talk without using the letter A for 2 minutes!",
  "Let someone style your hair blindfolded!",
]

const WEBSITE_URL = typeof window !== "undefined" ? window.location.origin : "https://fungames.app"

export function TruthOrDare() {
  const [mode, setMode] = useState<GameMode>("select")
  const [currentItem, setCurrentItem] = useState("")
  const [copied, setCopied] = useState(false)

  const getRandomItem = useCallback((type: "truth" | "dare") => {
    const items = type === "truth" ? truths : dares
    const randomIndex = Math.floor(Math.random() * items.length)
    return items[randomIndex]
  }, [])

  const handleSelection = (type: "truth" | "dare") => {
    setMode(type)
    setCurrentItem(getRandomItem(type))
  }

  const handleNext = () => {
    setCurrentItem(getRandomItem(mode as "truth" | "dare"))
  }

  const getShareText = () => {
    if (mode === "truth") {
      return `Can you answer this honestly?\n\n"${currentItem}"\n\nPlay Truth or Dare:\n${WEBSITE_URL}`
    }
    return `I dare you!\n\n"${currentItem}"\n\nAccept more challenges:\n${WEBSITE_URL}`
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
          title: `Truth or Dare - ${mode === "truth" ? "Truth" : "Dare"}`,
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

  if (mode === "create") {
    return <PersonalizedChallenge onBack={() => setMode("select")} />
  }

  if (mode === "select") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] py-8">
        <h1 className="text-3xl font-bold mb-2 text-center text-balance">Truth or Dare?</h1>
        <p className="text-muted-foreground mb-8 text-center">Choose wisely...</p>

        <div className="w-full max-w-sm space-y-4">
          <button
            onClick={() => handleSelection("truth")}
            className="group w-full p-8 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                <CircleHelp className="w-10 h-10" />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">Truth</h2>
                <p className="text-white/70 text-sm mt-1">Spill your secrets</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleSelection("dare")}
            className="group w-full p-8 rounded-3xl bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                <Flame className="w-10 h-10" />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">Dare</h2>
                <p className="text-white/70 text-sm mt-1">Prove your courage</p>
              </div>
            </div>
          </button>

          {/* Create Custom Challenge Button */}
          <button
            onClick={() => setMode("create")}
            className="group w-full p-6 rounded-3xl bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-xl shadow-pink-500/30 hover:shadow-2xl hover:shadow-pink-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h2 className="text-lg font-bold">Create Your Own</h2>
                <p className="text-white/70 text-xs">Send a custom challenge to friends</p>
              </div>
            </div>
          </button>
        </div>
        
        <AdBanner position="content" />
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] py-8">
      {/* Result Card */}
      <div className={`w-full max-w-sm p-8 rounded-3xl text-white shadow-xl ${
        mode === "truth" 
          ? "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-500/30" 
          : "bg-gradient-to-br from-orange-500 to-red-600 shadow-orange-500/30"
      }`}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
            {mode === "truth" ? (
              <CircleHelp className="w-6 h-6" />
            ) : (
              <Flame className="w-6 h-6" />
            )}
          </div>
          <div>
            <h2 className="text-xl font-bold">
              {mode === "truth" ? "Truth 😈" : "Dare 🔥"}
            </h2>
            <p className="text-white/70 text-xs">
              {mode === "truth" ? "Answer honestly!" : "Do it now!"}
            </p>
          </div>
        </div>

        <p className="text-xl font-medium leading-relaxed min-h-[80px] animate-in fade-in duration-300">
          {currentItem}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="w-full max-w-sm mt-6 space-y-3">
        <Button
          onClick={handleNext}
          size="lg"
          className="w-full h-14 rounded-2xl text-lg font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Next
        </Button>

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
          onClick={() => setMode("select")}
          variant="ghost"
          className="w-full h-12 rounded-xl text-muted-foreground hover:text-foreground"
        >
          Choose Again
        </Button>
      </div>

      <AdBanner position="content" />
    </div>
  )
}
