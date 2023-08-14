type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "hi@sezz.dev",
  title: "Hi, I’m Semih Buğra 👋",
  profile: "/profile.webp",
  description:
    "I am a computer engineering student who is passionate about artificial intelligence and machine learning. I have completed several courses and projects on these topics, using various tools and frameworks such as Python, TensorFlow, PyTorch, and Vertex AI. I am eager to apply my skills and knowledge to real-world problems and challenges.",
  socials: [
    {
      label: "Linkedin",
      link: "https://linkedin.com/in/semihbugrasezer",
    },
    {
      label: "Bento",
      link: "https://bento.me/sezz",
    },
    {
      label: "Github",
      link: "https://github.com/semihbugrasezer",
    },
  ],
};

export default presentation;
