import { Block } from "payload";
import { buttonField } from "@/lib/fields/buttonField";
import { LabelField, NewTabField, UrlField } from "@/lib/fields/linkFields";

export const Hero: Block = {
  slug: "hero",
  fields: [
    {
      name: "headline",
      label: "Headline",
      type: "text",
      defaultValue: "Section Title",
    },
    {
      name: "headlineHighlight",
      label: "Headline Highlight",
      type: "text",
    },
    {
      name: "description",
      label: "Text",
      type: "textarea",
      defaultValue:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, dolore.",
    },
    {
      name: "button",
      label: "Button",
      type: "group",
      fields: [LabelField, UrlField, NewTabField],
    },
    {
      name: "image",
      label: "Main Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "imageText",
      label: "Image Text",
      type: "text",
      defaultValue: "Text goes here...",
    },
    {
      name: "socialProof",
      label: "Social Proof",
      type: "group",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
          defaultValue: "Title",
        },
        {
          name: "logos",
          label: "Logos",
          type: "array",
          fields: [
            {
              name: "logo",
              label: "Logo",
              type: "upload",
              relationTo: "media",
            },
          ],
          minRows: 3,
          maxRows: 5,
        },
      ],
    },
  ],
};
