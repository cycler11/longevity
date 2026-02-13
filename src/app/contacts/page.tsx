"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MessageCircle, ExternalLink, Mail } from "lucide-react";
import Link from "next/link";
import { WavyBackground } from "@/components/ui/wavy-background";
import { COMMUNITY_CHATS, COMING_SOON_CHATS, type CommunityChat } from "@/data/community-chats";
import { CONTACT_EMAIL } from "@/lib/constants";

function ChatCard({ chat, index }: { chat: CommunityChat; index: number }) {
  const isSlack = chat.platform === "slack";
  const hasLink = !!chat.url && !chat.comingSoon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <Card className="glass overflow-hidden transition-all hover:border-white/20 hover:shadow-lg">
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                isSlack ? "bg-[#4A154B]" : "bg-[#25D366]"}
              `}
            >
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-center gap-2">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {isSlack ? "Slack" : "WhatsApp"}
                </span>
                {chat.comingSoon && (
                  <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                    Coming soon
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-foreground">{chat.title}</h3>
              {chat.description && (
                <p className="mt-1 text-sm text-muted-foreground">{chat.description}</p>
              )}
              {hasLink && (
                <Link
                  href={chat.url!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Join chat
                  <ExternalLink className="h-4 w-4" />
                </Link>
              )}
              {isSlack && !chat.url && (
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Slack%20invite%20request`}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  Request invite
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ContactsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex-1 w-full py-12 md:py-24">
        <WavyBackground className="max-w-4xl mx-auto">
          <div className="container px-0 md:px-6">
            <motion.div
              className="flex flex-col items-center gap-4 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl header-text-glow">
                Communities & Chats
              </h1>
              <p className="max-w-[700px] text-muted-foreground">
                Join our Slack and WhatsApp groups to connect with members and partners.
              </p>
            </motion.div>

            <div className="space-y-4">
              {COMMUNITY_CHATS.map((chat, index) => (
                <ChatCard key={chat.id} chat={chat} index={index} />
              ))}
            </div>

            {COMING_SOON_CHATS.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6 text-center text-muted-foreground">
                  Coming soon
                </h2>
                <div className="space-y-4">
                  {COMING_SOON_CHATS.map((chat, index) => (
                    <ChatCard key={chat.id} chat={chat} index={COMMUNITY_CHATS.length + index} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </WavyBackground>
      </section>
    </main>
  );
}
