module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            sm: "376px",
            md: "750px",
            lg: "1125px",
            xl: "1440px",
        },

        // spacing: {
        //     0: "0rem",
        //     0.5: "0.5rem",
        //     1: "1rem",
        //     2: "2rem",
        //     3: "3rem",
        //     4: "4rem",
        //     5: "5rem",
        //     6: "6rem",
        //     7: "7rem",
        //     8: "8rem",
        //     9: "9rem",
        //     10: "10rem",
        //     11: "11rem",
        //     12: "12rem",
        // },

        // fontSize: {
        //     xs: "0.25rem",
        //     sm: "0.5rem",
        //     base: "1rem",
        //     lg: "2rem",
        //     xl: "3rem",
        //     "2xl": "4rem",
        //     "3xl": "5rem",
        //     "4xl": "6rem",
        //     "5xl": "7rem",
        //     "6xl": "8rem",
        //     "7xl": "9rem",
        //     "8xl": "10rem",
        //     "9xl": "11rem",
        // },

        extend: {
            colors: {
                myClr: "#f6ff00",
            },
            maxWidth: {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                '5/6': '83.333333%',
              },
        },
    },
    plugins: [],
};
