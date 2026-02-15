import type { ExpData, Icon } from "@/types";
import type { Project } from "../types";
import { FaCloudDownloadAlt } from "react-icons/fa";

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
        Proyecto estilo <strong>Headless</strong> (Web por un lado y App por
        otro) <br />
        Consumo y creación de servicios en <strong>
          Salesforce Commerce
        </strong>{" "}
        <br />
        Uso de los servicios por defecto de <strong> SCAPI</strong>,{" "}
        <strong>OCAPI</strong> y <strong>custom APIs</strong> con{" "}
        <strong>SCAPI.</strong> <br /> Manejo y customización de endpoints de{" "}
        <strong>SCAPI y OCAPI </strong> mediante <strong>Hooks.</strong> <br />
        Gestión del <strong>Business Manager</strong> de Salesforce Commerce
        Cloud (
        <strong>
          custom objects, system object types, catalogs, pricebooks{" "}
        </strong>
        etc.). <br /> Creación de <strong>jobs.</strong> <br /> Creación y
        modificación de <strong>Controllers</strong> para el paso de datos entre{" "}
        <strong>Front y Back.</strong> <br /> Creación de documentación en
        <strong>Confluence</strong>.
        <div className="flex flex-row gap-4 pt-5">
          <FaCloudDownloadAlt size={24} />
          <a
            href="/docs/Carta_recomendacion_Martin_Moran.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-1xl font-bold underline underline-offset-1 hover:cursor-pointer"
          >
            Carta Recomendación
          </a>
        </div>
      </>
    ),
    id: "boolea",
  },
  {
    title: "Full-Stack Salesforce Commerce Developer - Seidor",
    period: "2022 - 2023",
    description: (
      <>
        Creación de <strong>catridges</strong> para la gestión de los nuevos
        desarrollos
        <br />
        Gestión del <strong>Business Manager</strong> (Creacion de{" "}
        <strong>Assets y Slots</strong>) <br />
        Creacion de <strong>componentes web</strong>, <strong>diseño</strong> y{" "}
        <strong>modificación de estilos</strong>
        existentes a partir de <strong>Figma</strong> <br />
        Creacion y modificacion de <strong>Controllers</strong> para el paso de
        datos entre
        <strong> Front y Back</strong> <br />
        Llamadas a <strong>servicios</strong> <br />
        Creación de documentacion en <strong>Confluence</strong>
        <br />
        Creación <strong>archivos de traducción</strong> <br />
        Creación <strong>Attrs personalizados (SOT&COT)</strong>
      </>
    ),
    id: "seidor",
  },
  {
    title: "Front-End Salesforce Commerce Developer - Capgemini",
    period: "2020 - 2022",
    description: (
      <>
        Creacion de <strong>catridges</strong> para la gestión de los nuevos
        desarrollos <br />
        Gestion del <strong>Business Manager</strong> (Creacion de{" "}
        <strong>Assets y Slots</strong>) <br />
        Creacion de <strong>componentes web</strong> y modificacion de{" "}
        <strong>estilos</strong> existentes
      </>
    ),
    id: "capgemini-sf",
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
    id: "capgemini",
  },
];

export const courses: ExpData[] = [
  {
    title: "Salesforce Commerce Cloud 303 - POD Alerts Cartridge",
    href: "/docs/salesforceUdemy2.pdf",
    download: true,
  },
  {
    title: "Salesforce Commerce Cloud 201- Intermedio",
    href: "/docs/salesforceUdemy.pdf",
    download: true,
  },
  {
    title: "SFCC Developer Certification Path by Jorge Hernandez",
    href: "",
    download: false,
  },
  {
    title: "Master en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap",
    href: "/docs/mastercss.pdf",
    download: true,
  },
  {
    title: "Diseño Web con HTML5 + CSS 30h",
    href: "/docs/_cursoGL.pdf",
    download: true,
  },
  {
    title: "Programación con JavaScript",
    href: "/docs/js40h.pdf",
    download: true,
  },
  {
    title: "Javascript Moderno: Guía para dominar el lenguaje",
    href: "",
    download: false,
  },
  {
    title: "Curso CSS",
    href: "",
    download: false,
  },
  {
    title: "Curso Ionic",
    href: "",
    download: false,
  },
  {
    title: "Curso Angular 10",
    href: "",
    download: false,
  },
];

export const certifications: ExpData[] = [
  {
    title: "Salesforce Commerce Cloud Developer",
    href: "docs/Salesforce_Certified_B2C_Martin_Moran.pdf",
    download: true,
  },
  {
    title: "Inglés B2.2 Curso EOI",
    href: "",
    download: false,
  },
  {
    title: "Certificación Inglés B1 EOI",
    href: "",
    download: false,
  },
  {
    title: "Grado Superior Desarrollo de Aplicaciones Multiplataforma",
    href: "",
    download: false,
  },
];
