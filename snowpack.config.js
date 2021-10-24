/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  plugins: ["@snowpack/plugin-typescript"],
  install: [
    /* ... */
  ],
  installOptions: {
    installTypes: false,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
    
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
  experiments:{
    optimize:{
      bundle:true
    }
  }
};
