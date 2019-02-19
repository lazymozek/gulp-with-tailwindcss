# Gulp with TailwindCSS Starter Kit

Gulp with TailwindCSS Starter Kit - A repo which makes your development easier with predefined gulp tasks that help you to use [tailwindcss](https://github.com/tailwindcss/tailwindcss) with simple npm commands 

## Commands

1. Install Dev Depedencies
```sh
 npm install
```
2. To start development and server for live preview
```sh
 npm run dev
```
3. To generate minifed files for live server
```sh
 npm run build 
```

## How to include Google Fonts to your project

Please follow the this [tailwind documentation](https://tailwindcss.com/docs/fonts/#font-families) to include fonts to tailwind config file and just link using `<link>` tag

 
# Options
 

## Paths
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
            "img": "./src/img"
        },
        "dist": {
            "base": "./dist",
            "css": "./dist/css",
            "js": "./dist/js",
            "img": "./dist/img"
        },
        "build": {
            "base": "./dist",
            "css": "./dist/css",
            "js": "./dist/js",
            "img": "./dist/img"
        },
    }
    ...
}
```