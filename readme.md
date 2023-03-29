# Gulp with TailwindCSS Starter Kit

Gulp with TailwindCSS v3 Starter Kit ( ~~Updated with [TailwindCSS JIT](https://github.com/tailwindlabs/tailwindcss-jit)~~ - **latest tailwind has JIT is built-in** ) - A repo that makes your development easier with predefined gulp tasks that help you to use [tailwindcss](https://github.com/tailwindcss/tailwindcss) with simple commands.

## Features

- Easy configuration using `config.js`
- Live reload on file/assets changes using `browser-sync`
- SCSS support
- Minification of styles and scripts on production build
- Minification of images on production build using `imagemin`
- Includes following tailwindcss plugins (can be disabled/enabled with `config.js`)

  - [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
  - ~~[@tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)~~ - Utility is included by default in Tailwind v3.3 release
  - [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
  - [@tailwindcss/container-queries](https://github.com/tailwindlabs/tailwindcss-container-queries)

## Quick Start

You can get started by clicking on `Use this template` for creating new repo using this template or simply by cloning it.

Install dev dependencies

```sh
yarn install // or npm install
```

Start development server with live preview

```sh
yarn dev // or npm run dev
```

Generate build files for production server

```sh
yarn prod // or npm run prod
```

All dev files are present in `src` folder. The build version can be found in `build` folder after running `yarn build` command.

## Configuration

All configurations are found in `config.js` file in the root directory. You can configure browser default port, enable/disable plugins by simply updating boolean values (Default is set to `true`) and many more.

```js
const config = {
  tailwindjs: "./tailwind.config.js",
  port: 9050, // default port
  // purgecss options
  purgecss: {
    content: ["src/**/*.{html,js,php}"],
    ...
  },
  // imagemin options for image optimizations
  imagemin: {
    png: [0.7, 0.7], // range between min (0) and max (1) as quality - 70% with current values for png images,
    jpeg: 70, // % of compression for jpg, jpeg images
  },
};

// tailwind plugins
const plugins = {
  typography: true, // set to false to disable
  forms: true,
  containerQueries: true,
};
...
```

## License

This project is open source and available under the [MIT License](https://github.com/lazymozek/gulp-with-tailwindcss/blob/main/LICENSE).
