import { Field } from "payload";
import { LabelField, NewTabField, UrlField } from "./linkFields";

export const buttonField: Field = {
  name: "button",
  label: "Button",
  type: "group",
  fields: [LabelField, UrlField, NewTabField],
};
