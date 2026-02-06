"use client";

import { CONTACT_EMAIL } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function Footer() {
  const [showWhatsAppDialog, setShowWhatsAppDialog] = useState(false);
  const [showSlackDialog, setShowSlackDialog] = useState(false);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowWhatsAppDialog(true);
  };

  const handleSlackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowSlackDialog(true);
  };

  const handleWhatsAppApprove = () => {
    // Replace with actual WhatsApp link
    window.open("https://chat.whatsapp.com/YOUR_GROUP_LINK", "_blank");
    setShowWhatsAppDialog(false);
  };

  const handleSlackApprove = () => {
    // Replace with actual Slack link
    window.open("https://YOUR_WORKSPACE.slack.com/join/YOUR_INVITE_LINK", "_blank");
    setShowSlackDialog(false);
  };

  return (
    <>
      <footer className="w-full py-6 bg-background/5 mt-auto mb-16 sm:mb-0">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <Link
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-muted-foreground hover:text-muted-foreground/80 transition-colors"
            >
              {CONTACT_EMAIL}
            </Link>
            <span className="text-muted-foreground hidden sm:block">•</span>
            <Link
              href="https://www.linkedin.com/company/caltech-longevity-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-muted-foreground/80 transition-colors"
            >
              LinkedIn
            </Link>
            <span className="text-muted-foreground hidden sm:block">•</span>
            <Link 
              href="https://x.com/cit_longevity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-muted-foreground/80 transition-colors"
            >
              X (Twitter)
            </Link>
            <span className="text-muted-foreground hidden sm:block">•</span>
            <Link 
              href="https://www.instagram.com/caltechlongevity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-muted-foreground/80 transition-colors"
            >
              Instagram
            </Link>
            <span className="text-muted-foreground hidden sm:block">•</span>
            <Link 
              href="#"
              onClick={handleWhatsAppClick}
              className="text-sm text-muted-foreground hover:text-muted-foreground/80 transition-colors"
            >
              WhatsApp
            </Link>
            <span className="text-muted-foreground hidden sm:block">•</span>
            <Link 
              href="#"
              onClick={handleSlackClick}
              className="text-sm text-muted-foreground hover:text-muted-foreground/80 transition-colors"
            >
              Slack
            </Link>
          </div>
        </div>
      </footer>

      {/* WhatsApp Approval Dialog */}
      <Dialog open={showWhatsAppDialog} onOpenChange={setShowWhatsAppDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Join WhatsApp Channel</DialogTitle>
            <DialogDescription>
              You will be redirected to our WhatsApp group. Please note that joining requires approval.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 justify-end mt-4">
            <Button variant="outline" onClick={() => setShowWhatsAppDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleWhatsAppApprove}>
              Continue
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Slack Approval Dialog */}
      <Dialog open={showSlackDialog} onOpenChange={setShowSlackDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Join Slack Workspace</DialogTitle>
            <DialogDescription>
              You will be redirected to our Slack workspace. Please note that joining requires approval.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 justify-end mt-4">
            <Button variant="outline" onClick={() => setShowSlackDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleSlackApprove}>
              Continue
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
