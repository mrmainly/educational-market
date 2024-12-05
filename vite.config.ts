import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    server: { port: 3000, open: true },
    plugins: [react()],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
        postcss: {
            plugins: [tailwindcss()],
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@services": path.resolve(__dirname, "./src/services"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@constans": path.resolve(__dirname, "./src/constans"),
            "@reducers": path.resolve(__dirname, "./src/reducers"),
            "@lib": path.resolve(__dirname, "./src/lib"),
        },
    },
});
