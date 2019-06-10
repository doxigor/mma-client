require("@babel/polyfill");
require("@babel/register")({
    ignore: [
      /node_modules\/(?!(ol)\/)/
    ],

    presets : ["react-app","@babel/preset-typescript"],
    plugins : [
        "inline-react-svg",
        "@babel/preset-typescript"
    ],
    extensions: [".es6", ".es", ".jsx", ".js", ".mjs", ".tsx"],
    cache: false,
  });
