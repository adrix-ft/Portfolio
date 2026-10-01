const config = {
  title: "Adarsh | Freelance Web Developer",
  description: {
    long: "Explore the portfolio of Adarsh, a Bioinformatics student and Freelance Web Developer. Blending an analytical mindset with creative problem-solving, I build robust, full-stack websites for local businesses while exploring the intersection of technology, biology, and data.",
    short:
      "Portfolio of Adarsh, a Bioinformatics student and Freelance Web Developer building scalable web solutions for local businesses.",
  },
  keywords: [
    "Adarsh",
    "freelance web developer",
    "bioinformatics",
    "full stack",
    "web development",
    "Vercel",
    "Render",
    "Supabase",
    "Next.js",
    "React",
    "local business websites",
  ],
  author: "Adarsh",
  email: "adrashyadav07o8@gmail.com",
  site: "//www.Adarsh.com",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/adarsh-a949253a7/",
    instagram: "https://www.instagram.com/adu.ft",
    whatsapp: "https://wa.me/7906568743",
    github: "https://github.com/adrix-ft",
  },
};
export { config };
