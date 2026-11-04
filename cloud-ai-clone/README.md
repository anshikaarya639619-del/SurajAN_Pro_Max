# Cloud Studio AI — Creator OS

A mobile-first, GitHub Pages-compatible creator workspace prototype.

## Included
- Local video preview and media file selection (the files are not uploaded).
- Video editing brief generator for captions, SFX, music, motion graphics, identity preservation and export settings.
- Downloadable TXT brief and JSON project settings.
- Agent specification builder.
- Guardrailed self-improvement plan for a future coding agent.
- Backend integration checklist.

## Important limitations
This is **not a full clone of a proprietary Cloud AI service** and does not render a finished AI-edited video by itself. It prepares instructions and project settings. Real AI video editing requires an external rendering/model provider or a backend you control. GitHub Pages is static hosting and cannot safely store API secrets or run heavy rendering jobs.

## Deploy on GitHub Pages
1. Open repository Settings → Pages.
2. Set the source to Deploy from a branch, branch `main`, folder `/ (root)`, if not already enabled.
3. Open the app at `https://anshikaarya639619-del.github.io/SurajAN_Pro_Max/cloud-ai-clone/` after Pages finishes deploying.

If the existing site uses a custom deployment workflow, keep its current settings and ensure this folder is included in the published artifact.

## Security
- Never place provider API keys in this static frontend or commit them to GitHub.
- Use server-side environment secrets, authenticated endpoints, file validation, quotas, private storage and signed download URLs.
- Only upload footage/audio you own or are authorized to use.
- Self-improvement agents should work in a branch, run tests and require review before merge/deployment.

## Roadmap for a real editing service
1. Backend API and user authentication.
2. Private media storage and upload limits.
3. Rendering provider adapter and job queue.
4. Progress, retries, cancellation and export/download.
5. Human approval controls, cost limits, logs and security testing.
