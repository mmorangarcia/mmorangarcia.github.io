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
    title: "Full-Stack Salesforce Commerce Developer - Boolea",
    period: "2023 - 2026",
    description: (
      <>
        Migración APP existente a <strong>Salesforce Commerce</strong> consumiendo endpoints de
        <strong> SCAPI</strong>, <strong>OCAPI</strong> y custom. <br /> Manejo
        y edición de endpoints de SCAPI y OCAPI. <br /> Customización servicios
        SCAPI mediante hooks. <br /> Gestión del{" "}
        <strong>Business Manager</strong> de Salesforce Commerce Cloud (custom
        objects, system object types, catalogs, pricebooks etc.). <br />{" "}
        Creación de jobs. <br /> Creación y modificación de Controladores para
        el paso de datos entre Front y Back. <br /> Creación de documentación en
        Confluence.
      </>
    ),
    id: "boolea"
  },
  {
    title: "Full-Stack Salesforce Commerce Developer - Seidor",
    period: "2022 - 2023",
    description: (
      <>
        Creación de <strong>catridges</strong> para la gestión de los nuevos desarrollos
        <br />
        Gestión del <strong>Business Manager</strong> (Creacion de{" "}
        <strong>Assets y Slots</strong>) <br />
        Creacion de <strong>componentes web</strong> y modificacion de estilos
        existentes a partir de <strong>Figma</strong> <br />
        Creacion y modificacion de <strong>Controllers</strong> para el paso de
        datos entre
        <strong> Front y Back</strong> <br />
        Llamada a <strong>servicios</strong> <br />
        Creación de documentacion en <strong>Confluence</strong>
        <br />
        Creación <strong>archivos de traducción</strong> <br />
        Creación <strong>Attrs personalizados (SOT&COT)</strong>
      </>
    ),
    id: "seidor"
  },
  {
    title: "Front-End Salesforce Commerce Developer - Capgemini",
    period: "2020 - 2022",
    description: (
      <>
        Creacion de <strong>catridges</strong> para la gestión de los nuevos desarrollos <br />
        Gestion del <strong>Business Manager</strong> (Creacion de <strong>Assets y Slots</strong>) <br />
        Creacion de <strong>componentes web</strong> y modificacion de <strong>estilos</strong> existentes
      </>
    ),
    id: "capgemini-sf"
  },
  {
    title: "Front-End Developer - Capgemini",
    period: "2018 - 2020",
    description: (
      <>
        Desarrollo de <strong>componente</strong> y vista "iframe" <br />
        Creación de <strong>documentos funcionales</strong> <br />
        Integración de <strong>servicios Back</strong> <br />
        Desarrollo Front-End con <strong>Angular 10</strong>
      </>
    ),
    id: "capgemini"
  },
];
