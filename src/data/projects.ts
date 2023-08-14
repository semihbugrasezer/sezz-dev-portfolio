export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Rock Vs Mine",
    techs: ["Python", "Numpy", "Pandas"],
    link: "https://github.com/semihbugrasezer/rockvsmine",
  },
  {
    title: "Chat to Multi PDF",
    techs: ["Langchain","Streamlit","Large Language Model"],
    link: "https://github.com/semihbugrasezer/chat-to-multipdf",
  },
  {
    title: "Portfolio / Template",
    techs: ["Astro"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
