# Content Update Workflow

Update `/content/portfolio-content.mjs` when you want to change portfolio text, links, projects, experience, achievements, or contact details.

Then run:

```bash
npm run sync:content
```

That will regenerate:

- `public/portfolio.md`
- `public/llms.txt`

The React site also reads from the same content file, so one update keeps the UI and AI-readable docs aligned.
