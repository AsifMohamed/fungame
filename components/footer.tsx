"use client"

import Link from "next/link"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t border-border/50 bg-card/50 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 py-8">
        {/* Disclaimer */}
        <div className="text-center mb-6">
          <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
            This is a fun entertainment website. All content is for entertainment purposes only. 
            Play responsibly and ensure all participants consent to playing.
          </p>
        </div>

        {/* Legal Links */}
        <nav className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <Link 
            href="/privacy" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="text-muted-foreground/30">|</span>
          <Link 
            href="/terms" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms of Service
          </Link>
          <span className="text-muted-foreground/30">|</span>
          <Link 
            href="/about" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About Us
          </Link>
          <span className="text-muted-foreground/30">|</span>
          <Link 
            href="/contact" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" /> for fun
          </p>
          <p className="text-xs text-muted-foreground/60 mt-1">
            {new Date().getFullYear()} Party Games. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
