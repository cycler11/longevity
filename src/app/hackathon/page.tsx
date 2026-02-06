import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { WavyBackground } from "@/components/ui/wavy-background";

import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Trophy,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ExternalLink,
} from "lucide-react";

import { events } from "@/data/events";
import { SponsorshipTiers } from "@/components/sections/sponsorship-tiers";

export const metadata: Metadata = {
  title: "Hackathon 2026 | Caltech Longevity Club",
  description:
    "A one-day, in-person hackathon at Caltech focused on building practical tools and prototypes for longevity research and healthy aging.",
};

const hackaton = events.find((e) => e.id === "hackaton-2026");

const TRACKS: { title: string; description: string }[] = [
  {
    title: "AI for Longevity Research",
    description:
      "Agents, retrieval, and modeling workflows that help researchers move faster—from literature triage to hypothesis generation.",
  },
  {
    title: "Biomarkers & Measurement",
    description:
      "Tools for collecting, cleaning, analyzing, or visualizing biomarker data (wearables, blood panels, imaging, omics).",
  },
  {
    title: "Clinical & Translational Impact",
    description:
      "Prototypes that bridge bench to bedside: patient-facing clarity, clinician decision support, trial enablement, and operations.",
  },
  {
    title: "Community & Education",
    description:
      "Experiences that make longevity science accessible—interactive explainers, curricula, workshops, or demoable learning tools.",
  },
];

const WHAT_TO_BRING: string[] = [
  "A laptop and charger",
  "A teammate (optional) — solo participants will be matched",
  "Any datasets, APIs, or research ideas you want to explore",
  "Curiosity and a bias for building",
];

const JUDGING: { title: string; items: string[] }[] = [
  {
    title: "Judging criteria",
    items: [
      "Scientific or practical relevance to longevity",
      "Technical execution and robustness",
      "Clarity of the demo and story",
      "Novelty / creativity",
      "Potential to continue post-hackathon",
    ],
  },
  {
    title: "Deliverables",
    items: [
      "A working demo (prototype is OK)",
      "A short pitch (2–3 minutes)",
      "A README with setup + what you built",
    ],
  },
];

export default function HackathonPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex-1 w-full py-10 sm:py-12 md:py-24">
        <WavyBackground className="max-w-5xl mx-auto">
          <div className="container px-3 sm:px-4 md:px-6">
            {/* Back */}
            <div className="mb-6">
              <Button asChild variant="ghost" className="rounded-full px-3">
                <Link href="/events" className="flex items-center gap-2">
                  <ChevronLeft className="w-4 h-4" />
                  Back to Events
                </Link>
              </Button>
            </div>

            {/* Header */}
            <div className="text-center mb-10">
              <Badge className="rounded-full mb-4" variant="secondary">
                Featured • In-person • Team-based
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter header-text-glow">
                {hackaton?.topic ?? "Hackathon 2026"}
              </h1>
              <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
                A fast-paced, build-first day for students, researchers, and makers to prototype real tools
                for longevity science—data, software, hardware, and everything in between.
              </p>
            </div>

            {/* Main card */}
            <Card className="glass overflow-hidden">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
                  {/* Media */}
                  <div className="space-y-4">
                    <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-black/10">
                      <div className="relative aspect-[16/9]">
                        <Image
                          src="/events/Caltech%20Longevity%20Hackathon.avif"
                          alt="Caltech Longevity Innovation Hackathon"
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{hackaton?.date ?? "TBA"}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{hackaton?.time ?? "TBA"}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="truncate">{hackaton?.location ?? "TBA"}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA + highlights */}
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 rounded-full border border-white/10 bg-black/30 p-2">
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-xl font-semibold">What to expect</h2>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Lightning intros, team formation, mentor hours, a live demo showcase, and prizes.
                          </p>
                        </div>
                      </div>

                      <Separator className="my-4" />

                      <div className="grid gap-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Teams of 2–5 (solo welcome)</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Trophy className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Prizes for top demos</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Beginner-friendly — mentorship on-site</span>
                        </div>
                      </div>

                      {hackaton?.url && (
                        <div className="mt-5">
                          <Button
                            asChild
                            className="w-full rounded-full bg-[hsl(var(--orange-bright))] hover:bg-[hsl(var(--orange-vivid))] text-white 
                                       shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:shadow-[0_0_20px_rgba(255,107,0,0.5)]
                                       border border-[hsl(var(--orange-bright))/0.2] transition-all duration-300"
                          >
                            <Link
                              href={hackaton.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              RSVP on Luma
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                          </Button>
                          <p className="mt-2 text-xs text-muted-foreground text-center">
                            Limited capacity — RSVP recommended.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <Separator className="my-8" />

                {/* Details grid */}
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-2xl font-bold">About</h3>
                    <p className="mt-3 text-muted-foreground">
                      The Caltech Longevity Innovation Hackathon is a hands-on day to build prototypes that
                      make longevity research and healthy aging more actionable. You can ship a small but
                      polished product, validate an idea, or build a “demo that proves the point”.
                    </p>
                    <p className="mt-3 text-muted-foreground">
                      No matter your background—CS, bio, engineering, design, business—you’ll find a team and
                      a problem worth solving.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">Tracks</h3>
                    <div className="mt-4 grid gap-3">
                      {TRACKS.map((t) => (
                        <div
                          key={t.title}
                          className="rounded-xl border border-white/10 bg-black/20 p-4"
                        >
                          <div className="font-semibold">{t.title}</div>
                          <div className="mt-1 text-sm text-muted-foreground">{t.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">Judging & deliverables</h3>
                    <div className="mt-4 grid gap-3">
                      {JUDGING.map((block) => (
                        <div
                          key={block.title}
                          className="rounded-xl border border-white/10 bg-black/20 p-4"
                        >
                          <div className="font-semibold">{block.title}</div>
                          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                            {block.items.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-white/30" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">What to bring</h3>
                    <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {WHAT_TO_BRING.map((item) => (
                          <li key={item} className="flex gap-2">
                            <CheckCircle2 className="w-4 h-4 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      You don’t need a perfect idea to join. Show up, meet people, and we’ll help you find a
                      project.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </WavyBackground>
      </section>

      {/* Sponsorship Tiers Section */}
      <SponsorshipTiers />
    </main>
  );
}
