# Game hub

This project is based on the Mosh Hamedani's course [React 18 and TypeScript](https://codewithmosh.com/p/ultimate-react-part1). Here is a Next.js 13 version of the project from the course, also instead of Bootstrap is used [Tailwind CSS](https://tailwindcss.com/) and [Shadcn/UI](https://ui.shadcn.com/).

## References and credits

- [React 18 and TypeScript: Code with Mosh Course](https://codewithmosh.com/p/ultimate-react-part1)
- [Mosh at GitHub: **The Ultimate React Course - Part 1**](https://github.com/mosh-hamedani/react-course-part1)
- [Mosh at GitHub: **GameHub**](https://github.com/mosh-hamedani/game-hub)
- [RAWG API Docs](https://rawg.io/apidocs) | [RAWG Home](https://rawg.io/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and hosted on [Vercel](https://vercel.com/).

## Final touches (to do)

- [x] Fancy game card hover behavior.
- [x] Proxy the RAWG Media files to avoid CORS and private networks with restrictions issues.
- [x] Improve the behaviour of the "color theme selector".
- [x] Clear all filters and show all games, when click on the logo. A little bit ugly solution which uses `<a href="/">` is applied.
- [x] Scroll to top button.
- [x] Create game-images gallery.

## Getting Started Dev

Install the dependencies:

```bash
npm install
```

Checkout the [`.env.example`](.env.example) file and create a `.env.local` file with an actual value of `RAWG_API_KEY`.

In addition you may want to create a Vercel project and link it to the repository then you can manage the environment variables from the Vercel admin panel.

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
