import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Home, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Icebreaker Questions for Groups - Fun Conversation Starters",
  description: "Break the ice with our collection of fun icebreaker questions! Perfect for team meetings, new groups, parties, and any gathering where you want to spark great conversations.",
  keywords: ["icebreaker questions", "conversation starters", "team building questions", "get to know you questions", "group questions"],
}

const funIcebreakers = [
  "If you could have any superpower for a day, what would it be?",
  "What is the best meal you have ever had?",
  "If you could travel anywhere tomorrow, where would you go?",
  "What is a hobby you have always wanted to try?",
  "What is the most interesting thing you learned recently?",
  "If you could have dinner with anyone, living or historical, who would it be?",
  "What is your favorite way to spend a weekend?",
  "What is the best book or movie you have enjoyed recently?",
  "If you could master any skill instantly, what would you choose?",
  "What is your favorite season and why?",
  "What would your dream job be if money was not a factor?",
  "What is a small thing that makes your day better?",
  "If you could live in any fictional world, which would it be?",
  "What is your go-to comfort food?",
  "What is the most beautiful place you have ever visited?",
  "If you had an extra hour every day, how would you spend it?",
  "What is something you are really proud of?",
  "What is your favorite holiday tradition?",
  "If you could pick up a new language instantly, which would you choose?",
  "What is the best advice you have ever received?",
]

const wouldYouRather = [
  "Would you rather have the ability to fly or be invisible?",
  "Would you rather live in the mountains or by the beach?",
  "Would you rather be able to talk to animals or speak every language?",
  "Would you rather have unlimited money or unlimited time?",
  "Would you rather be famous or be the best friend of someone famous?",
  "Would you rather travel to the past or the future?",
  "Would you rather always be slightly early or slightly late?",
  "Would you rather have a personal chef or a personal driver?",
  "Would you rather be too hot or too cold?",
  "Would you rather only eat sweet or savory foods forever?",
  "Would you rather live without music or without movies?",
  "Would you rather be an amazing cook or an amazing dancer?",
  "Would you rather have a pause button or a rewind button for your life?",
  "Would you rather have more time or more money?",
  "Would you rather be able to read minds or predict the future?",
]

const thisOrThat = [
  "Coffee or tea?",
  "Morning person or night owl?",
  "Books or movies?",
  "Beach vacation or mountain retreat?",
  "Summer or winter?",
  "Sweet or salty snacks?",
  "City life or countryside?",
  "Phone call or text message?",
  "Plan ahead or be spontaneous?",
  "Early bird or night owl?",
  "Indoor activities or outdoor adventures?",
  "Cooking at home or eating out?",
  "Music or podcasts?",
  "Cats or dogs?",
  "Road trip or flying?",
]

const teamBuildingQuestions = [
  "What is one thing most people do not know about you?",
  "What was your first job?",
  "What is your hidden talent?",
  "What is something you have on your bucket list?",
  "If you could switch jobs with anyone for a day, who would it be?",
  "What is the best team you have ever been part of and why?",
  "What motivates you to do your best work?",
  "What is a skill you are currently working on developing?",
  "What do you enjoy most about working with a team?",
  "If you could add any skill to your team, what would it be?",
  "What is your favorite way to celebrate success?",
  "What is the most useful feedback you have ever received?",
  "What do you think makes a team successful?",
  "What is one goal you are working toward this year?",
  "How do you like to receive recognition for good work?",
]

export default function IcebreakerQuestionsPage() {
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
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            <span>For Groups</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Icebreaker Questions for Groups: Spark Great Conversations
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you are meeting new people, starting a team meeting, or hosting a gathering, these icebreaker questions will help everyone feel comfortable and connected.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Icebreakers Matter</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            First impressions and new group dynamics can feel awkward. Icebreaker questions serve as conversation bridges, helping people open up, find common ground, and build connections naturally.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The best icebreakers are simple enough for anyone to answer yet interesting enough to spark follow-up conversations. We have organized these questions by type so you can choose the perfect ones for your situation.
          </p>
        </section>

        {/* Fun Icebreakers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">20 Fun Icebreaker Questions</h2>
          <p className="text-muted-foreground mb-6">
            These light and engaging questions work great for any casual gathering or social event.
          </p>
          <ol className="space-y-3 list-decimal list-inside">
            {funIcebreakers.map((question, index) => (
              <li key={index} className="text-foreground leading-relaxed pl-2">
                {question}
              </li>
            ))}
          </ol>
        </section>

        {/* Would You Rather */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">15 Would You Rather Questions</h2>
          <p className="text-muted-foreground mb-6">
            These choice-based questions reveal preferences and often lead to fun debates.
          </p>
          <ol className="space-y-3 list-decimal list-inside">
            {wouldYouRather.map((question, index) => (
              <li key={index} className="text-foreground leading-relaxed pl-2">
                {question}
              </li>
            ))}
          </ol>
        </section>

        {/* This or That */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">15 Quick This or That Questions</h2>
          <p className="text-muted-foreground mb-6">
            Perfect for rapid-fire rounds that get everyone participating quickly.
          </p>
          <ol className="space-y-3 list-decimal list-inside">
            {thisOrThat.map((question, index) => (
              <li key={index} className="text-foreground leading-relaxed pl-2">
                {question}
              </li>
            ))}
          </ol>
        </section>

        {/* Team Building */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">15 Team Building Questions</h2>
          <p className="text-muted-foreground mb-6">
            These questions are ideal for work meetings, team retreats, and professional settings.
          </p>
          <ol className="space-y-3 list-decimal list-inside">
            {teamBuildingQuestions.map((question, index) => (
              <li key={index} className="text-foreground leading-relaxed pl-2">
                {question}
              </li>
            ))}
          </ol>
        </section>

        {/* How to Use */}
        <section className="mb-10 bg-card rounded-2xl p-6 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">How to Use Icebreakers Effectively</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-teal-500 font-bold">1.</span>
              <span>Start with easier, lighter questions before moving to deeper ones.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-500 font-bold">2.</span>
              <span>As the facilitator, answer first to model the kind of response you are looking for.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-500 font-bold">3.</span>
              <span>Keep it moving. Do not let any one answer go on too long.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-500 font-bold">4.</span>
              <span>Match the questions to your audience. Professional settings need different questions than parties.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-500 font-bold">5.</span>
              <span>Make participation optional. Some people warm up slower than others.</span>
            </li>
          </ul>
        </section>

        {/* When to Use */}
        <section className="mb-10 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100">
          <h2 className="text-2xl font-bold text-foreground mb-4">Perfect Occasions for Icebreakers</h2>
          <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Professional Settings</h3>
              <ul className="space-y-1 text-sm">
                <li>Team meetings and stand-ups</li>
                <li>New employee onboarding</li>
                <li>Workshops and training sessions</li>
                <li>Virtual meetings and video calls</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Social Gatherings</h3>
              <ul className="space-y-1 text-sm">
                <li>House parties and game nights</li>
                <li>First dates and double dates</li>
                <li>Family reunions</li>
                <li>Club meetings and social groups</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-border pt-8">
          <h2 className="text-xl font-bold text-foreground mb-4">Explore More</h2>
          <div className="grid gap-3">
            <Link href="/funny-truth-questions" className="text-primary hover:underline">100 Funny Truth Questions</Link>
            <Link href="/dare-ideas" className="text-primary hover:underline">100 Dare Ideas for Friends</Link>
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
