import { config, collection, fields } from "@keystatic/core";

export default config({
  // -----------------------------------------------------------
  // Storage: Keystatic Cloud
  // Writers log in with a Keystatic Cloud account (no GitHub needed).
  // Set up your project at https://app.keystatic.com
  // Then replace YOUR_TEAM and YOUR_PROJECT below.
  // -----------------------------------------------------------
  storage: {
    kind: "cloud",
  },
  cloud: {
    project: 'virtuebyte-blog/virtuebyte-blog',
  },

  ui: {
    brand: { name: "VirtuByte" },
  },

  collections: {
    blog: collection({
      label: "Blog Posts",
      // 'title' drives the auto-generated slug (filename)
      slugField: "title",
      // Reads/writes to content/blog/<slug>.mdx
      path: "content/blog/*",
      // Frontmatter + MDX body — matches the existing file format exactly
      format: { contentField: "content" },

      schema: {
        // Slug is derived automatically from this field
        title: fields.slug({
          name: { label: "Title" },
        }),

        date: fields.date({
          label: "Publish Date",
          description: "Controls sort order on the blog listing.",
          validation: { isRequired: true },
        }),

        excerpt: fields.text({
          label: "Excerpt",
          multiline: true,
          description: "1–2 sentence teaser shown on the blog listing card.",
          validation: { isRequired: true },
        }),

        metaDescription: fields.text({
          label: "Meta Description",
          multiline: true,
          description:
            "SEO text for Google (150–160 chars). Keep different from excerpt.",
          validation: { isRequired: true },
        }),

        featuredImage: fields.image({
          label: "Featured Image",
          // Physically stored in the repo at public/images/blog/
          directory: "public/images/blog",
          // URL path used by Next.js at runtime
          publicPath: "/images/blog/",
          description: "Hero image for the post.",
        }),

        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          description: "Topic labels (e.g. Salesforce, AI, Manufacturing).",
          itemLabel: (props) => props.value || "Tag",
        }),

        // The MDX body — stored as the file content after frontmatter
        content: fields.mdx({
          label: "Body",
          description: "Main post content. Use the toolbar for formatting.",
        }),
      },
    }),
  },
});
