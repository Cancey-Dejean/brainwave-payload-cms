import { Field } from "payload";

export const LabelField: Field = {
  name: "label",
  label: "Label",
  type: "text",
  required: true,
  defaultValue: "Label",
};

export const UrlField: Field = {
  name: "url",
  label: "Url:",
  type: "text",
  required: true,
  defaultValue: "#",
};

export const NewTabField: Field = {
  name: "newTab",
  label: "Open in new tab?",
  type: "checkbox",
  defaultValue: false,
};
