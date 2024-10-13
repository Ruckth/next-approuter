import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        'secondary-bg': '#262626',
        'bg': '#1B1B1B',
        'primary': '#FABC29',
        'secondary': '#444444',
        'success': '#0C9358',
      },
    },
  },
  plugins: [],
} satisfies Config;
