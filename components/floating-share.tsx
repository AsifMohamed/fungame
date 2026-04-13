"use client"

import { useState } from "react"
import { Share2, X, MessageCircle, Copy, Check, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const WEBSITE_URL = typeof window !== "undefined" ? window.location.origin : "https://fungames.app"
const getShareText = () => `Play Truth or Dare with me!\n\nSpicy questions, wild dares, and love score calculator.\n\nTry it free:\n${WEBSITE_URL}`

export function FloatingShare() {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleShare = async (platform: "whatsapp" | "telegram" | "copy" | "native") => {
    const shareText = getShareText()
    
    if (platform === "whatsapp") {
      window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, "_blank")
      return
    }

    if (platform === "telegram") {
      window.open(`https://t.me/share/url?url=${encodeURIComponent(WEBSITE_URL)}&text=${encodeURIComponent(shareText)}`, "_blank")
      return
    }

    if (platform === "copy") {
      await navigator.clipboard.writeText(shareText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      return
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Truth or Dare & Love Score",
          text: shareText,
          url: WEBSITE_URL,
        })
      } catch {
        // User cancelled sharing
      }
    }
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Share Menu */}
      <div className={`fixed bottom-24 right-4 z-50 transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
        <div className="bg-card rounded-2xl shadow-xl border border-border/50 p-3 space-y-2 min-w-[180px]">
          <p className="text-xs text-muted-foreground px-2 pb-1 border-b border-border/50">
            Share with friends
          </p>
          
          <button
            onClick={() => handleShare("whatsapp")}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-green-500/10 text-left transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium">WhatsApp</span>
          </button>

          <button
            onClick={() => handleShare("telegram")}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-500/10 text-left transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <Send className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium">Telegram</span>
          </button>

          <button
            onClick={() => handleShare("copy")}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted text-left transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </div>
            <span className="text-sm font-medium">
              {copied ? "Copied!" : "Copy Link"}
            </span>
          </button>

          <button
            onClick={() => handleShare("native")}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary/10 text-left transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Share2 className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm font-medium">More Options</span>
          </button>
        </div>
      </div>

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className={`fixed bottom-6 right-4 z-50 h-14 rounded-full shadow-xl transition-all duration-300 hover:scale-105 ${
          isOpen 
            ? "bg-foreground text-background hover:bg-foreground/90 w-14 px-0" 
            : "bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 px-5"
        }`}
      >
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <>
            <Share2 className="w-5 h-5 mr-2" />
            <span className="font-semibold">Share</span>
          </>
        )}
      </Button>
    </>
  )
}
