# GitHub Pages — somnath16.github.io

This folder contains the **ready-to-publish** build of the Portfolio website for the
GitHub **user page** at **https://somnath16.github.io/**

It is built with `base: '/'` so all asset paths are root-relative and work when the
contents of this folder are pushed to the **root** of the `somnath16.github.io`
repository (user pages are served from the repo root — there is no `/Portfolio/`
subpath).

## Publish (first time)

1. On GitHub, create a new empty repository named exactly: **`somnath16.github.io`**
   (do NOT add a README or anything else to it).

2. From inside this folder (`github-pages/`), run:

```bash
git remote add origin https://github.com/Somnath16/somnath.github.io.git
git branch -M main
git push -u origin main
```

3. Go to your repository **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: **main** / root (`/`)
   - Save.

4. Your site goes live at: **https://somnath16.github.io/**

> The initial commit already exists in this folder's git repo, so the three commands
> above are all you need to push. If you prefer, you can add a new commit with
> `git add . && git commit -m "..."` before pushing.

## Update the site after changes

The source lives in the parent `Portfolio/` folder. After making changes there:

```bash
# from the Portfolio/ folder (one level up)
npm run build:ghpages
```

Then commit and push from this folder:

```bash
cd github-pages
git add .
git commit -m "Update portfolio"
git push
```

## Notes

- **Routing**: The site uses hash-based routing (`/#/about`, `/#/projects`, ...) so no
  server-side rewrite/404 config is needed on GitHub Pages.
- **`.nojekyll`**: Included so GitHub Pages serves the files as-is (no Jekyll build).
- **Contact form**: On GitHub Pages the Netlify email function is not available. The
  form still saves inquiries to Supabase (if configured) and treats the email step as
  best-effort. For Gmail SMTP email notifications, keep using the Netlify deployment.
- **Supabase**: The site works without Supabase (falls back to local/demo data). To use
  the live database + admin CMS, add your `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY`
  to `Portfolio/.env` and rebuild (they get baked into the bundle at build time).
