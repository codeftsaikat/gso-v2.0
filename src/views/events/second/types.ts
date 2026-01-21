export interface EventCategory {
  id: "ongoing" | "past" | "future";
  name: string;
  count: number;
  icon: string;
}

export interface EventData {
  id: number;
  title: string;
  shortTitle: string;
  date: string;
  location: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  status: "ongoing" | "upcoming" | "completed";
  category: string;
  participants: string;
  isFeatured?: boolean;
  highlights?: string[];
  galleryLink?: string;
  videoLink?: string;
  registrationOpen?: boolean;
}

export interface EventsData {
  ongoing: EventData[];
  past: EventData[];
  future: EventData[];
}

export interface EventStat {
  label: string;
  value: number;
}
