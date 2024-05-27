/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-bg-desktop": "url('./src/assets/Login-Signup_Background.jpeg')",
        "login-bg-mobile":
          "url('./src/assets/Login-Signup_Background_Mobile_Variation.jpeg')",
      },
    },
    colors: {
      "gray-100": "#F1F5F9",
      "gray-200": "#E2E8F0",
      "gray-300": "#CBD5E1",
      "gray-400": "#94A3B8",
      "gray-500": "#64748B",
      "gray-600": "#475569",
      "gray-700": "#334155",
      "gray-800": "#1E293B",
      "gray-900": "#0F172A",
      "blue-100": "#DBEAFE",
      "blue-200": "#BAE6FD",
      "blue-300": "#7DD3FC",
      "blue-400": "#38BDF8",
      "blue-500": "#0EA5E9",
      "blue-600": "#0284C7",
      "blue-700": "#0369A1",
      "blue-800": "#075985",
      "blue-900": "#0C4A6E",
      "red-100": "#EF4444",
      "red-200": "#DC2626",
      "yellow-100": "#FACC15",
      "yellow-200": "#EAB308",
      "green-100": "#4ADE80",
      "green-200": "#22C55E",
    },
    fontFamily: {
      inter: ["inter", "sans-serif"],
    },
  },
  plugins: [],
};
