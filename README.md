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
- [ ] Create game-images gallery.

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

<details>
<summary> Here are provided links to some lessons from the course (note you must subscribe to the course to access the links) and some related to them libraries.
</summary>

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
- [**State management via URI**](https://www.youtube.com/watch?v=oZZEI23Ri6E): use [`useSearchParams()`](https://reactrouter.com/en/main/hooks/use-search-params) instead of [`useState()`](https://react.dev/reference/react/useState).
  **Note about Next.js:** [`import { usePathname, useSearchParams } from 'next/navigation'`](https://nextjs.org/docs/app/api-reference/functions/use-router#router-events)...

### Connect with the backend

- [Fetching data](https://members.codewithmosh.com/courses/ultimate-react-part1/lectures/45915920)
  - <https://jsonplaceholder.typicode.com/>
  - <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API>
  - <https://www.npmjs.com/package/axios#features>
- **Optimistic** update vs **Pessimistic** update logic: Optimistic update logic updates the UI immediately assuming the server request will succeed, while pessimistic update logic waits for the server response before updating the UI. See also [**useOptimistic()**](https://youtu.be/M3mGY0pgFk0?si=BwgjCvlbpM3bBE5_) beta React hook.
- When we send HTTP requests with the effect hook, we should provide a clean-up function to cancel the request if the component is unmounted before the response is received. This is important to prevent errors, especially if the user navigates to a different page while the request is still pending.
- When sending HTTP requests, we must handle errors properly. This can be done using try-catch blocks or by handling the error in the promise chain using .catch().
- Custom hooks are a way to reuse code logic between multiple components. By encapsulating logic in a custom hook, we can create reusable pieces of code that can be shared across components without duplicating the code. Custom hooks can be used to handle common tasks, such as fetching data, and can help to make our code more organized and easier to maintain.

### Build the "Game Hub" application

- In the Mosh's tutorial is used [Chakra UI](https://chakra-ui.com/), but here we are using [Tailwind CSS](https://tailwindcss.com/) and [Shadcn/ui](https://ui.shadcn.com/).
- [**Shadcn/ui > Next.js > Dark mode**](https://ui.shadcn.com/docs/dark-mode/next) this is the official way to implement dark mode in Next.js with Shadcn/ui. See the following files for a manual implementation.
  - [`hooks/useColorMode.ts`](hooks/useColorMode.ts)

#### Optional `useEffect()` dependencies

- <https://members.codewithmosh.com/courses/ultimate-react-part1-1/lectures/45916351>

[**`useData.ts`**](https://github.com/mosh-hamedani/game-hub/blob/main/src/hooks/useData.ts)

```js
import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false);
      });

    return () => controller.abort();
  }, deps ? [...deps] : []);

  return { data, error, isLoading };
};

export default useData;
```

[**`useGames.ts`**](https://github.com/mosh-hamedani/game-hub/blob/main/src/hooks/useGames.ts)

```js
const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      },
    },
    [gameQuery]
  );

export default useGames;
```

</details>
