import { Block } from "payload";

export const Services: Block = {
  slug: "services",
  fields: [
    {
      name: "headline",
      label: "Headline",
      type: "text",
      defaultValue: "Section Title",
    },
    {
      name: "description",
      label: "Description",
      type: "richText",
    },
    {
      name: "featuredCard",
      label: "Featured Card",
      type: "group",
      fields: [
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
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
        },
        {
          name: "itemList",
          label: "Item List",
          type: "array",
          fields: [
            {
              name: "item",
              label: "Item",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      label: "Cards",
      type: "tabs",
      tabs: [
        {
          label: "Service Card 1",
          description: "This will appear within the tab above the fields.",
          fields: [
            {
              name: "cardOneImage",
              label: "Image",
              type: "upload",
              relationTo: "media",
            },
            {
              name: "cardOneTitle",
              label: "Title",
              type: "text",
            },
            {
              name: "cardOneDescription",
              label: "Description",
              type: "textarea",
            },
            {
              name: "chatMessage",
              label: "Chat Message",
              type: "textarea",
            },
          ],
        },

        {
          name: "tabTwo",
          label: "Service Card 2",
          interfaceName: "TabTwo",
          fields: [
            {
              name: "cardTwoTitle",
              label: "Title",
              type: "text",
            },
            {
              name: "cardTwoDescription",
              label: "Description",
              type: "textarea",
            },
            {
              name: "cardTwoImage",
              label: "Image",
              type: "upload",
              relationTo: "media",
            },
            {
              name: "chatMessage",
              label: "Chat Message",
              type: "textarea",
            },
          ],
        },
      ],
    },
  ],
};
