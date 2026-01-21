export interface MediaCoverage {
  id: number;
  title: string;
  channel: string;
  channelLogo?: string;
  url: string;
  type: "video" | "article" | "social";
  thumbnail?: string;
  date?: string;
  views?: string;
  description?: string;
}
