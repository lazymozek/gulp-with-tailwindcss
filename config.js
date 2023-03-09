const config = {
  tailwindjs: "./tailwind.config.js",
  port: 9050,
};

// tailwind plugins
const plugins = {
  typograpy: true,
  forms: true,
  lineClamp: true,
  containerQueries: true,
};

// base folder paths
const basePaths = ["src", "dist", "build"];

// folder assets paths
const folders = ["css", "js", "img", "fonts", "other"];

const paths = {
  root: "./",
};

basePaths.forEach((base) => {
  paths[base] = {
    base: `./${base}`,
  };
  folders.forEach((folder) => (paths[base][folder] = `./${base}/${folder}`));
});

module.exports = {
  config,
  plugins,
  paths,
};
