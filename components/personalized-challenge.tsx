"use client"

import { useState } from "react"
import { Sparkles, Send, MessageCircle, Copy, Check, Share2, User, PenLine, PartyPopper } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const WEBSITE_URL = typeof window !== "undefined" ? window.location.origin : "https://fungames.app"

interface PersonalizedChallengeProps {
  onBack?: () => void
}

type Step = "create" | "preview" | "answer" | "completed"

export function PersonalizedChallenge({ onBack }: PersonalizedChallengeProps) {
  const [step, setStep] = useState<Step>("create")
  const [challengeText, setChallengeText] = useState("")
  const [friendName, setFriendName] = useState("")
  const [challengeType, setChallengeType] = useState<"truth" | "dare">("dare")
  const [answer, setAnswer] = useState("")
  const [copied, setCopied] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)
  const [answerCopied, setAnswerCopied] = useState(false)

  const generateChallengeUrl = () => {
    const params = new URLSearchParams({
      type: challengeType,
      challenge: challengeText,
      ...(friendName && { friend: friendName }),
    })
    return `${WEBSITE_URL}?${params.toString()}`
  }

  const getShareText = () => {
    const typeLabel = challengeType === "truth" ? "Truth" : "Dare"
    const friendText = friendName ? `Hey ${friendName}! ` : ""
    const url = generateChallengeUrl()
    
    if (challengeType === "truth") {
      return `${friendText}I have a question for you...\n\n"${challengeText}"\n\nCan you answer honestly? Try here:\n${url}`
    }
    return `${friendText}I dare you!\n\n"${challengeText}"\n\nDo you accept? Try here:\n${url}`
  }

  const getAnswerShareText = () => {
    const action = challengeType === "truth" ? "I confessed" : "I completed this dare"
    return `${action}!\n\nChallenge: "${challengeText}"\n\nMy answer: "${answer}"\n\nTry yours:\n${WEBSITE_URL}`
  }

  const handleShare = async (platform?: "whatsapp" | "copy" | "copyLink", isAnswer?: boolean) => {
    const text = isAnswer ? getAnswerShareText() : getShareText()
    
    if (platform === "whatsapp") {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank")
      return
    }

    if (platform === "copy") {
      await navigator.clipboard.writeText(text)
      if (isAnswer) {
        setAnswerCopied(true)
        setTimeout(() => setAnswerCopied(false), 2000)
      } else {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
      return
    }

    if (platform === "copyLink") {
      await navigator.clipboard.writeText(generateChallengeUrl())
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 2000)
      return
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${challengeType === "truth" ? "Truth" : "Dare"} Challenge`,
          text: text,
        })
      } catch {
        // User cancelled sharing
      }
    } else {
      await navigator.clipboard.writeText(text)
      if (isAnswer) {
        setAnswerCopied(true)
        setTimeout(() => setAnswerCopied(false), 2000)
      } else {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    }
  }

  const handleCreateChallenge = () => {
    if (challengeText.trim()) {
      setStep("preview")
    }
  }

  const handleTryItYourself = () => {
    setStep("answer")
  }

  const handleSubmitAnswer = () => {
    if (answer.trim()) {
      setStep("completed")
    }
  }

  const handleReset = () => {
    setStep("create")
    setChallengeText("")
    setFriendName("")
    setAnswer("")
  }

  // Create step
  if (step === "create") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] py-8">
        <div className="w-full max-w-sm">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-white mb-4 shadow-lg shadow-pink-500/30">
              <Sparkles className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Create Challenge</h1>
            <p className="text-muted-foreground mt-1">Send a personalized dare to your friends</p>
          </div>

          {/* Type Selection */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => setChallengeType("truth")}
              className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                challengeType === "truth"
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-border bg-card hover:border-blue-300"
              }`}
            >
              <span className="text-lg font-semibold">Truth</span>
              <span className="block text-xs opacity-70">Ask a question</span>
            </button>
            <button
              onClick={() => setChallengeType("dare")}
              className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                challengeType === "dare"
                  ? "border-orange-500 bg-orange-50 text-orange-700"
                  : "border-border bg-card hover:border-orange-300"
              }`}
            >
              <span className="text-lg font-semibold">Dare</span>
              <span className="block text-xs opacity-70">Give a challenge</span>
            </button>
          </div>

          {/* Challenge Input */}
          <div className="space-y-4">
            <div className="relative">
              <PenLine className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder={challengeType === "truth" ? "Write your truth question..." : "Write your dare..."}
                value={challengeText}
                onChange={(e) => setChallengeText(e.target.value)}
                className="h-14 pl-12 rounded-2xl text-base border-2 focus:border-primary bg-card"
              />
            </div>

            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Friend's name (optional)"
                value={friendName}
                onChange={(e) => setFriendName(e.target.value)}
                className="h-14 pl-12 rounded-2xl text-base border-2 focus:border-primary bg-card"
              />
            </div>
          </div>

          {/* Create Button */}
          <Button
            onClick={handleCreateChallenge}
            disabled={!challengeText.trim()}
            size="lg"
            className={`w-full h-14 mt-6 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
              challengeType === "truth"
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                : "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
            }`}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Create Challenge
          </Button>

          {onBack && (
            <Button
              onClick={onBack}
              variant="ghost"
              className="w-full h-12 mt-3 rounded-xl text-muted-foreground"
            >
              Back to Random Game
            </Button>
          )}
        </div>
      </div>
    )
  }

  // Answer step - user answers their own challenge
  if (step === "answer") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] py-8">
        <div className="w-full max-w-sm animate-in slide-in-from-bottom-4 duration-500">
          {/* Mini Challenge Card */}
          <div className={`p-4 rounded-2xl text-white mb-6 ${
            challengeType === "truth"
              ? "bg-gradient-to-br from-blue-500 to-indigo-600"
              : "bg-gradient-to-br from-orange-500 to-red-600"
          }`}>
            <p className="text-white/70 text-xs uppercase tracking-wide mb-1">Your Challenge</p>
            <p className="text-white/90 text-sm leading-relaxed">{`"${challengeText}"`}</p>
          </div>

          {/* Answer Section */}
          <div className="bg-card rounded-3xl p-6 shadow-xl border border-border">
            <h2 className="text-xl font-bold text-foreground mb-1">Your Response</h2>
            <p className="text-muted-foreground text-sm mb-4">
              {challengeType === "truth" ? "Answer your own question..." : "How would you complete this?"}
            </p>

            <Textarea
              placeholder={challengeType === "truth" ? "Type your honest answer here..." : "Describe how you would do it..."}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="min-h-[120px] rounded-2xl text-base border-2 focus:border-primary resize-none"
            />

            <Button
              onClick={handleSubmitAnswer}
              disabled={!answer.trim()}
              size="lg"
              className={`w-full h-14 mt-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 ${
                challengeType === "truth"
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                  : "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
              }`}
            >
              <Send className="w-5 h-5 mr-2" />
              Submit Answer
            </Button>

            <Button
              onClick={() => setStep("preview")}
              variant="ghost"
              className="w-full h-12 mt-3 text-muted-foreground"
            >
              Back to Sharing
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Completed step - show answer and share
  if (step === "completed") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] py-8">
        <div className="w-full max-w-sm animate-in zoom-in-95 duration-500">
          {/* Success Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 text-white mb-4 shadow-xl shadow-green-500/30">
              <PartyPopper className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              {challengeType === "truth" ? "Truth Revealed!" : "Challenge Complete!"}
            </h2>
            <p className="text-muted-foreground text-sm mt-1">Now share it with everyone</p>
          </div>

          {/* Answer Card */}
          <div className={`p-6 rounded-3xl text-white shadow-xl ${
            challengeType === "truth"
              ? "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-500/30"
              : "bg-gradient-to-br from-orange-500 to-red-600 shadow-orange-500/30"
          }`}>
            {/* Challenge */}
            <div className="mb-4 pb-4 border-b border-white/20">
              <p className="text-white/70 text-xs uppercase tracking-wide mb-1">The Challenge</p>
              <p className="text-white/90 text-sm">{`"${challengeText}"`}</p>
            </div>

            {/* Answer */}
            <div>
              <p className="text-white/70 text-xs uppercase tracking-wide mb-1">
                {challengeType === "truth" ? "My Confession" : "How I Did It"}
              </p>
              <p className="text-xl font-semibold leading-relaxed">{`"${answer}"`}</p>
            </div>
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
              onClick={handleReset}
              variant="ghost"
              className="w-full h-12 text-muted-foreground"
            >
              Create Another Challenge
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Preview Step - share or try it yourself
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] py-8">
      <div className="w-full max-w-sm">
        {/* Preview Card */}
        <div className={`p-6 rounded-3xl text-white shadow-xl animate-in zoom-in-95 duration-300 ${
          challengeType === "truth"
            ? "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-500/30"
            : "bg-gradient-to-br from-orange-500 to-red-600 shadow-orange-500/30"
        }`}>
          {/* Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur text-sm font-medium">
              {challengeType === "truth" ? "Truth Challenge" : "Dare Challenge"}
            </span>
          </div>

          {/* Friend Name */}
          {friendName && (
            <p className="text-white/80 text-sm mb-2">
              This is for <span className="font-bold text-white">{friendName}</span>
            </p>
          )}

          {/* Challenge Text */}
          <p className="text-xl font-semibold leading-relaxed mb-4">
            {`"${challengeText}"`}
          </p>

          {/* Call to Action */}
          <div className="pt-4 border-t border-white/20">
            <p className="text-white/70 text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Can you handle this challenge?
            </p>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="mt-6 space-y-3">
          <Button
            onClick={() => handleShare("whatsapp")}
            size="lg"
            className="w-full h-14 rounded-2xl text-lg font-semibold bg-green-500 hover:bg-green-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Share on WhatsApp
          </Button>

          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => handleShare("copyLink")}
              variant="outline"
              className="h-12 rounded-xl transition-all duration-300"
            >
              {linkCopied ? <Check className="w-4 h-4 mr-2 text-green-500" /> : <Copy className="w-4 h-4 mr-2" />}
              {linkCopied ? "Copied!" : "Copy Link"}
            </Button>
            
            <Button
              onClick={() => handleShare()}
              variant="outline"
              className="h-12 rounded-xl transition-all duration-300"
            >
              <Share2 className="w-4 h-4 mr-2" />
              More
            </Button>
          </div>

          {/* Try it yourself option */}
          <Button
            onClick={handleTryItYourself}
            variant="outline"
            className={`w-full h-12 rounded-xl transition-all duration-300 border-2 ${
              challengeType === "truth"
                ? "hover:bg-blue-50 hover:border-blue-500 hover:text-blue-700"
                : "hover:bg-orange-50 hover:border-orange-500 hover:text-orange-700"
            }`}
          >
            <Send className="w-4 h-4 mr-2" />
            Try It Yourself
          </Button>

          <Button
            onClick={handleReset}
            variant="ghost"
            className="w-full h-12 rounded-xl text-muted-foreground"
          >
            Create Another
          </Button>

          {onBack && (
            <Button
              onClick={onBack}
              variant="ghost"
              className="w-full h-10 text-muted-foreground"
            >
              Back to Game
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
