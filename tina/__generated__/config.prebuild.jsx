// tina/config.ts
import {defineConfig} from "tinacms";

var branch = process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
    branch,
    // These are pulled from the environment variables defined in Vercel
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
          // Visual Editing Router: Directs the editor to the correct live preview URL
          ui: {
              router: ({document}) => {
                  if (document._sys.filename === "home") {
                      return "/";
                  }
                  return `/${document._sys.filename}`;
              }
          },
        fields: [
          {
              type: "string",
              name: "title",
              label: "Page Title",
              isTitle: true,
              required: true,
              description: "Used for the browser tab title and SEO."
          },
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
                  label: "Mission / Content",
                fields: [
                  { type: "image", name: "image", label: "Image" },
                  {
                    type: "string",
                    name: "imageSide",
                    label: "Image Side",
                      options: ["left", "right"],
                      ui: {defaultValue: "left"}
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
                      // Shows the label in the sidebar list (e.g. "Dogs Saved")
                      ui: {
                          itemProps: (item) => {
                              return {label: item?.label || "New Stat"};
                          }
                      },
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
                      ui: {
                          itemProps: (item) => {
                              return {label: item?.label || "New Method"};
                          }
                      },
                    fields: [
                        {type: "string", name: "label", label: "Label (e.g. MBWay)"},
                        {type: "string", name: "value", label: "Value (e.g. 912...)"},
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
                      ui: {
                          itemProps: (item) => {
                              return {label: item?.title || "New Event"};
                          }
                      },
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
            global: true,
            // Protects the global settings from accidental deletion
            allowedActions: {
                create: false,
                delete: false
            }
        },
        fields: [
          { type: "string", name: "brandColor", label: "Brand Color (Hex)", ui: { component: "color" } },
          { type: "image", name: "logo", label: "Logo" },
          { type: "boolean", name: "showPlaceholderLogo", label: "Show Placeholder Logo", description: "If no logo is uploaded, show the default 'LC' icon?", ui: { defaultValue: true } },
          { type: "image", name: "favicon", label: "Favicon (Optional)", description: "Upload a square image (PNG/ICO/SVG) to use as the browser icon." },
          { type: "string", name: "organizationName", label: "Organization Name" },
          { type: "string", name: "slogan", label: "Footer Slogan", description: "Short text below the logo" },
          {
            type: "object",
            list: true,
            name: "navigation",
            label: "Navigation",
              ui: {
                  itemProps: (item) => {
                      return {label: item?.label || "New Link"};
                  }
              },
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
