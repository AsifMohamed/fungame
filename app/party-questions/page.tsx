import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Home, PartyPopper } from "lucide-react"

export const metadata: Metadata = {
  title: "Party Truth or Dare Questions - Epic Game Night Ideas",
  description: "Get the ultimate collection of party Truth or Dare questions! Perfect for birthday parties, game nights, and social gatherings with friends.",
  keywords: ["party truth or dare", "party game questions", "game night ideas", "birthday party games", "fun party questions"],
}

const partyTruths = [
  "What is the most adventurous thing you have ever done?",
  "What is your go-to karaoke song?",
  "What is the funniest thing that happened to you at a party?",
  "If you could only eat one food at every party forever, what would it be?",
  "What is the best party you have ever attended?",
  "What song always gets you on the dance floor?",
  "What is your hidden party talent?",
  "What is the most spontaneous thing you have done?",
  "What would be your perfect party theme?",
  "Who in this room would you want on your team for a game?",
  "What is your favorite party snack?",
  "What is your best icebreaker for meeting new people?",
  "If you could DJ for a night, what genre would you play?",
  "What is the funniest dance move you can do?",
  "What is your favorite party memory from this year?",
  "If this party had a theme song, what would it be?",
  "What is one thing that always makes a party better?",
  "Who is the best party host you know and why?",
  "What is your ideal party size, small gathering or big celebration?",
  "What game do you always win at parties?",
  "What is the best costume you have ever worn to a party?",
  "If you could invite any celebrity to this party, who would it be?",
  "What is your favorite party game of all time?",
  "What time do you usually leave parties, early or late?",
  "What is the most unique party you have attended?",
]

const partyDares = [
  "Start a conga line around the room.",
  "Do your best dance move and get at least two people to join you.",
  "Serenade the person next to you with any song.",
  "Do an impression of someone at this party without naming them.",
  "Lead the group in a group photo with a silly pose.",
  "Perform a magic trick, real or completely made up.",
  "Give a toast to the group like you are at a wedding.",
  "Create a handshake with everyone in the room.",
  "Dance battle with the person across from you for thirty seconds.",
  "Tell a joke that makes at least three people laugh.",
  "Do your best celebrity impression for one minute.",
  "Make up a cheer for this party and perform it.",
  "Lead the group in a thirty-second dance workout.",
  "Pretend you are a party photographer and direct people for photos.",
  "Give everyone in the room a high five in under thirty seconds.",
  "Speak in a different accent for the next three rounds.",
  "Do your best impression of the host of this party.",
  "Perform an air guitar solo to an imaginary song.",
  "Lead a round of simon says with everyone.",
  "Make up a party anthem and get everyone to sing along.",
  "Tell an embarrassing but funny story about yourself.",
  "Do the robot dance while someone beatboxes for you.",
  "Compliment every person in the room in one minute.",
  "Pretend you are a sports commentator describing this party.",
  "End the game with a group cheer that you create.",
]

export default function PartyQuestionsPage() {
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
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <PartyPopper className="w-4 h-4" />
            <span>Party Edition</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Party Truth or Dare Questions for Epic Game Nights
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Take your party to the next level with these fun, energetic, and group-friendly Truth or Dare questions. Perfect for birthday parties, game nights, and any social gathering!
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Truth or Dare is the Ultimate Party Game</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Truth or Dare has been a party staple for generations, and for good reason. It breaks the ice, gets everyone involved, and creates unforgettable moments. Whether you are hosting a birthday bash, a casual get-together, or a game night, this game is guaranteed to bring energy and laughter.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            These party-specific questions and dares are designed to get groups engaged, dancing, laughing, and bonding. They work for groups of all sizes and are perfect for any celebration.
          </p>
        </section>

        {/* Truth Questions */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">25 Party Truth Questions</h2>
          <p className="text-muted-foreground mb-6">
            Get to know your party guests better with these fun and engaging questions.
          </p>
          <ol className="space-y-3 list-decimal list-inside">
            {partyTruths.map((truth, index) => (
              <li key={index} className="text-foreground leading-relaxed pl-2">
                {truth}
              </li>
            ))}
          </ol>
        </section>

        {/* Dare Challenges */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">25 Party Dares</h2>
          <p className="text-muted-foreground mb-6">
            These high-energy dares will get everyone moving and create unforgettable party moments.
          </p>
          <ol className="space-y-3 list-decimal list-inside">
            {partyDares.map((dare, index) => (
              <li key={index} className="text-foreground leading-relaxed pl-2">
                {dare}
              </li>
            ))}
          </ol>
        </section>

        {/* How to Play at Parties */}
        <section className="mb-10 bg-card rounded-2xl p-6 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">How to Play at Parties</h2>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Classic Circle Style</h3>
              <p>Gather everyone in a circle. Take turns spinning a bottle or choosing the next player. The chosen person picks truth or dare, and the game continues around the circle.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Team Version</h3>
              <p>Split into two teams. Teams take turns giving truth questions or dares to members of the opposing team. Add points for completed dares to make it competitive.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Card Draw Style</h3>
              <p>Write questions and dares on cards. Put them in separate piles. Players draw a card based on their choice and complete the challenge.</p>
            </div>
          </div>
        </section>

        {/* Party Planning Tips */}
        <section className="mb-10 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
          <h2 className="text-2xl font-bold text-foreground mb-4">Tips for the Best Game Night</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>Set the mood with good music that can be paused for the game</li>
            <li>Have snacks and drinks easily accessible</li>
            <li>Create a comfortable space where everyone can see each other</li>
            <li>Start with easier questions to warm everyone up</li>
            <li>Encourage participation but never force anyone</li>
            <li>Have a fun prize for the person who completes the most dares</li>
          </ul>
        </section>

        {/* Internal Links */}
        <section className="border-t border-border pt-8">
          <h2 className="text-xl font-bold text-foreground mb-4">Explore More</h2>
          <div className="grid gap-3">
            <Link href="/funny-truth-questions" className="text-primary hover:underline">100 Funny Truth Questions</Link>
            <Link href="/dare-ideas" className="text-primary hover:underline">100 Dare Ideas for Friends</Link>
            <Link href="/icebreaker-questions" className="text-primary hover:underline">Icebreaker Questions for Groups</Link>
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
