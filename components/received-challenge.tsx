"use client"

import { useState } from "react"
import { Sparkles, Play, Share2, MessageCircle, Copy, Check, CircleHelp, Flame, Send, PartyPopper } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const WEBSITE_URL = typeof window !== "undefined" ? window.location.origin : "https://fungames.app"

interface ReceivedChallengeProps {
  type: "truth" | "dare"
  challenge: string
  friendName?: string
  onAccept: () => void
}

type ViewState = "received" | "accepted" | "answering" | "completed"

export function ReceivedChallenge({ type, challenge, friendName, onAccept }: ReceivedChallengeProps) {
  const [viewState, setViewState] = useState<ViewState>("received")
  const [answer, setAnswer] = useState("")
  const [copied, setCopied] = useState(false)
  const [answerCopied, setAnswerCopied] = useState(false)

  const handleAccept = () => {
    setViewState("accepted")
    setTimeout(() => {
      setViewState("answering")
    }, 1200)
  }

  const handleSubmitAnswer = () => {
    if (answer.trim()) {
      setViewState("completed")
    }
  }

  const getChallengeShareText = () => {
    const emoji = type === "truth" ? "?" : "!"
    const typeLabel = type === "truth" ? "Truth" : "Dare"
    return `I dare you ${emoji}\n\n"${challenge}"\n\nCan you handle it? Try here:\n${WEBSITE_URL}?type=${type}&challenge=${encodeURIComponent(challenge)}${friendName ? `&friend=${encodeURIComponent(friendName)}` : ""}`
  }

  const getAnswerShareText = () => {
    const typeLabel = type === "truth" ? "Truth" : "Dare"
    const emoji = type === "truth" ? "I confessed" : "I completed this dare"
    return `${emoji}!\n\nChallenge: "${challenge}"\n\nMy answer: "${answer}"\n\nTry yours here:\n${WEBSITE_URL}`
  }

  const handleShare = async (platform?: "whatsapp" | "copy", isAnswer?: boolean) => {
    const text = isAnswer ? getAnswerShareText() : getChallengeShareText()
    const setCopiedState = isAnswer ? setAnswerCopied : setCopied

    if (platform === "whatsapp") {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank")
      return
    }

    if (platform === "copy") {
      await navigator.clipboard.writeText(text)
      setCopiedState(true)
      setTimeout(() => setCopiedState(false), 2000)
      return
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${type === "truth" ? "Truth" : "Dare"} Challenge`,
          text: text,
        })
      } catch {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(text)
      setCopiedState(true)
      setTimeout(() => setCopiedState(false), 2000)
    }
  }

  // Accepted animation state
  if (viewState === "accepted") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] py-8">
        <div className="text-center animate-in zoom-in-95 duration-500">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 text-white mb-6 shadow-xl shadow-green-500/30">
            <Sparkles className="w-12 h-12 animate-pulse" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Challenge Accepted!</h2>
          <p className="text-muted-foreground">Now show us what you got...</p>
        </div>
      </div>
    )
  }

  // Answer input state
  if (viewState === "answering") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] py-8">
        <div className="w-full max-w-sm animate-in slide-in-from-bottom-4 duration-500">
          {/* Mini Challenge Card */}
          <div className={`p-4 rounded-2xl text-white mb-6 ${
            type === "truth"
              ? "bg-gradient-to-br from-blue-500 to-indigo-600"
              : "bg-gradient-to-br from-orange-500 to-red-600"
          }`}>
            <div className="flex items-center gap-2 mb-2">
              {type === "truth" ? (
                <CircleHelp className="w-5 h-5" />
              ) : (
                <Flame className="w-5 h-5" />
              )}
              <span className="font-semibold text-sm">
                {type === "truth" ? "Truth Challenge" : "Dare Challenge"}
              </span>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">{`"${challenge}"`}</p>
          </div>

          {/* Answer Section */}
          <div className="bg-card rounded-3xl p-6 shadow-xl border border-border">
            <h2 className="text-xl font-bold text-foreground mb-1">Your Response</h2>
            <p className="text-muted-foreground text-sm mb-4">
              {type === "truth" ? "Tell us the truth..." : "Tell us how you completed it..."}
            </p>

            <Textarea
              placeholder={type === "truth" ? "Type your honest answer here..." : "Describe how you did it..."}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="min-h-[120px] rounded-2xl text-base border-2 focus:border-primary resize-none"
            />

            <Button
              onClick={handleSubmitAnswer}
              disabled={!answer.trim()}
              size="lg"
              className={`w-full h-14 mt-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 ${
                type === "truth"
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                  : "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
              }`}
            >
              <Send className="w-5 h-5 mr-2" />
              Submit Answer
            </Button>

            <Button
              onClick={onAccept}
              variant="ghost"
              className="w-full h-12 mt-3 text-muted-foreground"
            >
              Skip and Play More
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Completed state - show answer and share
  if (viewState === "completed") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] py-8">
        <div className="w-full max-w-sm animate-in zoom-in-95 duration-500">
          {/* Success Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 text-white mb-4 shadow-xl shadow-green-500/30">
              <PartyPopper className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              {type === "truth" ? "Truth Revealed!" : "Challenge Complete!"}
            </h2>
            <p className="text-muted-foreground text-sm mt-1">Now share it with everyone</p>
          </div>

          {/* Answer Card */}
          <div className={`p-6 rounded-3xl text-white shadow-xl ${
            type === "truth"
              ? "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-500/30"
              : "bg-gradient-to-br from-orange-500 to-red-600 shadow-orange-500/30"
          }`}>
            {/* Challenge */}
            <div className="mb-4 pb-4 border-b border-white/20">
              <p className="text-white/70 text-xs uppercase tracking-wide mb-1">The Challenge</p>
              <p className="text-white/90 text-sm">{`"${challenge}"`}</p>
            </div>

            {/* Answer */}
            <div>
              <p className="text-white/70 text-xs uppercase tracking-wide mb-1">
                {type === "truth" ? "My Confession" : "How I Did It"}
              </p>
              <p className="text-xl font-semibold leading-relaxed">{`"${answer}"`}</p>
            </div>

            {friendName && (
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-white/70 text-sm">
                  Completed by <span className="font-bold text-white">{friendName}</span>
                </p>
              </div>
            )}
          </div>

          {/* Share Buttons */}
          <div className="mt-6 space-y-3">
            <Button
              onClick={() => handleShare("whatsapp", true)}
              size="lg"
              className="w-full h-14 rounded-2xl text-lg font-semibold bg-green-500 hover:bg-green-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Share My Answer
            </Button>

            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={() => handleShare("copy", true)}
                variant="outline"
                className="h-12 rounded-xl transition-all duration-300"
              >
                {answerCopied ? <Check className="w-4 h-4 mr-2 text-green-500" /> : <Copy className="w-4 h-4 mr-2" />}
                {answerCopied ? "Copied!" : "Copy"}
              </Button>
              
              <Button
                onClick={() => handleShare(undefined, true)}
                variant="outline"
                className="h-12 rounded-xl transition-all duration-300"
              >
                <Share2 className="w-4 h-4 mr-2" />
                More
              </Button>
            </div>

            <Button
              onClick={onAccept}
              variant="ghost"
              className="w-full h-12 text-muted-foreground"
            >
              Play More Challenges
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Initial received state
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] py-8">
      <div className="w-full max-w-sm">
        {/* Received Label */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            You received a challenge!
          </div>
        </div>

        {/* Challenge Card */}
        <div className={`p-6 rounded-3xl text-white shadow-xl animate-in slide-in-from-bottom-4 duration-500 ${
          type === "truth"
            ? "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-500/30"
            : "bg-gradient-to-br from-orange-500 to-red-600 shadow-orange-500/30"
        }`}>
          {/* Icon and Type */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
              {type === "truth" ? (
                <CircleHelp className="w-6 h-6" />
              ) : (
                <Flame className="w-6 h-6" />
              )}
            </div>
            <div>
              <h2 className="text-xl font-bold">
                {type === "truth" ? "Truth Challenge" : "Dare Challenge"}
              </h2>
              <p className="text-white/70 text-xs">
                {type === "truth" ? "Answer honestly!" : "Do it if you dare!"}
              </p>
            </div>
          </div>

          {/* Friend Message */}
          {friendName && (
            <div className="mb-4 p-3 rounded-xl bg-white/10 backdrop-blur">
              <p className="text-white/90 text-sm">
                Hey <span className="font-bold">{friendName}</span>, this is for you!
              </p>
            </div>
          )}

          {/* Challenge Text */}
          <p className="text-xl font-semibold leading-relaxed mb-4">
            {`"${challenge}"`}
          </p>

          {/* Challenge Prompt */}
          <div className="pt-4 border-t border-white/20">
            <p className="text-white/80 text-sm">
              {type === "truth" ? "Can you answer this honestly?" : "Do you have the courage?"}
            </p>
          </div>
        </div>

        {/* Accept Button */}
        <Button
          onClick={handleAccept}
          size="lg"
          className={`w-full h-16 mt-6 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
            type === "truth"
              ? "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
              : "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
          }`}
        >
          <Play className="w-6 h-6 mr-2" />
          Accept Challenge
        </Button>

        {/* Share Buttons */}
        <div className="grid grid-cols-3 gap-3 mt-4">
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

        {/* Skip Link */}
        <Button
          onClick={onAccept}
          variant="ghost"
          className="w-full h-12 mt-4 text-muted-foreground"
        >
          Skip and Play Random
        </Button>
      </div>
    </div>
  )
}
