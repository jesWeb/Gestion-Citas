import { useState } from "react";
import CalendarioCitas from "./components/CalendarioCitas";
import SelectCitas from "./components/SelectCitas";
import UseCitas from "./hooks/UseCitas";

function App() {
  const [count, setCount] = useState(0);
  //props de usecita
  const {
    ListadeCitas,
    seleccionarCita,
    selectCita,
    reservarCita,
    cancelarCita,
    ResetearForm,
  } = UseCitas();

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header className="bg-cyan-200">
          <h1 className="text-2xl font-medium text-center pt-4">
            Gestor de Citas Medicas
          </h1>
        </header>
        <main className="flex-grow">
          <div className="bg-sky-100 flex justify-center items-center">
            <CalendarioCitas
              ListadeCitas={ListadeCitas}
              cancelarCita={cancelarCita}
            />
          </div>
          <div className="bg-sky-50 flex justify-center items-center">
            <SelectCitas
              ListadeCitas={ListadeCitas}
              seleccionarCita={seleccionarCita}
              selectCita={selectCita}
              reservarCita={reservarCita}
              ResetearForm={ResetearForm}
            />
          </div>
        </main>

        <footer className="bg-cyan-950 flex justify-center items-center w-full py-8 mt-auto">
          <p className="text-white">Todos los derechos reservados</p>
        </footer>
      </div>
    </>
  );
}

export default App;
