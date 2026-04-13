import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Home, Flame } from "lucide-react"

export const metadata: Metadata = {
  title: "100 Dare Ideas for Friends - Fun and Creative Dares",
  description: "Get 100 creative and fun dare ideas perfect for game nights with friends. From silly challenges to creative tasks, find the perfect dare for any occasion!",
  keywords: ["dare ideas", "truth or dare dares", "fun dares for friends", "party dares", "creative dare challenges"],
}

const dareIdeas = [
  // Silly Performance Dares (1-20)
  "Do your best impression of a famous celebrity for one minute.",
  "Perform an interpretive dance to a song chosen by the group.",
  "Speak in a British accent for the next three rounds.",
  "Act out a movie scene without words and let others guess what it is.",
  "Sing the chorus of a popular song in an opera voice.",
  "Do your best robot dance for thirty seconds.",
  "Pretend you are a news anchor and report on what happened today.",
  "Walk like a model on a runway across the room.",
  "Do your best impression of a cartoon character.",
  "Perform a dramatic reading of a text message.",
  "Act like a waiter and take drink orders from everyone.",
  "Do your best slow-motion action hero walk.",
  "Pretend you are giving an acceptance speech for a made-up award.",
  "Speak like a pirate for the next five minutes.",
  "Do an impression of someone in the room without saying who it is.",
  "Pretend you are a chef and describe how to make an imaginary dish.",
  "Act out your morning routine in fast forward.",
  "Do your best impression of a sports commentator.",
  "Perform a thirty-second commercial for a random object in the room.",
  "Act like you just won the lottery.",
  
  // Physical Challenge Dares (21-40)
  "Do ten jumping jacks while saying the alphabet backwards.",
  "Hold a plank position for forty-five seconds.",
  "Do your best cartwheel or attempt at one.",
  "Balance a book on your head and walk across the room.",
  "Do five push-ups while counting in a different language.",
  "Spin around ten times and then try to walk in a straight line.",
  "Hold a wall sit for thirty seconds while singing a song.",
  "Do a silly walk across the room and back.",
  "Try to touch your nose with your tongue.",
  "Do squats while reciting a nursery rhyme.",
  "Balance on one foot for one minute while patting your head.",
  "Do the worm or attempt to do the worm.",
  "Walk on your knees across the room.",
  "Do jazz hands for thirty seconds straight.",
  "March in place like a soldier for one minute.",
  "Do lunges across the room while humming a tune.",
  "Try to do a handstand against a wall.",
  "Skip around the room twice.",
  "Do arm circles while counting to fifty.",
  "Stand on one leg and close your eyes for thirty seconds.",
  
  // Creative Challenge Dares (41-60)
  "Draw a picture with your eyes closed and let others guess what it is.",
  "Write a short poem about the person sitting next to you.",
  "Create a new handshake with the person on your left.",
  "Make up a short jingle about the game you are playing.",
  "Tell a story using only sounds and no words.",
  "Create a new dance move and teach it to the group.",
  "Make up a new word and use it in a sentence.",
  "Draw a self-portrait using your non-dominant hand.",
  "Create a superhero persona for yourself and describe your powers.",
  "Write and perform a short rap about something in the room.",
  "Make up a short fairy tale on the spot.",
  "Create a new emoji using only your facial expressions.",
  "Design an imaginary invention and pitch it to the group.",
  "Make up a secret handshake with someone.",
  "Create a short jingle for a made-up product.",
  "Tell an entire story using only three words.",
  "Design a new flag for an imaginary country.",
  "Make up new lyrics to a popular song.",
  "Create a unique animal noise and have others guess what it is.",
  "Invent a new holiday and explain how people should celebrate it.",
  
  // Social Challenge Dares (21-80)
  "Give everyone in the room a genuine compliment.",
  "Let someone pick a photo from your camera roll to share.",
  "Tell your most embarrassing childhood story.",
  "Share the last thing you searched on your phone.",
  "Say three nice things about yourself.",
  "Tell a joke and make at least one person laugh.",
  "Share your most unpopular opinion.",
  "Tell the group about your biggest fear.",
  "Share the nicest thing someone has done for you recently.",
  "Describe your perfect day from start to finish.",
  "Tell everyone what you appreciate about this group.",
  "Share a goal you are working toward.",
  "Describe your first crush without saying their name.",
  "Tell the group about a hidden talent you have.",
  "Share a fun fact about yourself that no one knows.",
  "Describe yourself in three words and explain why.",
  "Tell everyone your favorite memory from the past year.",
  "Share the best advice you have ever received.",
  "Describe your ideal vacation destination.",
  "Tell the group what makes you happiest.",
  
  // Timed Challenge Dares (81-100)
  "Name ten movies in thirty seconds.",
  "List fifteen animals in one minute.",
  "Say the alphabet backwards in under thirty seconds.",
  "Name twelve songs that start with the letter S in one minute.",
  "List ten vegetables in twenty seconds.",
  "Name eight countries in Europe in thirty seconds.",
  "List ten things you can find in a kitchen in twenty seconds.",
  "Name six ice cream flavors in fifteen seconds.",
  "List twelve sports in forty-five seconds.",
  "Name ten famous landmarks in one minute.",
  "List eight types of pasta in thirty seconds.",
  "Name ten colors in fifteen seconds.",
  "List six musical instruments that are not guitars in twenty seconds.",
  "Name twelve books or movies in one minute.",
  "List eight things that are round in twenty seconds.",
  "Name ten fruits in thirty seconds.",
  "List six cartoon characters in fifteen seconds.",
  "Name ten things you would take on a road trip in forty-five seconds.",
  "List eight pizza toppings in twenty seconds.",
  "Name twelve things that are blue in one minute.",
]

export default function DareIdeasPage() {
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
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Flame className="w-4 h-4" />
            <span>100 Dares</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            100 Dare Ideas for Friends: Fun Challenges for Any Occasion
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Looking for creative and entertaining dares? Our collection of 100 dare ideas ranges from silly performances to creative challenges, perfect for parties and game nights.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">The Art of the Perfect Dare</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A great dare strikes the perfect balance between challenging and fun. It should push people slightly out of their comfort zone while keeping everyone entertained. The best dares create memorable moments that the group will talk about for years to come.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you are hosting a party, having a game night, or just hanging out with friends, these 100 dare ideas will keep the energy high and the laughter flowing.
          </p>
        </section>

        {/* Dares List */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">Complete List of Dare Ideas</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Silly Performance Dares (1-20)</h3>
              <p className="text-muted-foreground mb-4">These dares will have everyone showing off their acting and entertainment skills.</p>
              <ol className="space-y-3 list-decimal list-inside">
                {dareIdeas.slice(0, 20).map((dare, index) => (
                  <li key={index} className="text-foreground leading-relaxed pl-2">
                    {dare}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Physical Challenge Dares (21-40)</h3>
              <p className="text-muted-foreground mb-4">Get active with these fun physical challenges that test coordination and endurance.</p>
              <ol className="space-y-3 list-decimal list-inside" start={21}>
                {dareIdeas.slice(20, 40).map((dare, index) => (
                  <li key={index} className="text-foreground leading-relaxed pl-2">
                    {dare}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Creative Challenge Dares (41-60)</h3>
              <p className="text-muted-foreground mb-4">Let your imagination run wild with these creative and artistic dares.</p>
              <ol className="space-y-3 list-decimal list-inside" start={41}>
                {dareIdeas.slice(40, 60).map((dare, index) => (
                  <li key={index} className="text-foreground leading-relaxed pl-2">
                    {dare}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Social Challenge Dares (61-80)</h3>
              <p className="text-muted-foreground mb-4">These dares encourage sharing, connection, and getting to know each other better.</p>
              <ol className="space-y-3 list-decimal list-inside" start={61}>
                {dareIdeas.slice(60, 80).map((dare, index) => (
                  <li key={index} className="text-foreground leading-relaxed pl-2">
                    {dare}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Timed Challenge Dares (81-100)</h3>
              <p className="text-muted-foreground mb-4">Race against the clock with these quick-thinking timed challenges.</p>
              <ol className="space-y-3 list-decimal list-inside" start={81}>
                {dareIdeas.slice(80, 100).map((dare, index) => (
                  <li key={index} className="text-foreground leading-relaxed pl-2">
                    {dare}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-10 bg-card rounded-2xl p-6 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">How to Choose the Right Dare</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold">1.</span>
              <span>Consider the comfort level of the player. Start with easier dares and work up to more challenging ones.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold">2.</span>
              <span>Match the dare to the setting. Some dares work better in private spaces while others are fine for public areas.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold">3.</span>
              <span>Keep it fun and never pressure anyone to do something they are uncomfortable with.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold">4.</span>
              <span>Mix different types of dares to keep the game interesting for everyone.</span>
            </li>
          </ul>
        </section>

        {/* Internal Links */}
        <section className="border-t border-border pt-8">
          <h2 className="text-xl font-bold text-foreground mb-4">Explore More</h2>
          <div className="grid gap-3">
            <Link href="/funny-truth-questions" className="text-primary hover:underline">100 Funny Truth Questions</Link>
            <Link href="/couples-truth-or-dare" className="text-primary hover:underline">Couples Truth or Dare Questions</Link>
            <Link href="/party-questions" className="text-primary hover:underline">Party Truth or Dare Questions</Link>
            <Link href="/how-to-play" className="text-primary hover:underline">How to Play Truth or Dare</Link>
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
