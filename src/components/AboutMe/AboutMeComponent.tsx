import "./AboutMeComponent.css";

export default function AboutMeComponent() {
  return (
    <>
      <section className="about-me-section p-2">
        <h1 className="about-me-title">Sobre Mi</h1>
        <div className="about-me-container">
          <span className="text-1xl text-(--black)">
            Desarrollador <b>Frontend</b> y <b>Backend</b> con varios años de
            experiencia en Salesforce Commerce. <br />
            Soy una persona proactiva con ganas de seguir aprendiendo y
            practicando. Me gusta trabajar en un ambiente laboral amable y
            dinámico donde podamos aprender unos de otros. <br />
            Sobre mis conocimientos: tengo experiencia con <b>SCAPI</b>, <b>OCAPI</b> para el desarrollo
            de <b>REST APIs custom de Salesforce</b>. <br />
            En la parte web conozco y tengo experiencia con la tecnología <b>SFRA</b> y la gestión de sandboxes con <b>
            Business Manager</b>. <br />
            Por otro lado más orientado a código tengo
            experiencia con <b>HTML, SCSS, CSS, Javascript, Node, ISML, JQuery</b> y
            estoy formándome y retomando conocimientos de <b>React</b>. <br />
            Por último, en cuanto a metodologías, he trabajado con <b>Agile</b> y como controlador de
            versiones <b>GIT</b>.
            {/* Desarrollador <b>Frontend</b> y <b>Backend</b> con 6 años de
            experiencia en
            <b> Salesforce Commerce Cloud</b>. <br />
            Estoy siempre abierto al aprendizaje y a los retos, soy una persona
            proactiva con ganas de seguir aprendiendo y practicando. <br />
            Me gusta trabajar en un ambiente laboral amable y dinámico, donde podamos
            aprender unos de otros. */}
          </span>
        </div>
      </section>
    </>
  );
}
