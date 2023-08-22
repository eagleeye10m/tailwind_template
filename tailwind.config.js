module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      // tv: { min: "1200px" },
      // pc: { min: "992px", max: "1200px" },
      // laptop: { min: "768px", max: "992px" },
      // tablet: { max: "768px" },
      // iphone: { min: "480px" },
      // galaxy: { min: "360px" },
      // ipad: { min: "360px" },
      "2xl": { max: "1535px" },
      xxl: { max: "1465px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      l: { max: "991px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "400px" },
    },

    extend: {
      colors: {
        r_color: "#ff2c57",
        g_color: "#666666",
        g_back: "#f6f6f6",
        numbers_color: "rgba(0, 0, 0, 0.03)",
        text_color: "#212529",
      },
      boxShadow: {
        boxes: "5px -5px 50px 1px rgba(10,20,1,0.1)",
        service_boxes: "0 0 30px 0 rgb(67 67 67 / 15%)",
        read_more: "rgb(0 27 103 / 30%) 0px 0px 25px 0px",
        form_input: "0px 10px 30px rgb(0 0 0 / 10%)",
      },
    },
  },

  plugins: [
    // function ({ addComponents }) {
    //   addComponents({
    //     ".container": {
    //       width: "100%",
    //       "@screen tablet": {
    //         maxWidth: "540px",
    //       },
    //       "@screen laptop": {
    //         maxWidth: "720px",
    //       },
    //       "@screen pc": {
    //         maxWidth: "960px",
    //       },
    //       "@screen tv": {
    //         maxWidth: "1140px",
    //       },
    //     },
    //   });
    // },
  ],
};
