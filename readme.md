# Gulp with TailwindCSS Starter Kit

Gulp with TailwindCSS Starter Kit - A repo which makes your development easier with predefined gulp tasks that help you to use [tailwindcss](https://github.com/tailwindcss/tailwindcss) with simple npm commands 

## Commands

1. Install Dev Depedencies
```sh
 npm install
```
2. To generate tailwind config file with tailwind utilites styles
```sh
 npm run init
```
3. To start development and server for live preview
```sh
 npm run dev
```
4. To generate minifed files for live server
```sh
 npm run build 
```

## How to include Google Fonts to your project

Please follow the this [tailwind documentation](https://tailwindcss.com/docs/fonts/#font-families) to include fonts to tailwind config file and rest is done by gulp task :) 

**Note : Please make sure you add the same font family name as google font in order for this to work.**

## Options

# Font Weights
To change the font weights to be included in additional google fonts included in tailwind config change from below code
```sh
"options": {
    ...
    ...
    "fontweights": "400,500,600,700,900"
}
```

# Paths
To change the path of files and destination/build folder, edit options in **package.json** file
```sh
"options": {
    ...
    "paths": {
        "root": "./",
        "src": {
            "base": "./src",
            "css": "./src/css",
            "js": "./src/js",
            "sass": "./src/sass",
            "img": "./src/img"
        },
        "dist": {
            "base": "./dist",
            "css": "./dist/css",
            "js": "./dist/js",
            "img": "./dist/img"
        },
        "build": {
            "base": "./build"
        }
    }
    ...
}
```

## Changelogs

- [Commit Link]() Included task to include google font families which are listed in tailwind fonts option.
- [Commit Link](https://github.com/manjumjn/gulp-with-tailwindcss/commit/9fe8a139580cfca345bcd3ea6956519ef667debb) Included PurgeCSS to minify css by removing unused class/styles
