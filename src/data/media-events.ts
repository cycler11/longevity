export type MediaEvent = {
  id: string;
  title: string;
  year: number;
  slug: string;
  images: { src: string; alt: string }[];
  link?: string; // опционально: если есть страница/пост/ютуб
};

// Temporary: Using existing IMG files as placeholders until real images are added
// TODO: Replace with actual images in /public/media/{event-slug}/ folders
const IMG_FILES = [
  '/events/IMG_3149-Recovered.png',
  '/events/IMG_3164.png',
  '/events/IMG_6489.png',
  '/events/IMG_6492.png',
  '/events/IMG_6497.png',
  '/events/IMG_6499.png',
  '/events/IMG_6516.png',
  '/events/IMG_8435.png',
];

export const mediaEvents: MediaEvent[] = [
  {
    id: "jordan-shlain-2026",
    title: "2026 Jordan Shlain",
    year: 2026,
    slug: "jordan-shlain-2026",
    images: [
      { src: "/media/jordan-shlain-2026/1.jpg", alt: "Jordan Shlain Event 1" },
      { src: "/media/jordan-shlain-2026/2.jpg", alt: "Jordan Shlain Event 2" },
      { src: "/media/jordan-shlain-2026/3.jpg", alt: "Jordan Shlain Event 3" },
      { src: "/media/jordan-shlain-2026/4.jpg", alt: "Jordan Shlain Event 4" },
    ],
  },
  {
    id: "michael-ringel-2025",
    title: "2025 Michael Ringel",
    year: 2025,
    slug: "michael-ringel-2025",
    images: [
      { src: "/media/michael-ringel-2025/1.jpg", alt: "Michael Ringel Event 1" },
      { src: "/media/michael-ringel-2025/2.jpg", alt: "Michael Ringel Event 2" },
      { src: "/media/michael-ringel-2025/3.jpg", alt: "Michael Ringel Event 3" },
      { src: "/media/michael-ringel-2025/4.jpg", alt: "Michael Ringel Event 4" },
      { src: "/media/michael-ringel-2025/5.jpg", alt: "Michael Ringel Event 5" },
    ],
  },
  {
    id: "hackathon-2025",
    title: "2025 Hackathon",
    year: 2025,
    slug: "hackathon-2025",
    images: [
      { src: "/media/hackathon-2025/1.jpg", alt: "Hackathon 2025 Event 1" },
      { src: "/media/hackathon-2025/2.jpg", alt: "Hackathon 2025 Event 2" },
      { src: "/media/hackathon-2025/3.jpg", alt: "Hackathon 2025 Event 3" },
      { src: "/media/hackathon-2025/4.jpg", alt: "Hackathon 2025 Event 4" },
      { src: "/media/hackathon-2025/5.jpg", alt: "Hackathon 2025 Event 5" },
      { src: "/media/hackathon-2025/6.jpg", alt: "Hackathon 2025 Event 6" },
    ],
  },
  {
    id: "matthew-scholz-2025",
    title: "2025 Matthew Scholz",
    year: 2025,
    slug: "matthew-scholz-2025",
    images: [
      { src: "/media/matthew-scholz-2025/1.jpg", alt: "Matthew Scholz Event 1" },
      { src: "/media/matthew-scholz-2025/2.jpg", alt: "Matthew Scholz Event 2" },
      { src: "/media/matthew-scholz-2025/3.jpg", alt: "Matthew Scholz Event 3" },
    ],
  },
  {
    id: "shang-lin-chen-2025",
    title: "2025 Shang-Lin Chen",
    year: 2025,
    slug: "shang-lin-chen-2025",
    images: [
      { src: "/media/shang-lin-chen-2025/1.jpg", alt: "Shang-Lin Chen Event 1" },
      { src: "/media/shang-lin-chen-2025/2.jpg", alt: "Shang-Lin Chen Event 2" },
      { src: "/media/shang-lin-chen-2025/3.jpg", alt: "Shang-Lin Chen Event 3" },
      { src: "/media/shang-lin-chen-2025/4.jpg", alt: "Shang-Lin Chen Event 4" },
    ],
  },
  {
    id: "richard-diaz-2025",
    title: "2025 Richard Diaz",
    year: 2025,
    slug: "richard-diaz-2025",
    images: [
      { src: "/media/richard-diaz-2025/1.jpg", alt: "Richard Diaz Event 1" },
      { src: "/media/richard-diaz-2025/2.jpg", alt: "Richard Diaz Event 2" },
      { src: "/media/richard-diaz-2025/3.jpg", alt: "Richard Diaz Event 3" },
      { src: "/media/richard-diaz-2025/4.jpg", alt: "Richard Diaz Event 4" },
    ],
  },
  {
    id: "ryan-cabeen-2025",
    title: "2025 Ryan Cabeen",
    year: 2025,
    slug: "ryan-cabeen-2025",
    images: [
      { src: "/media/ryan-cabeen-2025/1.jpg", alt: "Ryan Cabeen Event 1" },
      { src: "/media/ryan-cabeen-2025/2.jpg", alt: "Ryan Cabeen Event 2" },
      { src: "/media/ryan-cabeen-2025/3.jpg", alt: "Ryan Cabeen Event 3" },
      { src: "/media/ryan-cabeen-2025/4.jpg", alt: "Ryan Cabeen Event 4" },
      { src: "/media/ryan-cabeen-2025/5.jpg", alt: "Ryan Cabeen Event 5" },
    ],
  },
].map((event) => ({
  ...event,
  // Use temporary IMG files as placeholders, cycling through them
  images: event.images.map((img, idx) => ({
    ...img,
    src: IMG_FILES[idx % IMG_FILES.length], // Cycle through available IMG files
  })),
}));
