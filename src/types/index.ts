import { ButtonProps } from "@/components/ui/Button";

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

// export type Button = LinkItem & {
//   variant: ButtonProps["variant"];
// };

// export type ButtonLink = {
//   button: Button;
// };
