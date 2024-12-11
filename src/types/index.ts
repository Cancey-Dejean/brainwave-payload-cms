export type SimpleImage = {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
};

export type LinkItem = {
  label: string;
  url?: string;
  newTab?: boolean;
};

export type CheckTextRowProps = {
  title?: string;
  description?: React.ReactNode;
  showBorder?: boolean;
  className?: string;
};

export type ServiceCard = {
  image?: SimpleImage;
  title?: string;
  description?: string;
  chatMessage?: string;
};

export type Feature = {
  text: string;
};

export type PricingCardProps = {
  title: string;
  description?: string;
  price?: string | null;
  children?: React.ReactNode;
  features?: Feature[];
  plan?: "basic" | "premium" | "enterprise";
};

export type RoadmapCardProps = {
  colorful?: boolean;
  date?: string;
  status?: "done" | "in progress" | "planned";
  image?: SimpleImage;
  title?: string;
  description?: string;
};
