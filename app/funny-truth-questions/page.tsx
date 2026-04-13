import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Home, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "100 Funny Truth Questions - Hilarious Questions for Truth or Dare",
  description: "Discover 100 funny truth questions perfect for parties, game nights, and hanging out with friends. These hilarious questions will have everyone laughing!",
  keywords: ["funny truth questions", "truth or dare questions", "hilarious questions", "party game questions", "fun questions for friends"],
}

const funnyTruthQuestions = [
  // Embarrassing Moments (1-20)
  "What is the most embarrassing song on your playlist that you secretly love?",
  "Have you ever waved back at someone who was not actually waving at you?",
  "What is the silliest thing you have ever done in front of a mirror?",
  "Have you ever laughed so hard that something came out of your nose?",
  "What is the weirdest thing you have ever eaten because you were too lazy to cook?",
  "Have you ever walked into a glass door thinking it was open?",
  "What is the most ridiculous outfit you have ever worn in public?",
  "Have you ever sent a text to the wrong person? What did it say?",
  "What is the funniest nickname you have ever been given?",
  "Have you ever pretended to know a song and just hummed along?",
  "What is the strangest thing you have ever Googled?",
  "Have you ever tripped over nothing and blamed it on an invisible object?",
  "What is the most ridiculous fear you have?",
  "Have you ever talked to yourself in public without realizing it?",
  "What is the weirdest dream you remember having?",
  "Have you ever accidentally called a teacher mom or dad?",
  "What is the most childish thing you still do?",
  "Have you ever pretended to be on your phone to avoid talking to someone?",
  "What is the longest you have gone without showering?",
  "Have you ever blamed a sibling or pet for something you did?",
  
  // Silly Confessions (21-40)
  "What cartoon character do you secretly relate to the most?",
  "Have you ever eaten food that fell on the floor?",
  "What is the most useless talent you have?",
  "Have you ever danced in the elevator when you thought you were alone?",
  "What is the weirdest thing you do when you are home alone?",
  "Have you ever practiced an acceptance speech in the shower?",
  "What is the strangest thing you have ever done to avoid someone?",
  "Have you ever pretended to understand something when you had no idea?",
  "What movie can you quote entirely from memory?",
  "Have you ever sung in the car and noticed someone watching you?",
  "What is the silliest thing that makes you irrationally happy?",
  "Have you ever worn the same clothes multiple days in a row?",
  "What is the weirdest food combination you actually enjoy?",
  "Have you ever pretended your phone was ringing to escape a situation?",
  "What is something you are terrible at but love doing anyway?",
  "Have you ever gotten lost in a place you visit regularly?",
  "What is the most embarrassing thing your parents have caught you doing?",
  "Have you ever laughed at a joke you did not understand?",
  "What is the most ridiculous thing you believed as a child?",
  "Have you ever tried to push a pull door multiple times?",
  
  // Quirky Habits (41-60)
  "What is your strangest bathroom habit?",
  "Have you ever had a full conversation with your pet?",
  "What is the weirdest thing you have named? A car, plant, or stuffed animal?",
  "Have you ever made up a song about what you were doing?",
  "What is your guilty pleasure TV show that you watch alone?",
  "Have you ever forgotten your own age?",
  "What is the most random thing you have memorized?",
  "Have you ever woken up and had no idea where you were?",
  "What is the silliest thing you have cried about?",
  "Have you ever pretended to be asleep to avoid doing something?",
  "What is the weirdest thing you have done because of a dare?",
  "Have you ever talked in your sleep? What did you say?",
  "What is the strangest place you have ever fallen asleep?",
  "Have you ever made up an excuse that was so ridiculous even you did not believe it?",
  "What is the funniest autocorrect fail you have experienced?",
  "Have you ever forgotten someone you met multiple times?",
  "What is the most embarrassing thing in your search history?",
  "Have you ever waved at someone for way too long?",
  "What is the weirdest compliment you have ever received?",
  "Have you ever completely forgotten what you were saying mid-sentence?",
  
  // Awkward Situations (61-80)
  "What is the most awkward first date you have been on?",
  "Have you ever said I love you to someone by accident?",
  "What is the most embarrassing thing you have done to impress someone?",
  "Have you ever stalked someone and accidentally liked an old photo?",
  "What is the worst haircut you have ever gotten?",
  "Have you ever called someone by the completely wrong name?",
  "What is the most cringe-worthy thing you have posted online?",
  "Have you ever showed up to an event on the wrong day?",
  "What is the most embarrassing thing you have said to a stranger?",
  "Have you ever been caught talking about someone while they were right behind you?",
  "What is the worst lie you have told that backfired?",
  "Have you ever pretended to like a gift you actually hated?",
  "What is the most awkward silence you have ever experienced?",
  "Have you ever accidentally insulted someone while trying to compliment them?",
  "What is something you have done that you immediately regretted?",
  "Have you ever been caught staring at someone?",
  "What is the most embarrassing ringtone you have ever had?",
  "Have you ever walked into the wrong bathroom?",
  "What is the funniest thing that has happened to you in public?",
  "Have you ever tried to be cool and completely failed?",
  
  // Random and Hilarious (81-100)
  "If you were a vegetable, which one would you be and why?",
  "What would your superhero name be based on your worst quality?",
  "If your life was a sitcom, what would it be called?",
  "What is the weirdest celebrity crush you have had?",
  "If you could only eat one food for a week, what would it be?",
  "What animal do you think you were in a past life?",
  "If you had to wear a costume every day, what would it be?",
  "What is the most ridiculous thing you have bought online late at night?",
  "If you were a flavor of ice cream, what would you be?",
  "What song would play every time you entered a room?",
  "If you could have any accent, which one would you choose?",
  "What would be the title of your autobiography?",
  "If you could swap lives with any fictional character, who would it be?",
  "What is your most irrational pet peeve?",
  "If you had to give a TED talk right now, what would it be about?",
  "What is the weirdest thing you find attractive in a person?",
  "If you were a pizza topping, which one would you be?",
  "What is the strangest thing you are nostalgic about?",
  "If your pet could talk, what secrets would it reveal about you?",
  "What would you do if you were invisible for a day?",
]

export default function FunnyTruthQuestionsPage() {
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
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>100 Questions</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            100 Funny Truth Questions for Your Next Game Night
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Looking for hilarious truth questions that will have everyone in stitches? These funny questions are perfect for parties, sleepovers, and casual hangouts with friends.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Funny Truth Questions Make the Best Games</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Truth or Dare is a classic party game, but the real magic happens when you ask questions that make everyone laugh. Funny truth questions break the ice, create memorable moments, and bring people closer together through shared laughter.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We have compiled 100 of the funniest, most entertaining truth questions that are perfect for any occasion. From embarrassing confessions to quirky habits, these questions will reveal the hilarious side of everyone playing.
          </p>
        </section>

        {/* Questions List */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">The Ultimate List of Funny Truth Questions</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Embarrassing Moments (1-20)</h3>
              <ol className="space-y-3 list-decimal list-inside">
                {funnyTruthQuestions.slice(0, 20).map((question, index) => (
                  <li key={index} className="text-foreground leading-relaxed pl-2">
                    {question}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Silly Confessions (21-40)</h3>
              <ol className="space-y-3 list-decimal list-inside" start={21}>
                {funnyTruthQuestions.slice(20, 40).map((question, index) => (
                  <li key={index} className="text-foreground leading-relaxed pl-2">
                    {question}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Quirky Habits (41-60)</h3>
              <ol className="space-y-3 list-decimal list-inside" start={41}>
                {funnyTruthQuestions.slice(40, 60).map((question, index) => (
                  <li key={index} className="text-foreground leading-relaxed pl-2">
                    {question}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Awkward Situations (61-80)</h3>
              <ol className="space-y-3 list-decimal list-inside" start={61}>
                {funnyTruthQuestions.slice(60, 80).map((question, index) => (
                  <li key={index} className="text-foreground leading-relaxed pl-2">
                    {question}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Random and Hilarious (81-100)</h3>
              <ol className="space-y-3 list-decimal list-inside" start={81}>
                {funnyTruthQuestions.slice(80, 100).map((question, index) => (
                  <li key={index} className="text-foreground leading-relaxed pl-2">
                    {question}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-10 bg-card rounded-2xl p-6 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">Tips for Using These Questions</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">1.</span>
              <span>Start with lighter questions to warm everyone up before diving into the more personal ones.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">2.</span>
              <span>Remember that the goal is fun, so keep the atmosphere light and supportive.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">3.</span>
              <span>Allow players to pass on questions they are not comfortable answering.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">4.</span>
              <span>Mix up the categories to keep the game interesting and unpredictable.</span>
            </li>
          </ul>
        </section>

        {/* Internal Links */}
        <section className="border-t border-border pt-8">
          <h2 className="text-xl font-bold text-foreground mb-4">Explore More</h2>
          <div className="grid gap-3">
            <Link href="/dare-ideas" className="text-primary hover:underline">100 Dare Ideas for Friends</Link>
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
