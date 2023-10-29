import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    // using npx astro add netlify enables us the server side render content
    output: "server",
    adapter: netlify(),
});
