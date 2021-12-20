module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                secondary: "#CCCCCC",
                primary: "#D9D9D9",
                inactive: "#BFBFBF",
                hover: "#FFF",
                hoverSocial: "#FFF",
            },
            fontFamily: {
                relative: "relative-medium-pro",
            },
        },
    },
    plugins: [],
};
