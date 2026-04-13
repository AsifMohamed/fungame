import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Home, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Couples Truth or Dare Questions - Romantic Game Ideas",
  description: "Discover fun and romantic Truth or Dare questions perfect for couples. Strengthen your bond with these engaging questions and creative challenges for date night!",
  keywords: ["couples truth or dare", "romantic questions", "date night games", "couples game questions", "relationship questions"],
}

const couplesTruths = [
  "What was your first impression of me?",
  "What is your favorite memory of us together?",
  "What is one thing I do that always makes you smile?",
  "What song reminds you of our relationship?",
  "What is your favorite thing about our relationship?",
  "What is something you have always wanted to tell me but never did?",
  "What is your favorite date we have ever been on?",
  "What is one thing about me that surprised you when we first met?",
  "What do you think makes us a great team?",
  "What is something new you would like us to try together?",
  "What is the sweetest thing I have ever done for you?",
  "What moment made you realize you wanted to be with me?",
  "What is your favorite way to spend time together?",
  "What is something you love that I cook or make?",
  "What is a goal you would love for us to achieve together?",
  "What is the funniest memory we share?",
  "What is something small I do that means a lot to you?",
  "What is your favorite thing about the way we communicate?",
  "What is a trip or adventure you would love to take with me?",
  "What made you decide to say yes to our first date?",
  "What is something you want to do more of together?",
  "What do you think our superpower as a couple is?",
  "What is your favorite nickname you have for me?",
  "What is the best gift I have ever given you?",
  "What is something you are grateful for in our relationship?",
  "What is one thing we have overcome together that you are proud of?",
  "What is your favorite inside joke we share?",
  "What is something about me that still surprises you?",
  "What is your favorite tradition we have created together?",
  "What is one dream you want us to chase together?",
]

const couplesDares = [
  "Give your partner a thirty-second shoulder massage.",
  "Write down three things you love about your partner and read them aloud.",
  "Recreate your first kiss together.",
  "Dance together to your favorite song.",
  "Give your partner the biggest hug you can.",
  "Hold hands and look into each other&apos;s eyes for one minute without laughing.",
  "Tell your partner three things you appreciate about them today.",
  "Create a secret handshake together.",
  "Plan a surprise date for next week right now.",
  "Slow dance together without any music.",
  "Write a short love note and give it to your partner.",
  "Describe your partner using only compliments for one minute.",
  "Recreate your favorite photo together.",
  "Make up a silly couple nickname for both of you.",
  "Share one thing from your bucket list you want to do with your partner.",
  "Give your partner a forehead kiss.",
  "Text your partner three heart emojis and wait for their reaction.",
  "Plan your dream vacation together in five minutes.",
  "Share the first song that reminds you of your partner.",
  "Try to make your partner laugh in thirty seconds or less.",
  "Give your partner a genuine compliment about their personality.",
  "Create a playlist together of songs that remind you of your relationship.",
  "Share a childhood memory you have never told your partner.",
  "Draw a picture of both of you together.",
  "Act out how you two first met.",
  "Teach your partner a skill or hobby you enjoy.",
  "Plan a cozy night in together right now.",
  "Share what you are most excited about in your future together.",
  "Give your partner a high five and tell them why they are amazing.",
  "Cook or make something together as a team.",
]

export default function CouplesTruthOrDarePage() {
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
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Heart className="w-4 h-4" />
            <span>For Couples</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Couples Truth or Dare: Questions to Strengthen Your Bond
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Looking for a fun way to connect with your partner? These romantic and playful Truth or Dare questions are perfect for date nights, cozy evenings at home, or any time you want to grow closer together.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Play Truth or Dare as a Couple?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Truth or Dare is not just for parties with friends. When adapted for couples, it becomes a wonderful tool for deepening your connection, sparking meaningful conversations, and creating fun memories together.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            These questions and dares are designed to help you learn more about each other, express appreciation, and enjoy quality time together. Whether you have been together for months or years, there is always something new to discover about your partner.
          </p>
        </section>

        {/* Truth Questions */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">30 Truth Questions for Couples</h2>
          <p className="text-muted-foreground mb-6">
            These questions will help you learn more about your partner and reflect on your relationship journey together.
          </p>
          <ol className="space-y-3 list-decimal list-inside">
            {couplesTruths.map((truth, index) => (
              <li key={index} className="text-foreground leading-relaxed pl-2">
                {truth}
              </li>
            ))}
          </ol>
        </section>

        {/* Dare Challenges */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">30 Romantic Dares for Couples</h2>
          <p className="text-muted-foreground mb-6">
            These sweet and playful dares will help you express love and create joyful moments together.
          </p>
          <ol className="space-y-3 list-decimal list-inside">
            {couplesDares.map((dare, index) => (
              <li key={index} className="text-foreground leading-relaxed pl-2">
                {dare}
              </li>
            ))}
          </ol>
        </section>

        {/* Tips Section */}
        <section className="mb-10 bg-card rounded-2xl p-6 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">Tips for Playing as a Couple</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-pink-500 font-bold">1.</span>
              <span>Create a comfortable atmosphere. Light some candles, put on soft music, and make it special.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 font-bold">2.</span>
              <span>Be open and honest. The game works best when both partners feel safe to share.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 font-bold">3.</span>
              <span>Listen actively when your partner shares. This is about connection, not competition.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 font-bold">4.</span>
              <span>Have fun with the dares. Laugh together and do not take things too seriously.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 font-bold">5.</span>
              <span>Use this as an opportunity to express appreciation and gratitude for each other.</span>
            </li>
          </ul>
        </section>

        {/* Date Night Ideas */}
        <section className="mb-10 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100">
          <h2 className="text-2xl font-bold text-foreground mb-4">Perfect Date Night Pairings</h2>
          <p className="text-muted-foreground mb-4">
            Make your Truth or Dare session even more special by pairing it with these date night ideas:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>A cozy movie night at home with snacks</li>
            <li>A homemade dinner you cook together</li>
            <li>A picnic in your backyard or living room</li>
            <li>After a walk or outdoor adventure</li>
            <li>A weekend morning with breakfast in bed</li>
          </ul>
        </section>

        {/* Internal Links */}
        <section className="border-t border-border pt-8">
          <h2 className="text-xl font-bold text-foreground mb-4">Explore More</h2>
          <div className="grid gap-3">
            <Link href="/funny-truth-questions" className="text-primary hover:underline">100 Funny Truth Questions</Link>
            <Link href="/dare-ideas" className="text-primary hover:underline">100 Dare Ideas for Friends</Link>
            <Link href="/party-questions" className="text-primary hover:underline">Party Truth or Dare Questions</Link>
            <Link href="/icebreaker-questions" className="text-primary hover:underline">Icebreaker Questions for Groups</Link>
            <Link href="/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline mt-2">
              <Home className="w-4 h-4" />
              Play Truth or Dare Online
            </Link>
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
