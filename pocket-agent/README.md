# Pocket Agent

A mobile-first, installable Progressive Web App (PWA) foundation for a personal AI agent. This is an independent project and is not affiliated with Nous Research or Hermes Agent.

## Included now
- Responsive Android-friendly interface
- Local task list with priority and completion state
- Local memory/notes
- Local JSON export/import
- PWA manifest, app icon and service-worker offline shell
- Demo chat that clearly states when no model is connected

## Not connected yet
This is **not yet a full Hermes Agent clone**. No real AI model, browser automation, terminal execution, email, file-processing pipeline, cloud sync or 24/7 scheduler is connected. UI cards must not be mistaken for working integrations.

## Deploy and install on Android
1. Host this folder on an HTTPS origin (GitHub Pages or Vercel).
2. Open the deployed index.html in Chrome on Android.
3. Tap **⋮ → Add to Home screen** or **Install app** if offered.
4. Launch it from your home screen. Tasks and notes are stored in that browser on that device.

## Hosting note
The app lives in pocket-agent/, not the repository root. A Vercel project can use pocket-agent as its root directory. To publish with GitHub Pages, configure the site root to serve this folder or copy its contents into a dedicated repository root.

## Safe next architecture
- Secure backend/API proxy (provider keys stored server-side, never in public frontend code)
- Authentication and rate limits
- Model/provider routing
- Explicit approval for external actions
- Browser/file/tool integrations with audit logs
- Persistent cloud task queue and scheduler
- Automated build and smoke tests

## Free-first
The static frontend can be hosted on a free tier, subject to provider limits and terms. AI model usage, always-on workers and some hosting features may cost money. Do not enable paid services without the owner's approval.
