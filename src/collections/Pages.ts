import { Collaboration } from "@/blocks/Collaboration/schema";
import { Features } from "@/blocks/Features/schema";
import { Hero } from "@/blocks/Hero/schema";
import { Pricing } from "@/blocks/Pricing/schema";
import { Roadmap } from "@/blocks/Roadmap/schema";
import { Services } from "@/blocks/Services/schema";
import { VERSION_INTERVAL } from "@/constants";
import { slugGeneratorField } from "@/lib/fields/slugGeneratorField";
import { getServerSideURL } from "@/utils/getURL";

import { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    livePreview:
      process.env.NODE_ENV === "development"
        ? {
            url: ({ data }) =>
              `${getServerSideURL()}${data?.slug ? `/${data.slug}` : "/"}`,
          }
        : undefined,
  },
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
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      unique: true,
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    slugGeneratorField,
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      blocks: [Hero, Features, Collaboration, Services, Pricing, Roadmap],
    },
  ],
};
