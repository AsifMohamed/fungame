import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Heart, Flame, Sparkles, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Party Games",
  description: "Learn more about Party Games - Fun, free games to play with friends",
}

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-background to-orange-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Games
        </Link>

        <article className="prose prose-sm max-w-none">
          <h1 className="text-3xl font-bold text-foreground mb-2">About Party Games</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Fun, free games to play with friends - no signup required!
          </p>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Party Games was created with one simple goal: to bring people together through fun, 
              interactive games. Whether you&apos;re at a party, hanging out with friends, or just 
              looking for some entertainment, our games are designed to create memorable moments 
              and lots of laughter.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">Our Games</h2>
            
            <div className="grid gap-4 not-prose">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-pink-500/10 border border-primary/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Flame className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Truth or Dare</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  The classic party game with fun questions and exciting challenges. 
                  Perfect for breaking the ice and getting to know your friends better.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-br from-secondary/10 to-red-500/10 border border-secondary/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Love Score</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  A fun compatibility calculator that generates a love score between any two names. 
                  Great for laughs with friends!
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-foreground">Custom Challenges</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Create personalized truth questions or dares and share them with friends. 
                  Make the game even more fun with custom content!
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">Why Choose Us?</h2>
            <ul className="list-none space-y-3 text-muted-foreground not-prose">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">100% Free</span>
                <span>- No hidden costs, no premium features, just pure fun</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">No Signup</span>
                <span>- Start playing instantly without creating an account</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">Mobile Friendly</span>
                <span>- Optimized for phones so you can play anywhere</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">Safe Content</span>
                <span>- Family-friendly games suitable for all ages</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">Share the Fun</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Love our games? Share them with your friends! Our sharing features make it easy to 
              challenge friends, share your results, and spread the fun on social media.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground not-prose">
              <Users className="w-4 h-4" />
              <span>Thousands of players enjoying games every day</span>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Get in Touch</h2>
            <p className="text-muted-foreground leading-relaxed">
              Have suggestions, feedback, or questions? We&apos;d love to hear from you! 
              Visit our <Link href="/contact" className="text-primary hover:underline">contact page</Link> to 
              get in touch.
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}
