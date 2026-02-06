"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { SponsorFormDialog } from "@/components/forms/sponsor-form-dialog";

interface Tier {
  name: string;
  price: string;
  perks: string[];
}

const tiers: Tier[] = [
  {
    name: "Supporter",
    price: "$1K",
    perks: [
      "Logo on website & event materials",
      "Social media shoutout",
      "Distribute swag / product samples",
      "Bring mentors / judges",
    ],
  },
  {
    name: "Partner",
    price: "$2.5K",
    perks: [
      "Logo on website & event materials",
      "Social media shoutout",
      "Distribute swag / product samples",
      "Bring mentors / judges",
      "Featured in opening / closing remarks",
      "Sponsored workshop",
    ],
  },
  {
    name: "Innovator",
    price: "$5K",
    perks: [
      "Logo on website & event materials",
      "Social media shoutout",
      "Distribute swag / product samples",
      "Bring mentors / judges",
      "Featured in opening / closing remarks",
      "Sponsored workshop",
      "Dedicated booth space",
      "Featured speaker slot",
      "Access to participant resumes",
      "Sponsored wellness / recovery zone",
    ],
  },
  {
    name: "Visionary",
    price: "$10K",
    perks: [
      "Logo on website & event materials",
      "Social media shoutout",
      "Distribute swag / product samples",
      "Bring mentors / judges",
      "Featured in opening / closing remarks",
      "Sponsored workshop",
      "Premium booth (larger space)",
      "Featured speaker slot",
      "Access to participant resumes",
      "Sponsored wellness / recovery zone",
      "Private dinner with hackathon participants",
      "Select hackathon track aligned to company needs",
      "Student teams build solutions for sponsor's company",
      "Headline sponsor",
    ],
  },
];

export function SponsorshipTiers() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold header-text-glow mb-4">
            Sponsorship Tiers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the sponsorship level that best fits your company's goals and budget
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass h-full flex flex-col">
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="text-3xl font-bold text-primary mb-4">{tier.price}</div>
                  </div>

                  <ul className="space-y-3 flex-1 mb-6">
                    {tier.perks.map((perk, perkIndex) => (
                      <li key={perkIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{perk}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <SponsorFormDialog />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground mb-4">
            Interested in a custom sponsorship package? Contact us to discuss your needs.
          </p>
          <SponsorFormDialog />
        </motion.div>
      </div>
    </section>
  );
}
