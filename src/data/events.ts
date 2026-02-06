import type { Event } from "@/types/events";

export const events: Event[] = [
  {
    id: "meditation-event",
    topic: "Longevity Meditation",
    date: null, // TBA
    time: "TBA",
    location: "Pasadena, California",
    featured: false,
    speakers: [{
      name: "Caltech Longevity Club",
      title: "Organizers",
      social: { twitter: "https://x.com/caltechlongevity" },
      photo: "/events/longevity-meditation.jpg"
    }],
    url: "https://luma.com/iz5nfed1",
    description: "Join the Caltech Longevity Club for a high impact meditation experience designed to sharpen the mind, regulate the nervous system, and support long term brain and body health. This is not a passive wellness session. It is a science informed longevity practice bringing together neuroscience, stress physiology, and intentional focus to help you reset, recover, and perform at a higher level."
  },

  {
    id: "hackaton-2026",
    topic: "Caltech Longevity Innovation Hackathon",
    date: "2026-05-23",
    time: "9:00 AM – 8:00 PM",
    location: "Dabney Hall, Pasadena, CA",
    featured: true,
    speakers: [{
      name: "Caltech Longevity Club",
      title: "Organizers",
      social: { twitter: "https://x.com/caltechlongevity" },
      photo: "/events/Caltech Longevity Hackathon.avif"
    }],
    url: "https://luma.com/uqeiu09a"
  },

  {
    id: "jordan-schlain",
    topic: "Remember the Future' Strategies for a Meaningful Life in Medicine",
    date: "2026-01-28",
    time: "5:00 PM – 6:30 PM",
    location: "Chen 100",
    featured: false,
    speakers: [{
      name: "Dr. Jordan Shlain",
      title: "Physician & Health Tech Entrepreneur",
      social: {
        linkedin: "https://www.linkedin.com/in/drjordanshlain",
        luma: "https://luma.com/mhzcyfkc",   
      },
      photo: "/events/jordan-shlain.jpg"
    }],
    url: "https://luma.com/mhzcyfkc"          
  },

  {
    id: "longevity-science-bet",
    topic: "Why Longevity Science Is a Good Bet",
    date: "2025-05-30",
    time: "4:30 PM",
    location: "Dabney Hall",
    speakers: [{
      name: "Michael Ringel",
      title: "JD PhD",
      social: {},
      photo: "/events/Caltech Longevity Club Meeting.avif"
    }],
    url: "https://lu.ma/b8puesdj"
  },

  {
    id: "event-2",
    speakers: [{
      name: "Matt Scholz",
      title: "CEO of Oisin Biotechnologies",
      social: { linkedin: "https://www.linkedin.com/in/matthewscholz/" },
      photo: "/events/Matt Scholz.jpg",
    }],
    topic: "The frontiers of genetic medicine - from biohacking to the clinic",
    date: "2025-05-08",
    time: "5:00 PM",
    location: "Dabney Hall Lounge",
    url: "https://lu.ma/cicl1io3"
  },

  {
    id: "functional-training",
    speakers: [{
      name: "Richie Diaz",
      title: "Professional Athlete & Trainer",
      photo: "/events/richard diaz.jpg",
      social: {}
    }],
    topic: "Functional Training Taster – How To Train like a World Athlete",
    date: "2025-04-17",
    time: "4:00 PM",
    location: "Beckman Lawn",
    url: "https://lu.ma/1lubu8v0"
  },

  {
    id: "club-fair",
    topic: "Caltech Club Fair",
    date: "2025-04-13",
    time: "TBA",
    location: "Moore's Walk",
    speakers: [],
    photo: "/events/career fair.jpg"
  },

  {
    id: "event-7",
    topic: "Live Case Study: Longevity Meets Performance",
    date: "2025-04-03",
    time: "4:30 PM – 5:30 PM",
    location: "Dabney Hall Lounge",
    speakers: [],
  },

  {
    id: "case-study-1",
    speakers: [],
    topic: "Case Study",
    date: "2025-03-13",
    time: "4:30 PM",
    location: "Dabney Hall Lounge",
    isPast: true
  },

  {
    id: "event-1",
    speakers: [{
      name: "Ryan Cabeen",
      title: "CTO Blueprint Bryan Johnson",
      social: { linkedin: "https://www.linkedin.com/in/cabeen/" },
      photo: "/events/Ryan Cabeen.png",
    }],
    topic: "Grand Opening Event: AI, Biotech & Longevity",
    date: "2025-02-27",
    time: "4:30 PM",
    location: "Dabney Hall Lounge",
    url: "https://lu.ma/ebvvob6v",
    isPast: true
  }
];

export function getEvents() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  return {
    featured: events.filter(event => event.featured),
    upcoming: events
      .filter(event => {
        if (event.isPast) return false;
        // Include events without date (TBA) or events with future dates
        if (!event.date) return true;
        return new Date(event.date) >= now;
      })
      .sort((a, b) => {
        // Events without date go to the end
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }),
    past: events
      .filter(event => event.date && (event.isPast || new Date(event.date) < now))
      .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())
  };
}
