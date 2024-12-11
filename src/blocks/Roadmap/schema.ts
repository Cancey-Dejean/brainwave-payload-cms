import { Block } from "payload";
import { buttonField } from "@/lib/fields/buttonField";

export const Roadmap: Block = {
  slug: "roadmap",
  fields: [
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
      defaultValue: "Section Title",
    },
    {
      name: "cards",
      label: "Cards",
      type: "array",
      fields: [
        {
          name: "colorful",
          label: "Colorful",
          type: "checkbox",
          defaultValue: false,
        },
        {
          name: "date",
          label: "Date",
          type: "text",
          defaultValue: `Aug ${new Date().getFullYear()}`,
          admin: {
            width: "1/2",
          },
        },
        {
          name: "status",
          label: "Status",
          type: "select",
          admin: {
            width: "1/2",
          },
          options: ["done", "in-progress", "planned"],
          defaultValue: "planned",
        },
        {
          name: "image",
          label: "Image",
          type: "upload",
          relationTo: "media",
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
          type: "richText",
        },
      ],
    },
    buttonField,
  ],
};
