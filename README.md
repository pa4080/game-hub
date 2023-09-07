# Game hub

This project is based on the Mosh Hamedani's course [React 18 and TypeScript](https://codewithmosh.com/p/ultimate-react-part1). Here is a Next.js 13 version of the project from the course.

## References

- [React 18 and TypeScript](https://codewithmosh.com/p/ultimate-react-part1)
- [Mosh at GitHub: The Ultimate React Course - Part 1](https://github.com/mosh-hamedani/react-course-part1)
- [Mosh at GitHub: GameHub](https://github.com/mosh-hamedani/game-hub)
- [RAWG API](https://rawg.io/apidocs) | [RAWG Home](https://rawg.io/)

## Snippets

```js
const res = await fetch(`${process.env.RAWG_API_URL}?key=${process.env.RAWG_API_KEY}`);
```

## Credits

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and hosted on [Vercel](https://vercel.com/).

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
