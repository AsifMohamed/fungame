import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Home, BookOpen, Users, Shuffle, MessageCircle, Flame, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "How to Play Truth or Dare - Complete Rules and Guide",
  description: "Learn how to play Truth or Dare with our complete guide! Discover the rules, variations, tips for hosting, and ideas to make your game night unforgettable.",
  keywords: ["how to play truth or dare", "truth or dare rules", "truth or dare guide", "party game rules", "game night guide"],
}

export default function HowToPlayPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
            <Home className="w-5 h-5" />
            <span className="text-sm font-medium">Play Now</span>
          </Link>
        </div>
      </header>

      <article className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Complete Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            How to Play Truth or Dare: The Complete Guide
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you are a first-time player or looking to spice up your game nights, this comprehensive guide covers everything you need to know about playing Truth or Dare.
          </p>
        </div>

        {/* What is Truth or Dare */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">What is Truth or Dare?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Truth or Dare is a classic party game that has been entertaining people for generations. The game is simple: players take turns choosing between answering a question truthfully or completing a challenge. It is a perfect way to break the ice, learn more about your friends, and create memorable moments.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The game works for groups of any size, from two players to large parties. All you need is a group of willing participants and a sense of adventure!
          </p>
        </section>

        {/* Basic Rules */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">Basic Rules</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Step 1: Gather Your Players</h3>
                <p className="text-muted-foreground">Get a group of friends together. The game works best with 3 or more players, but you can play with just two. Sit in a circle so everyone can see each other.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Shuffle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Step 2: Decide Who Goes First</h3>
                <p className="text-muted-foreground">Choose the first player randomly. You can spin a bottle, draw straws, or simply volunteer. The first player will ask the next player the famous question.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Step 3: Ask Truth or Dare</h3>
                <p className="text-muted-foreground">The current player asks the next player: Truth or Dare? The chosen player must pick one option. No backing out once you have made your choice!</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Step 4: Complete the Challenge</h3>
                <p className="text-muted-foreground">If they choose Truth, ask a question they must answer honestly. If they choose Dare, give them a challenge to complete. Be creative but respectful!</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Step 5: Continue Around</h3>
                <p className="text-muted-foreground">After completing the truth or dare, that player becomes the questioner and picks the next player. Continue around the circle until everyone has had multiple turns.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Game Variations */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">Popular Game Variations</h2>
          
          <div className="space-y-4">
            <div className="bg-card rounded-xl p-5 border border-border">
              <h3 className="font-semibold text-foreground mb-2">Spin the Bottle Version</h3>
              <p className="text-muted-foreground text-sm">Place a bottle in the center of the circle. Spin it to determine who gets asked. Whoever the bottle points to must choose truth or dare from the spinner.</p>
            </div>

            <div className="bg-card rounded-xl p-5 border border-border">
              <h3 className="font-semibold text-foreground mb-2">Card Draw Version</h3>
              <p className="text-muted-foreground text-sm">Write truth questions and dares on separate cards. When a player makes their choice, they draw a random card from the appropriate pile and must complete it.</p>
            </div>

            <div className="bg-card rounded-xl p-5 border border-border">
              <h3 className="font-semibold text-foreground mb-2">Points System</h3>
              <p className="text-muted-foreground text-sm">Assign point values to different levels of truths and dares. Easy ones worth 1 point, medium worth 3, and hard worth 5. The player with the most points wins!</p>
            </div>

            <div className="bg-card rounded-xl p-5 border border-border">
              <h3 className="font-semibold text-foreground mb-2">Team Version</h3>
              <p className="text-muted-foreground text-sm">Split into teams. Teams take turns giving challenges to members of opposing teams. The team that completes the most challenges wins the game.</p>
            </div>

            <div className="bg-card rounded-xl p-5 border border-border">
              <h3 className="font-semibold text-foreground mb-2">Timer Challenge</h3>
              <p className="text-muted-foreground text-sm">Add a time limit to dares. If the player does not complete the dare within the time limit, they must do an additional penalty dare or answer a bonus truth.</p>
            </div>
          </div>
        </section>

        {/* Tips for Great Games */}
        <section className="mb-10 bg-card rounded-2xl p-6 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">Tips for Hosting a Great Game</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold">1.</span>
              <span><strong>Set boundaries first.</strong> Before starting, agree on what types of questions and dares are off limits. This ensures everyone feels comfortable.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold">2.</span>
              <span><strong>Start light.</strong> Begin with easier questions and simpler dares. Build up the intensity as the game progresses and everyone loosens up.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold">3.</span>
              <span><strong>Keep it fun.</strong> The goal is entertainment, not embarrassment. Make sure everyone is laughing with each other, not at each other.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold">4.</span>
              <span><strong>Have a skip option.</strong> Allow players to skip one question or dare per game if they are truly uncomfortable. This keeps the game enjoyable for everyone.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold">5.</span>
              <span><strong>Balance truths and dares.</strong> Mix up the difficulty levels and types to keep the game unpredictable and exciting.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold">6.</span>
              <span><strong>Be creative.</strong> The best memories come from unique, personalized questions and dares that relate to your group.</span>
            </li>
          </ul>
        </section>

        {/* Question Ideas */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Getting Started with Questions</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Not sure what to ask? Here are some categories to get you thinking:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
              <h3 className="font-semibold text-foreground mb-2">Truth Categories</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Favorites and preferences</li>
                <li>Funny or embarrassing moments</li>
                <li>Dreams and aspirations</li>
                <li>Opinions and beliefs</li>
                <li>Hypothetical scenarios</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 border border-orange-100">
              <h3 className="font-semibold text-foreground mb-2">Dare Categories</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Performances and talents</li>
                <li>Physical challenges</li>
                <li>Creative tasks</li>
                <li>Social interactions</li>
                <li>Timed challenges</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Online Play */}
        <section className="mb-10 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/20">
          <h2 className="text-2xl font-bold text-foreground mb-4">Play Online</h2>
          <p className="text-muted-foreground mb-4">
            Want to play Truth or Dare without coming up with your own questions? Use our free online Truth or Dare generator! It automatically provides random truths and dares, so you can focus on having fun.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            <Home className="w-5 h-5" />
            Play Truth or Dare Now
          </Link>
        </section>

        {/* Internal Links */}
        <section className="border-t border-border pt-8">
          <h2 className="text-xl font-bold text-foreground mb-4">Find More Questions</h2>
          <div className="grid gap-3">
            <Link href="/funny-truth-questions" className="text-primary hover:underline">100 Funny Truth Questions</Link>
            <Link href="/dare-ideas" className="text-primary hover:underline">100 Dare Ideas for Friends</Link>
            <Link href="/couples-truth-or-dare" className="text-primary hover:underline">Couples Truth or Dare Questions</Link>
            <Link href="/party-questions" className="text-primary hover:underline">Party Truth or Dare Questions</Link>
            <Link href="/icebreaker-questions" className="text-primary hover:underline">Icebreaker Questions for Groups</Link>
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>This content is for entertainment purposes only.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
