# Template: New MLT Project Name

This version of the template is without:

- `next-intl` (multi language) support.
- `next-auth` (user authentication) setup.

## Setup a new project

- [x] Use the search tool and replace all occurrences of `new-project-name` with the actual new project name.
- [x] Create a logo and place it in the [`public/icons/svg`](public/icons/svg) directory.
- [x] Populate the logo by the help of [`scripts/app-icon-square-gen.sh`](scripts/app-icon-square-gen.sh).
- [x] Update the [`package.json`](package.json) file with the new project name and initial version. Update the `description` and `author` fields as well.
- [x] Update the NPM packages to the latest version and install them.

  ```bash
  ncu
  ncu -u
  npm install
  ```

- [x] Update the [`public/manifest.json`](public/manifest.json) file with the new project name and logo.
- [x] Update the [`public/robots.txt`](public/robots.txt) file with the new project name.
- [x] Update the [`public/sitemap.xml`](public/sitemap.xml) file with the new project name.
- [x] Review the [`next.config.js`](next.config.js) file.
- [x] Review and update the metadata into the base layout: [`app/layout.tsx`**`#metadata`**](app/layout.tsx#L18).

- [ ] Update the [`README.md`](README.md) file with the new project name.

- [ ] Create a new repository on [GitHub](https://github.com) and push the initial commit.

  ```bash
  git init
  git add -A .
  git commit -m "Initial commit"
  git branch -M master
  git remote add origin git@github.com:metalevel-tech/prj-nextjs-game-hub.git
  git push -u origin master
  ```

- [ ] Create a new project on [Vercel](https://vercel.com/) and link it to the repository. Then link the local repository to the vercel project.

  ```bash
  npx vercel link
  npx vercel env pull
  ```

- [ ] Redirect an appropriate domain to the Vercel project. Currently I'm using [Cloudflare](https://www.cloudflare.com/) for DNS management.

## Credits

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and hosted on [Vercel](https://vercel.com/).

## Getting Started Dev

Install the dependencies:

```bash
npm install
```

Checkout the [`.env.example`](.env.example) file and create a `.env.local` file with an actual value of `OPEN_WEATHER_API_KEY`. I'm using [One Call API 3.0](https://openweathermap.org/api/one-call-3) with subscription of the base plan.

In addition you may want to create a Vercel project and link it to the repository then you can manage the environment variables from the Vercel admin panel.

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
