import "./AboutMeComponent.css";

export default function AboutMeComponent() {
  return (
    <>
      <section className="about-me-section p-2">
        <h1 className="about-me-title">Sobre Mi</h1>
        <div className="about-me-container">
          <span className="text-1xl text-(--black)">
            Desarrollador <b>Frontend</b> y <b>Backend</b> con +6 años de
            experiencia en Salesforce Commerce Cloud y +8 en total como desarrollador. <br />
            Soy una persona proactiva con ganas de seguir aprendiendo y creciendo.
            Me gusta trabajar en un ambiente laboral amable y
            dinámico donde siempre se pueda aprender y perfeccionar. <br />
            Sobre mis conocimientos: tengo experiencia con <b>SCAPI</b>, <b>OCAPI</b> para el desarrollo
            de <b>REST APIs custom de Salesforce</b>. <br />
            En la parte web conozco y tengo experiencia con la tecnología <b>SFRA</b> y la gestión de sandboxes con <b>
            Business Manager</b> ademas de integración servicios externos.<br />
            Por otro lado más orientado a código tengo
            experiencia con <b>HTML, SCSS, CSS, Javascript, Node, ISML, JQuery, Page Designer</b> y
            estoy formándome y aprendiendo <b>React</b>. <br />
            En la parte de <b>IA</b>, llevo tiempo trabajando con <b>Claude y Copilot</b>, aprendiendo sobre <b>IA generativa y optimización de prompts. </b><br /> 
            Por último, en cuanto a metodologías, he trabajado con <b>Agile</b> y como controlador de
            versiones tengo experiencia con <b>GIT y BitBucket</b>.
          </span>
        </div>
      </section>
    </>
  );
}
