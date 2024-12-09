import { Block } from "payload";

export const Features: Block = {
  slug: "features",
  fields: [
    {
      name: "headline",
      label: "Headline",
      type: "text",
      defaultValue: "Section Title",
    },
    {
      name: "cards",
      label: "Cards",
      type: "array",
      minRows: 3,
      maxRows: 6,
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
          defaultValue: "Title",
        },
        {
          name: "description",
          label: "Description",
          type: "richText",
        },
        {
          name: "icon",
          label: "Icon",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "btnText",
          label: "Button Text",
          type: "text",
          defaultValue: "Learn More",
        },
        {
          name: "btnUrl",
          label: "Button URL",
          type: "text",
          defaultValue: "/",
        },
        {
          name: "variant",
          label: "Variant",
          type: "select",
          options: ["v1", "v2", "v3", "v4", "v5", "v6"],
          defaultValue: "v1",
        },
        {
          name: "backgroundImage",
          label: "Background Image",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "gradientLight",
          label: "Gradient Light",
          type: "checkbox",
          defaultValue: true,
        },
      ],
    },
  ],
};
