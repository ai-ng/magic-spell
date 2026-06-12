# Magic Spell

Magic Spell is an AI-powered text editor built with [Next.js](https://nextjs.org) and the [Vercel AI SDK](https://sdk.vercel.ai/), using [Groq](https://wow.groq.com/) for super fast inference.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fai-ng%2Fmagic-spell&project-name=magic-spell&repository-name=magic-spell&demo-title=Magic%20Spell&demo-description=AI%20prompting%20built%20into%20your%20%3Ctextarea%3E&demo-url=https%3A%2F%2Fmagic-spell.vercel.app&demo-image=https%3A%2F%2Fmagic-spell.vercel.app%2Fopengraph-image.png)

## Developing

- Clone the repository
- Create a `.env.local` file with `AI_GATEWAY_API_KEY=your-api-key` where `your-api-key` is your [Vercel AI Gateway key](https://vercel.com/docs/ai-gateway#create-an-api-key-in-the-vercel-dashboard).
  - You can also authenticate with a Vercel OIDC token by linking to a Vercel project (`vercel link`) and pulling env variables (`vercel env pull`).
- Run `pnpm install` to install dependencies.
- Run `pnpm dev` to start the development server.
