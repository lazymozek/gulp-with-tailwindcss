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

## Config
To change the path of files and destination/build folder, edit path in **package.json** file
```sh
"paths": {
    "root": "./",
    "config": {
        "tailwindjs": "./tailwind.js"
    },
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
```

