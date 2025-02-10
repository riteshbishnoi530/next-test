import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       "off-grey": "#656566",
       "custom-grey": "#D0D5DD",
       "dark-grey": "#475467",
      },
    },
  },
  plugins: [],
} satisfies Config;
