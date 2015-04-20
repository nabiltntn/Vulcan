Package.describe({
  name: "telescope-sitemap",
  summary: "Sitemap package for Telescope",
  version: "0.0.5"
});

Package.onUse(function(api) {
  api.use([
    "templating",
    "underscore",
    "iron:router",
    "telescope:telescope-lib",
    "telescope-base",
    "telescope:telescope-posts",
    "gadicohen:sitemaps@0.0.20"
  ]);

  // server
  api.addFiles([
    "lib/server/sitemaps.js"
  ], ["server"]);

});