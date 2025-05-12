import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://first-astroo.netlify.app/",
  integrations: [preact()]
});