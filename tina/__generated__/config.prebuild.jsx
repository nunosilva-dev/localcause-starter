// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "md",
        fields: [
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Sections",
            templates: [
              {
                name: "hero",
                label: "Hero",
                fields: [
                  { type: "string", name: "headline", label: "Headline" },
                  { type: "string", name: "subtext", label: "Subtext", ui: { component: "textarea" } },
                  { type: "image", name: "backgroundImage", label: "Background Image" },
                  {
                    type: "object",
                    name: "cta",
                    label: "CTA Button",
                    fields: [
                      { type: "string", name: "label", label: "Label" },
                      { type: "string", name: "url", label: "URL" }
                    ]
                  }
                ]
              },
              {
                name: "mission",
                label: "Mission",
                fields: [
                  { type: "image", name: "image", label: "Image" },
                  {
                    type: "string",
                    name: "imageSide",
                    label: "Image Side",
                    options: ["left", "right"]
                  },
                  { type: "rich-text", name: "content", label: "Content" }
                ]
              },
              {
                name: "impactGrid",
                label: "Impact Grid",
                fields: [
                  {
                    type: "object",
                    list: true,
                    name: "stats",
                    label: "Stats",
                    fields: [
                      { type: "string", name: "value", label: "Value (e.g. 50)" },
                      { type: "string", name: "label", label: "Label (e.g. Dogs Saved)" }
                    ]
                  }
                ]
              },
              {
                name: "donation",
                label: "Donation Info",
                fields: [
                  {
                    type: "boolean",
                    name: "visible",
                    label: "Show Section",
                    description: "Toggle to show/hide this section"
                  },
                  { type: "string", name: "headline", label: "Headline" },
                  { type: "rich-text", name: "description", label: "Description" },
                  {
                    type: "object",
                    list: true,
                    name: "methods",
                    label: "Donation Methods",
                    items: [
                      {
                        type: "string",
                        name: "label",
                        label: "Label (e.g. MBWay)"
                      },
                      {
                        type: "string",
                        name: "value",
                        label: "Value (e.g. 912...)"
                      }
                    ],
                    fields: [
                      { type: "string", name: "label", label: "Label" },
                      { type: "string", name: "value", label: "Value" },
                      { type: "string", name: "helperText", label: "Helper Text (optional)" }
                    ]
                  }
                ]
              },
              {
                name: "events",
                label: "Events List",
                fields: [
                  {
                    type: "object",
                    list: true,
                    name: "items",
                    label: "Events",
                    fields: [
                      { type: "string", name: "title", label: "Event Title" },
                      { type: "datetime", name: "date", label: "Date" },
                      { type: "string", name: "location", label: "Location" }
                    ]
                  }
                ]
              },
              {
                name: "contact",
                label: "Contact Info",
                fields: [
                  { type: "string", name: "address", label: "Address" },
                  { type: "string", name: "phone", label: "Phone" },
                  { type: "string", name: "email", label: "Email" },
                  { type: "string", name: "mapEmbed", label: "Google Maps Embed URL" }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "global",
        label: "Global Settings",
        path: "content/global",
        format: "json",
        ui: {
          global: true
        },
        fields: [
          {
            type: "string",
            name: "brandColor",
            label: "Brand Color (Hex)",
            ui: { component: "color" }
          },
          { type: "image", name: "logo", label: "Logo" },
          { type: "string", name: "organizationName", label: "Organization Name" },
          { type: "string", name: "slogan", label: "Footer Slogan", description: "Short text below the logo" },
          {
            type: "object",
            list: true,
            name: "navigation",
            label: "Navigation",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "url", label: "URL" }
            ]
          },
          {
            type: "object",
            name: "social",
            label: "Social Links",
            fields: [
              { type: "string", name: "facebook", label: "Facebook URL" },
              { type: "string", name: "instagram", label: "Instagram URL" }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
