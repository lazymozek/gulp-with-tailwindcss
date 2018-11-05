/*=====================================================================*/
/*                  Gulp with Tailwind Utility framework               */
/*=====================================================================*/

/*
    Usage :: 
    =======================================================================

    1. npm install //To install all dev dependencies of package

    2. npm run init // To generate tailwind config file with tailwind utilites styles

    3. npm run dev //To start development and server for live preview

    4. npm run build //To generate minifed files for live server
*/

const { src, dest, task, watch, series,parallel } = require('gulp');
const paths = require("./package.json").paths; //Files/Folders path defined in package.json
const browserSync = require('browser-sync').create();
const createFile = require('create-file'); //For creating tailwind utilities styles by command
const exec = require('child_process').exec; //For executing commands
const sass = require('gulp-sass'); //For Compiling SASS files
const concat = require('gulp-concat'); //For Concatinating js,css files
const postcss = require('gulp-postcss'); //For Compiling tailwind utilities with tailwind config
//Note : Webp still not supported in majpr browsers including forefox
//const webp = require('gulp-webp'); //For converting images to WebP format
//const replace = require('gulp-replace'); //For Replacing img formats to webp in html
const del = require('del'); //For Cleaning build/dist for fresh export
const minify = require('gulp-minifier'); //For minifiying all files
const logSymbols = require('log-symbols'); //For Symbolic Console logs :) :P 

//Tailwind init : Generates Tailwind Config file with Tailwind CSS Utilities 
function tailwindInit(done){
    console.log("\n\t" + logSymbols.info," Generating Tailwind Config file with tailwind styles...\n");
    exec('tailwind init', function (err) { 
        if(err)
            console.log("\n\t" + logSymbols.error,"Oops! Tailwind.js already exists.\n");
        else
            console.log("\n\t" + logSymbols.success,"Tailwind.js @ "+ paths.config.tailwindjs+" and Tailwind SCSS @ "+ paths.src.sass+", created Successfully!\n");
    });
    createFile(paths.src.sass + '/tailwind.scss', '@tailwind preflight;\n@tailwind components;\n@tailwind utilities;',(cb)=>{ done(cb); });
}

//Load Previews on Browser on dev
task('livepreview', (done) => {
    browserSync.init({
        server: {
            baseDir: paths.dist.base
        },
        port: 1234
    });
    done();
});

//Reload functions which triggers browser reload
function previewReload(done){
    console.log("\n\t" + logSymbols.info,"Reloading Preview.\n");
    browserSync.reload();
    done();
}

task('html', () => {
    return src(paths.src.base+'/*.html')
           //Note : Webp still not supported in majpr browsers including forefox
           //.pipe(replace('.jpg', '.webp'))
           //.pipe(replace('.png', '.webp'))
           //.pipe(replace('.jpeg','.webp'))
           .pipe(dest(paths.dist.base));
}); 

//Compiling scss to css
task('styles', ()=> {
    var tailwindcss = require('tailwindcss'); 
    return src(paths.src.sass + '/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            tailwindcss(paths.config.tailwindjs),
            require('autoprefixer'),
        ]))
        .pipe(dest(paths.src.css));
});

//merging all css files to a single file
task('style-output' ,()=> {
    return src([paths.src.css + '/tailwind.css',paths.src.css + '/*.css'])
           .pipe(concat({ path: 'css/style.css'}))
           .pipe(dest(paths.dist.base));
});

//merging all script files to a single file
task('scripts' ,()=> {
    return src([paths.src.js + '/libs/*.js',paths.src.js + '/*.js'])
           .pipe(concat({ path: 'js/scripts.js'}))
           .pipe(dest(paths.dist.base));
});

task('imgs', (done) =>{
    src(paths.src.img + '/*')
    //Note : Webp still not supported in majpr browsers including forefox
    //.pipe(webp({ quality: 100 }))
    .pipe(dest(paths.dist.img));
    done();
});

task('exportImgs', (done) =>{
    src(paths.src.img + '/*')
    //Note : Webp still not supported in majpr browsers including forefox
    //.pipe(webp({ quality: 100 }))
    .pipe(dest(paths.build.base + '/img'));
    done();
});

//Watch files for changes
task('watch-changes', (done) => {
    
    //Watch tailwind config file for changes and regenerate tailwind styles with modified values
    watch(paths.config.tailwindjs,series('styles','style-output', previewReload));

    //Watching HTML Files edits
    watch(paths.src.base+'/*.html',series('html',previewReload));

    //Watching SASS Files edits
    watch(paths.src.sass+'/*.scss',series('styles','style-output',previewReload));

    //Watching JS Files edits
    watch(paths.src.js+'/*.js',series('scripts',previewReload));

    //Watching Img Files edits
    watch(paths.src.img+'/*',series('imgs',previewReload));

    console.log("\n\t" + logSymbols.info,"Watching for Changes made to files.\n");

    done();
});

//Exporting for live site with minified styles,js and html on build command
task('exportLive', ()=> {
  return src('./dist/**/*').pipe(minify({
    minify: true,
    minifyHTML: {
      collapseWhitespace: true,
      conservativeCollapse: true,
    },
    minifyJS: {
      sourceMap: true
    },
    minifyCSS: true,
    getKeptComment: function (content, filePath) {
        var m = content.match(/\/\*![\s\S]*?\*\//img);
        return m && m.join('\n') + '\n' || '';
    }
  })).pipe(dest(paths.build.base))
});

//Cleaning dist folder for fresh start
task('clean:dist', ()=> {
    console.log("\n\t" + logSymbols.info,"Cleaning dist folder for fresh start.\n");
    return del(['dist']);
});

//Cleaning build folder for fresh start
task('clean:build', ()=> {
    console.log("\n\t" + logSymbols.info,"Cleaning build folder for fresh start.\n");
    return del(['build']);
});

//series of tasks to run on dev command
task('development', series('clean:dist','html','styles','style-output','scripts','imgs',(done)=>{
    console.log("\n\t" + logSymbols.info,"npm run dev is complete. Files are located at ./dist\n");
    done();
}));

task('build', series('clean:build','development','exportLive',(done)=>{
    console.log("\n\t" + logSymbols.info,"npm run build is complete. Files are located at ./build\n");
    done();
}));

exports.tailwindInit = tailwindInit;
exports.default = series('development','livepreview','watch-changes');
exports.build = series('development',parallel('build','exportImgs'));