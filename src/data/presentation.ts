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
    "As a computer engineering student with a passion for artificial intelligence and machine learning, I have developed hands-on skills and knowledge through courses and projects using leading tools like Python, TensorFlow, PyTorch, and Google Cloud's Vertex AI platform. Through implementing neural networks, training models, and analyzing data, I've gained experience with supervised learning techniques including classification, regression, and clustering. I'm excited to further apply reinforcement and unsupervised learning methods to complex real-world problems across industries. My goal is to continue building expert-level proficiency in AI while exploring how responsible, ethical AI can make a positive global impact. I'm eager to join a team and contribute my skills to develop innovative AI solutions. ",
  socials: [
    {
      label: "Linkedin",
      link: "https://linkedin.com/in/semihbugrasezer",
    },
    {
      label: "Kaggle",
      link: "https://www.kaggle.com/semihbugrasezer",
    },
    {
      label: "Github",
      link: "https://github.com/semihbugrasezer",
    },
  ],
};

export default presentation;
