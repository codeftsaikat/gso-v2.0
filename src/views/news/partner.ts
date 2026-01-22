export interface Partner {
  id: number;
  name: string;
  url: string;
  logo?: string; // URL to logo image
  description?: string;
  type: "partner" | "sponsor" | "supporter";
  isFeatured?: boolean;
}
