import { PRICING_PLANS } from "@/constants";
import { buttonField } from "@/lib/fields/buttonField";
import { LabelField, NewTabField, UrlField } from "@/lib/fields/linkFields";
import { Block } from "payload";

export const Pricing: Block = {
  slug: "pricing",
  fields: [
    {
      name: "topImage",
      label: "Top Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "bracketText",
      label: "Bracket Text",
      type: "text",
      defaultValue: "Bracket Text",
    },
    {
      name: "headline",
      label: "Headline",
      type: "text",
      defaultValue: "Headline",
    },
    {
      name: "plans",
      label: "Plans",
      type: "array",
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: "plan",
          label: "Plan",
          type: "select",
          options: ["basic", "premium", "enterprise"],
          defaultValue: "basic",
        },
        {
          name: "title",
          label: "Title",
          type: "text",
          defaultValue: "Title",
        },
        {
          name: "description",
          label: "Description",
          type: "text",
          defaultValue: "Description goes here...",
        },
        {
          name: "price",
          label: "Price",
          type: "text",
          defaultValue: "0",
        },
        buttonField,
        {
          name: "features",
          label: "Features",
          type: "array",
          minRows: 3,
          fields: [
            {
              name: "title",
              label: "Label",
              type: "text",
              defaultValue: "Feature",
            },
          ],
        },
      ],
    },
    // {
    //   name: "linkText",
    //   label: "Link Text",
    //   type: "group",
    //   fields: [LabelField, UrlField, NewTabField],
    // },
    {
      name: "linkText",
      label: "Button",
      type: "group",
      fields: [LabelField, UrlField, NewTabField],
    },
  ],
};
