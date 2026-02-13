import type { Icon } from "@/types";
import type { Project } from "../types";

export const skillsBase: Icon[] = [
  {
    src: "",
    alt: "Salesforce Commerce Cloud",
    name: "salesforce",
    title: "Salesforce Commerce",
  },
  { src: "", alt: "Bootstrap", name: "bootstrap", title: "Bootstrap" },
  { src: "", alt: "CSS3", name: "css", title: "CSS3" },
  { src: "", alt: "HTML5", name: "html5", title: "HTML5" },
  { src: "", alt: "React", name: "react", title: "React" },
  { src: "", alt: "Jquery", name: "jquery", title: "Jquery" },
  { src: "", alt: "Postman", name: "postman", title: "Postman" },
  { src: "", alt: "SASS", name: "sass", title: "SASS" },
  { src: "", alt: "JavaScript", name: "js", title: "JavaScript" },
  {
    src: "",
    alt: "Salesforce Lightning Web Components",
    name: "lwc",
    title: "Salesforce LWC",
  },
];

export const skills: Icon[] = skillsBase.map((skill) => ({
  ...skill,
  src: `${import.meta.env.BASE_URL}images/skills/${skill.name}.webp`,
}));

export const projects: Project[] = [
  {
    title: "Full Stack Developer - Boolea",
    period: "2023 - 2026",
    description: (
      <>
        Migración APP existente a Salesforce Commerce consumiendo endpoints de 
         <strong> SCAPI</strong>, <strong>OCAPI</strong> y custom. <br/> Manejo y edición
        de endpoints de SCAPI y OCAPI. <br/> Customización servicios SCAPI mediante
        hooks. <br/> Gestión del <strong>Business Manager</strong> de Salesforce
        Commerce Cloud (custom objects, system object types, catalogs, pricebooks
        etc.). <br/> Creación de jobs. <br/> Creación y modificación de Controladores para el
        paso de datos entre Front y Back. <br/> Creación de documentación en
        Confluence.
      </>
    ),
    color: "#5196fd",
  },
  {
    title: "Full Stack Developer - Seidor",
    period: "2022 - 2023",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément.",
    color: "#8f89ff",
  },
  {
    title: "Front-End Salesforce CC Developer - Capgemini",
    period: "2020 - 2022",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal.",
    color: "#13006c",
  },
  {
    title: "Front-End Developer - Capgemini",
    period: "2018 - 2020",
    description:
      "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
    color: "#ed649e",
  },
];
