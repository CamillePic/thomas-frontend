// generate-sitemap.js

const { SitemapStream, streamToPromise } = require("sitemap");
const { createGzip } = require("zlib");
const fs = require("fs");

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: "https://thomastakada.com" }); // Replace with your website's URL

  // Add your website's pages to the sitemap
  sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
  sitemap.write({ url: "/Branch-Lamp", changefreq: "daily", priority: 0.8 });
    sitemap.write({ url: "/Branch-Lamp-more", changefreq: "daily", priority: 0.8 });
    sitemap.write({ url: "/Branch-Shelves", changefreq: "daily", priority: 0.8 });
    sitemap.write({ url: "/Branch-Shelves-more", changefreq: "daily", priority: 0.8 });
    sitemap.write({ url: "/Chicken-Garage", changefreq: "daily", priority: 0.8 });
    sitemap.write({ url: "/Chicken-Garage-more", changefreq: "daily", priority: 0.8 });
    sitemap.write({ url: "/Innermost-House", changefreq: "daily", priority: 0.8 });
    sitemap.write({ url: "/Innermost-House-more", changefreq: "daily", priority: 0.8 });
    sitemap.write({ url: "/Lamp-Anyone-Can-Make", changefreq: "daily", priority: 0.8 });
    sitemap.write({ url: "/Lamp-Anyone-Can-Make-more", changefreq: "daily", priority: 0.8 });
    sitemap.write({ url: "/Grandpas-Lamp", changefreq: "daily", priority: 0.8 });
    sitemap.write({ url: "/Grandpas-Lamp-more", changefreq: "daily", priority: 0.8 });
    sitemap.write({ url: "/Leaf-Shelves", changefreq: "daily", priority: 0.8 });
    sitemap.write({ url: "/Leaf-Shelves-more", changefreq: "daily", priority: 0.8 });
    sitemap.write({ url: "/Cat-Stuff", changefreq: "daily", priority: 0.8 });
    sitemap.write({ url: "/Cat-Stuff-Tree", changefreq: "daily", priority: 0.8 });
    sitemap.write({ url: "/Cat-Stuff-Bowl", changefreq: "daily", priority: 0.8 });

    
  // Add more pages as needed

  sitemap.end();

  // Create a gzipped sitemap
  const sitemapStream = createGzip();
  sitemap.pipe(sitemapStream);

  // Write the sitemap to a file
  await streamToPromise(sitemapStream).then((data) =>
    fs.writeFileSync("public/sitemap.xml.gz", data)
  );
}

generateSitemap();
