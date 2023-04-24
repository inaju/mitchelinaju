import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Grazac Academy",
    desc: "Grazac Academy gives you the opportunity to learn in-demand skills to build your tech career.",
    img: "/static/projects/grazac_academy.png",
    link: "https://grazacacademy.com/",
    tags: ["React", "NextJS", "SASS", "HTML"],
  },
  {
    id: 1,
    title: "Zwilt Application",
    desc: "Talent Acquisition Suite that makes it easy for talent teams to connect companies with top talent.",
    img: "/static/projects/zwilt_application.png",
    link: "https://application.zwilt.com/",
    tags: ["Typescript","React", "NextJS", "MaterialUI", "CSS"],
  },
  {
    id: 2,
    title: "Routelift",
    desc: "The Operating System for Last Mile Delivery Services.",
    img: "/static/projects/Routelift.png",
    link: "https://Routelift.com/",
    tags: ["Typescript","React", "NextJS", "HTML"],
  },
  {
    id: 3,
    title: "Keepup",
    desc: "Cloud based Note taking application that enables professionals sync their notes across platforms, guaranteed to boot your productivity",
    img: "/static/projects/keepup-screen.png",
    link: "https://keepup-63ced.firebaseapp.com/",
    github: "https://github.com/inaju/keepup",
    tags: ["Javascript", "Firebase", "NextJS", "HTML", "Tailwind"],
  },
  {
    id: 4,
    title: "Vtuslot",
    desc: "Africa's first VTU trading platform, buy and sell on a simple and safe platform with trusted users.",
    img: "/static/projects/vtuslot.png",
    link: "https://vtuslot.vercel.app/",
    github: "https://github.com/inaju/vtuslot",
    tags: ["React", "CSS", "Html"],
  },
  
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects