export type SimpleImage = {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
};

export type LinkItem = {
  id?: string;
  label: string;
  url?: string;
  newTab?: boolean;
};
