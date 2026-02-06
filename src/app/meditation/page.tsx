import type { Metadata } from "next";
import Link from "next/link";
import { SafeImage } from "@/components/ui/safe-image";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { WavyBackground } from "@/components/ui/wavy-background";

import {
  Calendar,
  MapPin,
  Clock,
  Brain,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ExternalLink,
} from "lucide-react";

import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Longevity Meditation | Caltech Longevity Club",
  description:
    "Join the Caltech Longevity Club for a high impact meditation experience designed to sharpen the mind, regulate the nervous system, and support long term brain and body health.",
};

const meditationEvent = events.find((e) => e.id === "meditation-event");

const WHAT_TO_EXPECT: string[] = [
  "Guided meditation grounded in longevity and neuroplasticity research",
  "Techniques to lower chronic stress and improve autonomic balance",
  "Deep mental clarity, emotional regulation, and recovery",
  "A focused, intimate setting with other longevity minded students and builders",
];

export default function MeditationPage() {
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
                Meditation • Science-informed • In-person
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter header-text-glow">
                {meditationEvent?.topic ?? "Longevity Meditation"}
              </h1>
              <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
                A high impact meditation experience designed to sharpen the mind, regulate the nervous system, 
                and support long term brain and body health.
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
                        <SafeImage
                          src="/events/longevity-meditation.jpg"
                          alt="Longevity Meditation"
                          fill
                          className="object-cover"
                          priority
                          fallback="/events/default.png"
                        />
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{meditationEvent?.date ?? "TBA"}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{meditationEvent?.time ?? "TBA"}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="truncate">{meditationEvent?.location ?? "Pasadena, California"}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA + highlights */}
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 rounded-full border border-white/10 bg-black/30 p-2">
                          <Brain className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-xl font-semibold">What to expect</h2>
                          <p className="mt-1 text-sm text-muted-foreground">
                            A science-informed longevity practice bringing together neuroscience, stress physiology, 
                            and intentional focus to help you reset, recover, and perform at a higher level.
                          </p>
                        </div>
                      </div>

                      <Separator className="my-4" />

                      <div className="grid gap-3">
                        {WHAT_TO_EXPECT.map((item, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>

                      {meditationEvent?.url && (
                        <div className="mt-5">
                          <Button
                            asChild
                            className="w-full rounded-full bg-[hsl(var(--orange-bright))] hover:bg-[hsl(var(--orange-vivid))] text-white 
                                       shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:shadow-[0_0_20px_rgba(255,107,0,0.5)]
                                       border border-[hsl(var(--orange-bright))/0.2] transition-all duration-300"
                          >
                            <Link
                              href={meditationEvent.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              Get Tickets on Luma
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                          </Button>
                          <p className="mt-2 text-xs text-muted-foreground text-center">
                            Requires approval • Request to join
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <Separator className="my-8" />

                {/* Details */}
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-2xl font-bold">About</h3>
                    <p className="mt-3 text-muted-foreground">
                      {meditationEvent?.description || "Join the Caltech Longevity Club for a high impact meditation experience designed to sharpen the mind, regulate the nervous system, and support long term brain and body health."}
                    </p>
                    <p className="mt-3 text-muted-foreground">
                      This is not a passive wellness session. It is a science informed longevity practice bringing 
                      together neuroscience, stress physiology, and intentional focus to help you reset, recover, 
                      and perform at a higher level.
                    </p>
                    <p className="mt-3 text-muted-foreground">
                      Whether you are optimizing performance, managing academic pressure, or curious how meditation 
                      fits into the science of aging well, this session is designed to leave you calmer, clearer, 
                      and more resilient.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">Why meditate for longevity?</h3>
                    <p className="mt-3 text-muted-foreground">
                      🧠 Longevity starts in the nervous system. Come train it with us.
                    </p>
                    <p className="mt-3 text-muted-foreground">
                      Meditation is not just about relaxation—it's a powerful tool for enhancing cognitive function, 
                      reducing chronic stress, and supporting the biological processes that contribute to healthy aging. 
                      This session combines evidence-based techniques with longevity science to help you build resilience 
                      and optimize your mental and physical performance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </WavyBackground>
      </section>
    </main>
  );
}
