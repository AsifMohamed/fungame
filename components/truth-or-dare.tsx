"use client"

import { useState, useCallback } from "react"
import { Flame, CircleHelp, RefreshCw, Share2, MessageCircle, Copy, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AdBanner } from "./ad-banner"
import { PersonalizedChallenge } from "./personalized-challenge"

type GameMode = "select" | "truth" | "dare" | "create"

const truths = [
  "What is your biggest dream for the future?",
  "What is your favorite childhood memory?",
  "If you could have any superpower, what would it be?",
  "What is the nicest thing someone has done for you?",
  "What is your favorite movie and why?",
  "If you could travel anywhere, where would you go?",
  "What is your hidden talent?",
  "What makes you laugh the most?",
  "Who is your role model and why?",
  "What is the best advice you have ever received?",
  "What are you most grateful for?",
  "What is your favorite way to spend a weekend?",
  "If you won the lottery, what would you do first?",
  "What is your favorite food of all time?",
  "What hobby would you love to try?",
  "What is your proudest achievement?",
  "What song always makes you happy?",
  "If you could meet anyone, who would it be?",
  "What is your favorite thing about yourself?",
  "What is on your bucket list?",
  "What is the best gift you have ever received?",
  "What is your favorite holiday and why?",
  "If you could learn any skill instantly, what would it be?",
  "What is your comfort TV show?",
  "What is a fun fact about you that most people do not know?",
  "What was your favorite subject in school?",
  "What is your favorite season and why?",
  "If you could be any animal, what would you be?",
  "What is the most interesting place you have visited?",
  "What is your favorite way to relax after a long day?",
]

const dares = [
  "Do your best dance move right now!",
  "Sing the chorus of your favorite song out loud!",
  "Do 10 jumping jacks while counting backwards!",
  "Talk in an accent for the next 3 rounds!",
  "Imitate another player until someone guesses who!",
  "Do your best celebrity impression!",
  "Speak only in questions for the next 2 rounds!",
  "Do a plank for 30 seconds!",
  "Do your best robot dance!",
  "Act like your favorite animal for 30 seconds!",
  "Speak in slow motion for 1 minute!",
  "Do your best impression of a news reporter!",
  "Talk without using the letter E for 2 minutes!",
  "Tell a joke and make everyone laugh!",
  "Do your best moonwalk across the room!",
  "Pretend to be a waiter and take everyone orders!",
  "Speak in rhymes for the next 2 minutes!",
  "Do your best superhero pose and hold it for 10 seconds!",
  "Sing everything you say for the next round!",
  "Do 5 silly walks across the room!",
  "Give a 30-second speech about your favorite food!",
  "Do your best impression of a teacher!",
  "Perform a magic trick, real or made up!",
  "Speak like a pirate for the next 2 rounds!",
  "Do your best slow-motion action movie scene!",
  "Tell a story using only sound effects!",
  "Do your best sports commentator impression!",
  "Balance on one foot while saying the alphabet!",
  "Do your best impression of someone in the room!",
  "Make up a short poem about the person next to you!",
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
