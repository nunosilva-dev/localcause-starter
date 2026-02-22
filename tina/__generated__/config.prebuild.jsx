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
          router: ({ document }) => {
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
                  label: "Cover",
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
                  label: "Content",
                fields: [
                  { type: "image", name: "image", label: "Image" },
                  {
                    type: "string",
                    name: "imageSide",
                    label: "Image Side",
                    options: ["left", "right"],
                    ui: { defaultValue: "left" }
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
                        return { label: item?.label || "New Stat" };
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
                        return { label: item?.label || "New Method" };
                      }
                    },
                    fields: [
                      { type: "string", name: "label", label: "Label (e.g. MBWay)" },
                      { type: "string", name: "value", label: "Value (e.g. 912...)" },
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
                        type: "string",
                        name: "label",
                        label: "Section Title",
                        description: "Heading displayed above the events list (e.g. 'Upcoming Events')"
                    },
                  {
                    type: "object",
                    list: true,
                    name: "items",
                    label: "Events",
                    ui: {
                      itemProps: (item) => {
                        return { label: item?.title || "New Event" };
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
                    {
                        type: "string",
                        name: "label",
                        label: "Section Title",
                        description: "Heading displayed above the contact info (e.g. 'Contact Us')"
                    },
                  { type: "string", name: "address", label: "Address" },
                    {type: "string", name: "phone", label: "Phone Numbers", list: true},
                    {type: "string", name: "email", label: "Emails", list: true},
                  { type: "string", name: "mapEmbed", label: "Google Maps Embed URL" }
                ]
              },
                {
                    name: "image",
                    label: "Image",
                    fields: [
                        {type: "image", name: "src", label: "Image", required: true},
                        {
                            type: "string",
                            name: "alt",
                            label: "Alt Text",
                            description: "Describes the image for accessibility"
                        },
                        {
                            type: "string",
                            name: "fit",
                            label: "Fit Mode",
                            description: "How the image fills its container",
                            options: [
                                {value: "cover", label: "Cover (fills area, may crop)"},
                                {value: "contain", label: "Contain (shows full image)"},
                                {value: "fill", label: "Stretch (fills area exactly)"}
                            ],
                            ui: {defaultValue: "cover"}
                        },
                        {
                            type: "string",
                            name: "position",
                            label: "Position",
                            description: "Which part of the image to focus on",
                            options: [
                                {value: "center", label: "Center"},
                                {value: "top", label: "Top"},
                                {value: "bottom", label: "Bottom"},
                                {value: "left", label: "Left"},
                                {value: "right", label: "Right"},
                                {value: "top left", label: "Top Left"},
                                {value: "top right", label: "Top Right"},
                                {value: "bottom left", label: "Bottom Left"},
                                {value: "bottom right", label: "Bottom Right"}
                            ],
                            ui: {defaultValue: "center"}
                        },
                        {
                            type: "number",
                            name: "maxHeight",
                            label: "Max Height (px)",
                            description: "Optional max height in pixels. Leave empty for auto."
                        }
                    ]
                },
                {
                    name: "faq",
                    label: "FAQ",
                    fields: [
                        {
                            type: "string",
                            name: "label",
                            label: "Section Title",
                            description: "Heading displayed above the FAQ (e.g. 'Frequently Asked Questions')"
                        },
                        {
                            type: "object",
                            list: true,
                            name: "items",
                            label: "Questions",
                            ui: {
                                itemProps: (item) => {
                                    return {label: item?.question || "New Question"};
                                }
                            },
                            fields: [
                                {type: "string", name: "question", label: "Question"},
                                {type: "string", name: "answer", label: "Answer", ui: {component: "textarea"}}
                            ]
                        }
                    ]
                },
                {
                    name: "testimonials",
                    label: "Testimonials",
                    fields: [
                        {
                            type: "string",
                            name: "label",
                            label: "Section Title",
                            description: "Heading displayed above the testimonials"
                        },
                        {
                            type: "object",
                            list: true,
                            name: "items",
                            label: "Testimonials",
                            ui: {
                                itemProps: (item) => {
                                    return {label: item?.author || "New Testimonial"};
                                }
                            },
                            fields: [
                                {type: "string", name: "quote", label: "Quote", ui: {component: "textarea"}},
                                {type: "string", name: "author", label: "Author"},
                                {
                                    type: "string",
                                    name: "role",
                                    label: "Role (optional)",
                                    description: "e.g. Volunteer, Partner, Beneficiary"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "timeline",
                    label: "Timeline",
                    fields: [
                        {
                            type: "string",
                            name: "label",
                            label: "Section Title",
                            description: "Heading displayed above the timeline"
                        },
                        {
                            type: "object",
                            list: true,
                            name: "items",
                            label: "Milestones",
                            ui: {
                                itemProps: (item) => {
                                    return {label: item?.title || "New Milestone"};
                                }
                            },
                            fields: [
                                {
                                    type: "string",
                                    name: "date",
                                    label: "Date / Year",
                                    description: "e.g. 2020, March 2023, etc."
                                },
                                {type: "string", name: "title", label: "Title"},
                                {type: "string", name: "description", label: "Description", ui: {component: "textarea"}}
                            ]
                        }
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
          { type: "string", name: "locale", label: "Site Locale", description: "e.g. en_US, pt_PT", ui: { defaultValue: "en_US" } },
            {
                type: "string",
                name: "socialLabel",
                label: "Social Section Label",
                description: "Label shown above social icons in the footer (e.g. 'Follow Us')"
            },
          {
            type: "object",
            list: true,
            name: "navigation",
            label: "Navigation",
            ui: {
              itemProps: (item) => {
                return { label: item?.label || "New Link" };
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
