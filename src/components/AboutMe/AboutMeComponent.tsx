import "./AboutMeComponent.css";

export default function AboutMeComponent() {
  return (
    <>
      <section className="about-me-section">
        <h1 className="about-me-title">Sobre Mi</h1>
        <div className="about-me-container">
          <span className="text-2xl text-(--black)">
            Desarrollador <b>Frontend</b> y <b>Backend</b> con 6 años de
            experiencia en
            <b> Salesforce Commerce Cloud</b>. <br />
            Estoy siempre abierto al aprendizaje y a los retos, soy una persona
            proactiva con ganas de seguir aprendiendo y practicando. Me gusta
            trabajar en un ambiente laboral amable y dinámico, donde podamos
            aprender unos de otros.
          </span>
        </div>
      </section>
    </>
  );
}
