# Cloudflare Pages deployment: Aduroja Akintade / AI with Aduroja

This repository already powers an existing GitHub Pages site from the `main` branch. **Do not overwrite or merge the existing live homepage automatically.**

## Staged site

- Source branch: `academy-cloudflare-pages-20261018`
- Site folder: `academy-cloudflare/`
- Files: `index.html`, `styles.css`, `_headers`, `robots.txt`
- Production status: **NOT deployed** until Cloudflare project is created and Git integration is authorized.
- Current Lovable AA Systems Studio project remains untouched. This is an interim static site, not yet a migration of Lovable's TanStack Start implementation.

## Configure in Cloudflare Dashboard

1. Sign up at https://dash.cloudflare.com/sign-up (Free plan), verify your email and turn on MFA.
2. Open **Workers & Pages** > **Create application** > **Pages** > **Import an existing Git repository**.
3. Authorize GitHub via the Cloudflare GitHub App, preferably limited to the repository `aduroja-akintade/aduroja-akintade.github.io`.
4. Set project name to `aduroja-ai-studio` (or another available name). Cloudflare decides the final available `*.pages.dev` URL.
5. Choose repository `aduroja-akintade/aduroja-akintade.github.io`.
6. Choose **production branch**: `academy-cloudflare-pages-20261018`.
7. Framework: **None**.
8. Root directory: leave default, repository root.
9. Build command: `exit 0` (or leave blank for a plain static site).
10. Build output directory: `academy-cloudflare`.
11. No environment variables or secret keys are needed.
12. **Save and Deploy**. After it finishes, open the assigned `https://<name>.pages.dev` URL.

> Do not choose `main` during initial configuration because the existing GitHub Pages site lives in `main`.

## Post-deployment checks

- Page loads at the root address.
- Style sheet loads, typography and grids work on desktop/mobile.
- All GitHub links, Jotform links and the public video link work.
- Browsing the site doesn't imply paid courses or student accounts are available.
- Security headers are present.
- Cloudflare reports a successful deployment and the project Git repository is linked.

## How updates work

Cloudflare Pages will deploy commits to the selected production branch automatically. Preview deployments can be enabled for other branches. Merge to main only after reviewing what it does to the existing GitHub Pages website.

## Next engineering phase

Audit the existing Lovable TanStack Start application, determine portability and SSR/edge requirements, migrate code safely and replace the static interim website only after validation. Add academy lesson content, testing, forms and privacy notices before enabling paid enrollment.

## Security

Never commit Cloudflare API keys, OpenRouter keys, OAuth secrets, n8n credentials or student records to GitHub. Use environment secrets where needed and follow least-privilege access.
