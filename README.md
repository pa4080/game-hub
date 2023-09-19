# Game hub

This project is based on the Mosh Hamedani's course [React 18 and TypeScript](https://codewithmosh.com/p/ultimate-react-part1). Here is a Next.js 13 version of the project from the course, also instead of Bootstrap is used [Tailwind CSS](https://tailwindcss.com/) and [Shadcn/UI](https://ui.shadcn.com/).

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

## Useful sections of the course

*Here are provided links to some lessons from the course (note you must subscribe to the course to access the links) and some related to them libraries.*

### Styling Components

- [Vanilla CSS](https://members.codewithmosh.com/courses/ultimate-react-part1/lectures/45915379)
- [CSS Modules](https://members.codewithmosh.com/courses/ultimate-react-part1/lectures/45915384)
- [CSS-in-JS](https://members.codewithmosh.com/courses/ultimate-react-part1/lectures/45915383):
  - [styled-components](https://styled-components.com/)
  - [emotion](https://emotion.sh/docs/introduction)
  - [styled-jsx](https://github.com/vercel/styled-jsx)
  - etc.
- [Inline Styles](https://members.codewithmosh.com/courses/ultimate-react-part1/lectures/45915385)
- [Popular UI Libraries](https://members.codewithmosh.com/courses/ultimate-react-part1/lectures/45915381)
  - [Bootstrap](https://getbootstrap.com/)
  - [React Bootstrap](https://react-bootstrap.github.io/)
  - [Material UI](https://material-ui.com/)
  - [Headless UI](https://headlessui.com/)
  - [Tailwind CSS](https://tailwindcss.com/) | [Tailwind Elements](https://tailwind-elements.com/docs/standard/forms/inputs/)
  - [Shadcn/UI](https://ui.shadcn.com/)
  - [Horizon UI](https://horizon-ui.com/)
  - [Next UI](https://nextui.org/)
  - [Radix](https://www.radix-ui.com/)
  - [DaisyUI](https://daisyui.com/)
  - [Chakra UI](https://chakra-ui.com/)
  - [Ant Design](https://ant.design/)
  - [Semantic UI](https://semantic-ui.com/)
  - [Reakit](https://reakit.io/)
  - [React Suite](https://rsuitejs.com/)
  - [Blueprint](https://blueprintjs.com/)
  - [Onsen UI](https://onsen.io/react/)
  - [Evergreen](https://evergreen.segment.com/)
  - [Theme UI: The Design Graph Framework](https://theme-ui.com/)
  - [Core UI](https://coreui.io/)
  - [Mantine](https://mantine.dev/)
  - [Shards React](https://designrevision.com/downloads/shards-react/)
  - etc.
- [Adding Icons](https://members.codewithmosh.com/courses/ultimate-react-part1/lectures/45915386)
  - [Font Awesome](https://fontawesome.com/)
  - [React Icons](https://react-icons.github.io/react-icons/)
  - [Material Icons](https://material-ui.com/components/material-icons/)
  - [Tabler Icons](https://tablericons.com/)
  - [Lucide Icons](https://lucide.dev/)
  - [Hero Icons](https://heroicons.com/)
  - [Remix Icon](https://remixicon.com/)
  - [Boxicoens](https://boxicons.com/)
  - [Bootstrap Icons](https://icons.getbootstrap.com/)
  - [Iconify](https://iconify.design/)
  - [IconPark](https://iconpark.oceanengine.com/)
  - [Iconoir](https://iconoir.com/)
- [Fetching data](https://members.codewithmosh.com/courses/ultimate-react-part1/lectures/45915920)
  - <https://jsonplaceholder.typicode.com/>
  - <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API>
  - <https://www.npmjs.com/package/axios#features>

### Managing Component State

- [`useState(value|{...{}}|[...[]])`](https://members.codewithmosh.com/courses/ultimate-react-part1/lectures/45915783)
- [Simplifying Update Logic with Immer](https://members.codewithmosh.com/courses/ultimate-react-part1/lectures/45915730). [Docs: **Introduction to Immer**](https://immerjs.github.io/immer/)
- The component that holds the state is responsible for updating it. [Docs: **Sharing State Between Components**](https://react.dev/learn/sharing-state-between-components)

### Building Forms

- [Mapping Forms with React hook Form](https://members.codewithmosh.com/courses/ultimate-react-part1/lectures/45915810)
  - [**React Hook Form**](https://react-hook-form.com/)
- [Applying Validation with React hook Form](https://members.codewithmosh.com/courses/ultimate-react-part1/lectures/45915813)
- [Schema Based Validation with Zod](https://members.codewithmosh.com/courses/ultimate-react-part1/lectures/45915806)
  - [**Zod**](https://www.npmjs.com/package/zod-form-data) | [Joi](https://www.npmjs.com/package/joi) | [Yup](https://www.npmjs.com/package/yup)
