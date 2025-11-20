"use client"

import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function OracleCertification() {
  return (
    <section
      id="oracle-certification"
      className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-background via-muted/20 to-background"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* Certificate Image */}
          <div className="w-full max-w-3xl">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-muted hover:shadow-lg transition-shadow">
              <Image
                src="/images/design-mode/Screenshot%202025-11-10%20at%2014.21.54.png"
                alt="Oracle Certified Professional: Java SE 17 Developer Certificate"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Certificate Details */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Oracle Certified Professional</h2>
            <p className="text-xl font-semibold text-accent">Java SE 17 Developer</p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 pt-4">
              <div>
                <span className="text-muted-foreground font-semibold">Credential ID:</span>
                <p className="text-foreground font-mono text-lg tracking-wide">103114613OCPJSE17</p>
              </div>
              <div>
                <span className="text-muted-foreground font-semibold">Date Earned:</span>
                <p className="text-foreground">November 07, 2025</p>
              </div>
            </div>

            <a
              href="https://www.oracle.com/certificate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors mt-4"
            >
              Verify Certificate
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
