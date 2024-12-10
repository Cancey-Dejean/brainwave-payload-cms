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
  id?: string;
  text?: string;
  description?: React.ReactNode;
  showBorder?: boolean;
};
