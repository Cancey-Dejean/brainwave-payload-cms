import { VERSION_INTERVAL } from "@/constants";
import { LabelField, NewTabField, UrlField } from "@/lib/fields/linkFields";
import { GlobalConfig } from "payload";

export const Header: GlobalConfig = {
  slug: "header",
  access: {
    read: ({ req }) => {
      // If there is a user logged in,
      // let them retrieve all documents
      if (req.user) return true;

      // If there is no user,
      // restrict the documents that are returned
      // to only those where `_status` is equal to `published`
      // or where `_status` does not exist
      return {
        or: [
          {
            _status: {
              equals: "published",
            },
          },
          {
            _status: {
              exists: false,
            },
          },
        ],
      };
    },
  },
  versions: VERSION_INTERVAL,
  fields: [
    {
      name: "logo",
      label: "Logo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "primaryMenu",
      label: "Primary Menu",
      type: "array",
      maxRows: 5,
      fields: [LabelField, UrlField, NewTabField],
    },
    {
      name: "secondaryMenu",
      label: "Secondary Menu",
      type: "array",
      maxRows: 1,
      fields: [
        {
          name: "menu",
          label: "Menu",
          type: "array",
          fields: [LabelField, UrlField, NewTabField],
          maxRows: 2,
        },
        {
          name: "ctaButton",
          label: "CTA Button",
          type: "group",
          fields: [LabelField, UrlField, NewTabField],
        },
      ],
    },
  ],
};
