# CMS Setup Guide — VirtuByte Blog (Keystatic)

## Architecture Overview

```
Writer browser
    │
    ▼
your-site.vercel.app/keystatic/
(Keystatic Admin — served by Vercel, full Next.js)
    │  logs in with
    ▼
Keystatic Cloud account
(free, no GitHub account needed for writers)
    │  saves content as commits to
    ▼
GitHub Repo  (Tanishq4501/virtuebyte-next-action)
    │  triggers
    ▼
GitHub Actions  (STATIC_EXPORT=true build)
    │  FTP uploads static files to
    ▼
GoDaddy cPanel  →  staging.virtuebytech.com  (public visitors)
```

**Writers only need:** a Keystatic Cloud account (email signup, free).
**No GitHub account. No CLI. No technical knowledge.**

---

## Why Two Deployments?

| | Vercel | cPanel |
|---|---|---|
| **Purpose** | CMS admin for writers | Public website for visitors |
| **URL** | `your-site.vercel.app/keystatic` | `staging.virtuebytech.com` |
| **Triggered by** | Every push to `main` | Every push to `main` (via GitHub Actions) |
| **Next.js mode** | Full server (API routes active) | Static export (`output: "export"`) |
| **Keystatic active?** | Yes | No (shell only, non-functional) |

Keystatic **requires API routes** to talk to GitHub. That means it can only
run on a Node.js server like Vercel — not on a static cPanel host.
The cPanel build still uses `output: "export"`, so visitors get the same
fast static site as before.

---

## What Was Already Built

| File | What It Does |
|---|---|
| `keystatic.config.ts` | Blog schema — field definitions |
| `src/app/keystatic/[[...params]]/page.tsx` | Admin UI route (Vercel only) |
| `src/app/api/keystatic/[...params]/route.ts` | API handler (Vercel only) |
| `src/components/layout/ConditionalLayout.tsx` | Hides site Header/Footer on /keystatic |
| `src/app/layout.tsx` | Updated to use ConditionalLayout |
| `next.config.ts` | `output: "export"` only when `STATIC_EXPORT=true` |
| `.github/workflows/deploy.yml` | Sets `STATIC_EXPORT=true` for the cPanel build |

One placeholder to fill: `YOUR_TEAM/YOUR_PROJECT` in `keystatic.config.ts` (done in Step 2).

---

## Step 1 — Install Keystatic Packages

Run this in your project root:

```bash
npm install @keystatic/core @keystatic/next
```

Commit the updated `package.json` and `package-lock.json`.

---

## Step 2 — Create a Keystatic Cloud Project

Keystatic Cloud manages writer authentication — no GitHub required.

1. Go to [app.keystatic.com](https://app.keystatic.com) and sign up (free)
2. Click **New project**
3. Connect your GitHub repo: `Tanishq4501/virtuebyte-next-action`
4. Give your project a name (e.g. `virtubyte-blog`)
5. After creation, you'll see a project identifier like `my-team/virtubyte-blog`

6. Open `keystatic.config.ts` and replace the placeholder:

```typescript
cloud: {
  project: "my-team/virtubyte-blog",  // ← your actual team/project
},
```

---

## Step 3 — Connect Vercel to the Repo

Your `.vercel` folder already exists, so you likely have an existing Vercel project.

1. Go to [vercel.com](https://vercel.com) → your project dashboard
2. Confirm it is connected to `Tanishq4501/virtuebyte-next-action`
3. No build setting changes needed — Vercel auto-detects Next.js

   > Vercel does **not** set `STATIC_EXPORT`, so it builds with full Next.js
   > (API routes active, Keystatic works).

4. Trigger a deploy by pushing to `main`, or click **Redeploy** in Vercel
5. After deploy, note your Vercel URL (e.g. `virtubyte-next.vercel.app`)

---

## Step 4 — Add GitHub Secrets for FTP Deploy (cPanel)

1. Go to: **GitHub → Tanishq4501/virtuebyte-next-action → Settings → Secrets and variables → Actions**
2. Add each secret:

   | Secret name | Where to find it |
   |---|---|
   | `FTP_SERVER` | GoDaddy cPanel → Files → FTP Accounts → hostname |
   | `FTP_USERNAME` | GoDaddy cPanel → Files → FTP Accounts → username |
   | `FTP_PASSWORD` | GoDaddy cPanel → Files → FTP Accounts → password |

---

## Step 5 — Verify Both Deployments

Push your changes to `main`:

```bash
git add .
git commit -m "Add Keystatic CMS"
git push origin main
```

Check:
- **GitHub → Actions** tab → workflow goes green → cPanel site updates
- **Vercel dashboard** → deployment goes green
- **your-site.vercel.app/keystatic/** → Keystatic login screen loads
- **staging.virtuebytech.com/blog/** → existing blog posts still load

---

## Step 6 — Invite Writers (Keystatic Cloud)

1. Go to [app.keystatic.com](https://app.keystatic.com) → your project
2. Click **Team** → **Invite member**
3. Enter the writer's email address
4. Select role: **Editor** (can create/edit content, cannot change settings)
5. Click **Send invite**
6. Writer receives an email → creates a Keystatic Cloud account (free) → accepts invite
7. Writer goes to `your-site.vercel.app/keystatic/` → clicks **Sign in with Keystatic Cloud**
8. Done — they see the editor with only the Blog Posts collection

To revoke access: **Team** → find the member → **Remove**.

---

## Step 7 — Writer's Daily Workflow

### Logging in
1. Go to `your-site.vercel.app/keystatic/`
2. Click **Sign in with Keystatic Cloud**
3. Use the email + password set during invite acceptance

### Creating a post
1. Click **Blog Posts** in the left sidebar
2. Click **New entry**
3. Fill in the fields:
   - **Title** — auto-generates the URL slug
   - **Publish Date** — controls blog sort order
   - **Excerpt** — short summary for the blog listing card
   - **Meta Description** — Google SEO text (150–160 chars, different from excerpt)
   - **Featured Image** — click to upload from computer
   - **Tags** — add each tag with the + button
   - **Body** — rich MDX editor with toolbar
4. Click **Save** — Keystatic commits a draft branch to GitHub

### Submitting for review
1. Keystatic creates a Pull Request automatically when you save
2. Send the PR link to the reviewer
3. Reviewer checks the preview and approves in GitHub

### Going live
1. Reviewer merges the PR in GitHub
2. GitHub Actions triggers:
   - Builds static export (`STATIC_EXPORT=true`)
   - FTPs to cPanel
3. Post is live on `staging.virtuebytech.com/blog/` within ~3 minutes

---

## Troubleshooting

### `/keystatic/` shows 404 on cPanel
Expected — Keystatic only works on Vercel. Always use the Vercel URL for the admin.

### Login screen doesn't appear at `/keystatic/`
The Vercel deployment didn't succeed. Check the Vercel dashboard for build errors.

### "Invalid cloud project" error in Keystatic
The `project` value in `keystatic.config.ts` doesn't match the one in Keystatic Cloud.
Copy it exactly from [app.keystatic.com](https://app.keystatic.com) → Project settings.

### cPanel deploy fails (FTP step)
- Verify `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` secrets exist in GitHub
- Test credentials in FileZilla to confirm they're correct
- Check GoDaddy that FTP access is not restricted

### Build fails — "Missing frontmatter field"
A post is missing a required field. The CI linter checks for:
`title`, `date`, `excerpt`, `metaDescription`, `featuredImage`, `tags`
Open the post in Keystatic, fill the missing field, and save.

### Keystatic doesn't write to the right folder
Check that `path: "content/blog/*"` in `keystatic.config.ts` matches where
your `.mdx` files actually live. It should already be correct.

### Vercel also deploys on every push (you have two deploys)
This is correct and expected:
- Vercel builds → writer admin at `/keystatic/`
- GitHub Actions builds → cPanel static site for visitors

Both run from the same push to `main`.

---

## File Reference

| File | Role | Modify? |
|---|---|---|
| `keystatic.config.ts` | CMS schema | Only to add/rename fields |
| `content/blog/*.mdx` | Blog post source | Written by Keystatic |
| `public/images/blog/` | Image uploads | Managed by Keystatic |
| `src/lib/blog.ts` | Reads frontmatter at build time | Do not rename fields |
| `next.config.ts` | Conditional static/server build | No |
| `.github/workflows/deploy.yml` | cPanel deploy pipeline | Only to change FTP target |
| `public/admin/` | Old Decap CMS files — no longer used | Safe to delete |
