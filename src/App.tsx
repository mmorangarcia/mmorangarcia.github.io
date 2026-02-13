import CurriculumComponent from "./components/Curriculum/CurriculumComponent";


function App() {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1, // Esto lo manda al fondo
            pointerEvents: "none", // Para que no interfiera con clics en tu CV
          }}
        >
        </div>
        <CurriculumComponent />
      </div>
    </>
  );
}

export default App;
