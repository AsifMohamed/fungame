import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - Party Games",
  description: "Privacy Policy for Party Games - Truth or Dare and Love Score Calculator",
}

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Party Games. We respect your privacy and are committed to protecting any information 
              you share while using our website. This Privacy Policy explains how we collect, use, and safeguard 
              your information when you visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Our website is designed to be simple and fun. We collect minimal information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Names entered in the Love Score calculator (stored only in your browser, not on our servers)</li>
              <li>Basic analytics data (page views, device type) to improve our service</li>
              <li>Cookies for essential functionality and advertising purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>To provide and maintain our games and services</li>
              <li>To improve user experience</li>
              <li>To display relevant advertisements</li>
              <li>To analyze usage patterns and optimize our website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">Cookies and Advertising</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We use cookies to enhance your experience and may display advertisements through third-party 
              advertising networks, including Google AdSense. These services may use cookies to show you 
              personalized ads based on your browsing history.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You can manage your cookie preferences through your browser settings. For more information 
              about how Google uses data, visit{" "}
              <a 
                href="https://policies.google.com/technologies/partner-sites" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google&apos;s Privacy Policy
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate security measures to protect your information. However, no method of 
              transmission over the internet is 100% secure. We strive to use commercially acceptable means 
              to protect your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">Children&apos;s Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website is intended for users of all ages. We do not knowingly collect personal information 
              from children under 13. The games are designed to be family-friendly and safe for all players.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please{" "}
              <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}
