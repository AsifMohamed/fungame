"use client"

import { ArrowLeft, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onBack: () => void
  showBack: boolean
}

export function Header({ onBack, showBack }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBack && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onBack}
              className="rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
          )}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/25">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FunGames
            </span>
          </div>
        </div>
        
        <p className="text-xs text-muted-foreground hidden sm:block">
          Play. Share. Enjoy!
        </p>
      </div>
    </header>
  )
}
