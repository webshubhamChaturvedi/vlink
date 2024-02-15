/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("flowbite/plugin"), require("@tailwindcss/line-clamp")],
  theme: {
    extend: {
      inset: {
        "minus-5": "-1.25rem",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        instagram: "url('/img/bg-instagram.png')",
        "footer-texture": "url('/img/footer-texture.png')",
        "why-vlink-texture":
          "url('https://res.cloudinary.com/dthpnue1d/image/upload/c_fill,g_faces,w_480/v1691389090/why_vlink_texture_3061c0a333.svg')",
        "ball-texture":
          "url('https://res.cloudinary.com/dthpnue1d/image/upload/c_fill,g_faces,w_340/ball_texture_68d3cde068.svg')",
        "form-texture": "url('/img/form-texture.svg')",
        "form-background":
          "url('/img/form-texture.svg'),url('/img/form-background.png')",
        "ceo-texture": "url('/img/ceo-texture.svg')",
        "blog-page-texture": " url('/img/blog-page-texture.png')",
        "how-we-work-background":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)),url('https://res.cloudinary.com/dthpnue1d/image/upload/c_fill,g_faces,w_100/v1690806569/how_we_work_background_121a0cc7f6.png')",
        "how-we-work-texture":
          "url('https://res.cloudinary.com/dthpnue1d/image/upload/c_fill,g_faces,w_600/v1690806569/how_we_work_texture_9031e937c4.png')",
        "our-team":
          "url('/img/our-team-left.png'),url('/img/our-team-right.png')",
        "our-history": "url('/img/our-history-background.svg')",
        "our-advisors": "url('/img/our-advisors-background.png')",
        "tell-us-your-needs":
          "linear-gradient(0deg, rgba(74,12,100,0.96), rgba(74, 12, 100, 0.96)),url('/img/tell-us-your-needs-background.png')",
        "dedicated-teams":
          "linear-gradient(0deg, rgba(236, 244, 254, 0.95), rgba(236, 244, 254, 0.95)),url('https://res.cloudinary.com/dthpnue1d/image/upload/c_fill,g_faces,w_420/dedicated_teams_background_909547b7ee.png')",
        "our-solutions":
          "linear-gradient(0deg, rgba(236, 244, 254, 0.95), rgba(236, 244, 254, 0.95)),url('/img/our_solutions_background.png')",
        "vlink-apart": "url('/img/stunning-ball.svg')",
      },
      borderRadius: {
        xl: "25px",
      },
      translate: {
        "1/5": "20%",
        "1/6": "16.666667%",
      },
      backgroundPosition: {
        "blog-position": "left 175%, right ",
        "our-team-position": "left top, right bottom",
        "vlink-apart-position": "center top",
      },
      backgroundSize: {
        "blog-size": "100%,contain",
      },
      boxShadow: {
        shadowGrid: "0 0 20px 10px rgb(0 0 0 / 10%)",
        dotShadow: "0 0 3px 0px #00000045",
        techShadow: "0 0 45px 0px #0050D521",
        shadowCard: "0px 0px 40px rgba(0, 80, 213, 0.13)",
      },
      height: {
        hero: "calc(100vh-80px)",
      },
      colors: {
        dark: "#2B2B2D",
        lighterGray: "#F5F5F5",
        lightGray: "#f6f6f6",
        lightGrayTransparent: "#f6f6f630",
        bluishGray: "#F4FAFF",
        primary: "#0050D5",
        darkPrimary: "#003C9E",
        secondary: "#0F0F35",
        sectionBg: "#0050D5",
        company: "#62207E",
        lightBlue: "#002856",
        grey: "#737272",
        storiesText: "#565656",
        blogSquare: "#1E1123",
        blogAvatarText: "#868686",
        testimonialFrame: "#F3F3F3",
        testimonialRol: "#343434",
        yellow: "#FFE55E",
        stickyPrimary: "#10609D",
        facebook: "#3B5998",
        linkedin: "#0077B5",
        twitter: "#55ACEE",
        gridCardMobileBg: "#CECECE",
        headerLinkColor: "#212121",
        blogSearchBar: "#F9F9F999",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "840px",
        md: "1028px",
        lg: "1284px",
        xl: "1440px",
        "2xl": "1596px",
      },
    },
  },
};
