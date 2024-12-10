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
