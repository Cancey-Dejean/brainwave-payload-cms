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
          defaultValue: "Title",
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
          defaultValue: "Description goes here...",
        },
        {
          name: "itemList",
          label: "Item List",
          type: "array",
          fields: [
            {
              name: "title",
              label: "Title",
              type: "text",
              defaultValue: "Title",
            },
            {
              name: "showBorder",
              label: "Show Border",
              type: "checkbox",
            },
          ],
        },
        {
          name: "bottomText",
          label: "Bottom Text",
          type: "text",
          defaultValue: "Text goes here...",
        },
      ],
    },
    {
      label: "Cards",
      type: "tabs",
      tabs: [
        {
          name: "cardOne",
          label: "Card 1",
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
              defaultValue: "Title",
            },
            {
              name: "cardOneDescription",
              label: "Description",
              type: "textarea",
              defaultValue: "Description goes here...",
            },
            {
              name: "chatMessage",
              label: "Chat Message",
              type: "textarea",
              defaultValue: "Chat Message",
            },
          ],
        },
        {
          name: "cardTwo",
          label: "Card 2",
          fields: [
            {
              name: "cardTwoTitle",
              label: "Title",
              type: "text",
              defaultValue: "Title",
            },
            {
              name: "cardTwoDescription",
              label: "Description",
              type: "textarea",
              defaultValue: "Description goes here...",
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
              defaultValue: "Chat Message",
            },
          ],
        },
      ],
    },
  ],
};
