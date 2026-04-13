import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - Party Games",
  description: "Terms of Service for Party Games - Truth or Dare and Love Score Calculator",
}

export default function TermsOfService() {
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using Party Games, you agree to be bound by these Terms of Service. 
              If you do not agree with any part of these terms, please do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">Use of Service</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Our website provides entertainment games including Truth or Dare and Love Score Calculator. 
              By using our service, you agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Use the games responsibly and respectfully</li>
              <li>Ensure all participants consent to playing</li>
              <li>Not use the service for any harmful, abusive, or illegal purposes</li>
              <li>Not attempt to interfere with or disrupt the service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">Content Guidelines</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Our games are designed to be fun and safe for all ages. When creating custom challenges:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Keep content appropriate and respectful</li>
              <li>Do not create challenges that could cause harm</li>
              <li>Do not include offensive, discriminatory, or illegal content</li>
              <li>Respect the privacy and dignity of others</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              Party Games is provided for entertainment purposes only. The Love Score results are 
              randomly generated and should not be taken seriously. We are not responsible for any 
              actions taken based on game results or challenges.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this website, including text, graphics, logos, and software, is the property 
              of Party Games and is protected by intellectual property laws. You may not copy, modify, 
              or distribute our content without permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Party Games is provided &ldquo;as is&rdquo; without any warranties. We are not liable for any damages 
              arising from the use of our service, including but not limited to direct, indirect, 
              incidental, or consequential damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">Advertising</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website displays advertisements to support our free service. By using our website, 
              you agree to the display of these advertisements. We are not responsible for the content 
              of third-party advertisements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be 
              effective immediately upon posting. Your continued use of the service constitutes 
              acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about these Terms, please{" "}
              <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}
