export type ChatPlatform = "slack" | "whatsapp";

export type CommunityChat = {
  id: string;
  platform: ChatPlatform;
  title: string;
  description?: string;
  url?: string;
  comingSoon?: boolean;
};

export const COMMUNITY_CHATS: CommunityChat[] = [
  {
    id: "slack-members",
    platform: "slack",
    title: "Longevity Club Members",
    description: "Main Slack workspace for club members. Contact us to get an invite.",
    // url: add Slack invite link when available
  },
  {
    id: "wa-organizers-general",
    platform: "whatsapp",
    title: "Organizers General Chat",
    description: "Longevity Club Organizers",
    url: "https://chat.whatsapp.com/D5c4gK6ssTcFOg3qpsLEZX",
  },
  {
    id: "wa-organizers-sponsorship",
    platform: "whatsapp",
    title: "Organizers Sponsorship Chat",
    description: "Longevity Club Organizers – sponsorship",
    url: "https://chat.whatsapp.com/GGBfZB3hloQFDqob70VMWl",
  },
  {
    id: "wa-agehouse",
    platform: "whatsapp",
    title: "Age.house (Sweden) × Longevity Club",
    description: "Age.house x Longevity Club",
    url: "https://chat.whatsapp.com/IsCpL3Om4gVAvmkjxodC9q",
  },
  {
    id: "wa-openbio",
    platform: "whatsapp",
    title: "OpenBio (Harvard) × Longevity Club",
    description: "OpenBio x Longevity Club",
    url: "https://chat.whatsapp.com/KYKF2e438kCGmXL7GM7POn",
  },
  {
    id: "wa-media-photos",
    platform: "whatsapp",
    title: "Media and Photos",
    description: "Share and discuss club media",
    url: "https://chat.whatsapp.com/CGHuzBjOMVbDz4GjKm2Pos",
  },
];

export const COMING_SOON_CHATS: CommunityChat[] = [
  {
    id: "wa-nextgen",
    platform: "whatsapp",
    title: "NextGenLongevity (UCSD) × Longevity Club",
    comingSoon: true,
  },
  {
    id: "wa-harvard-aging",
    platform: "whatsapp",
    title: "Harvard Aging Initiative × Longevity Club",
    comingSoon: true,
  },
  {
    id: "wa-oxford",
    platform: "whatsapp",
    title: "Oxford Longevity Club × Longevity Club",
    comingSoon: true,
  },
];
