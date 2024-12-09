import { Block } from "payload";
import { buttonField } from "@/lib/fields/buttonField";

export const Collaboration: Block = {
  slug: "collaboration",
  fields: [
    {
      name: "headline",
      label: "Headline",
      type: "text",
      defaultValue: "Section Title",
    },
    {
      name: "perks",
      label: "Perks",
      type: "array",
      fields: [
        {
          name: "text",
          label: "Text",
          type: "text",
        },
        {
          name: "description",
          label: "Description",
          type: "richText",
        },
      ],
      maxRows: 3,
    },
    buttonField,
    {
      name: "topDescription",
      label: "Top Description",
      type: "richText",
      required: true,
    },
    {
      name: "circleCenterImage",
      label: "Circle Center Icon Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "circleImages",
      label: "Circle Images",
      type: "array",
      maxRows: 8,
      fields: [
        {
          name: "icon",
          label: "Icon",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
};
