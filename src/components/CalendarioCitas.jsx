import React from "react";

export default function CalendarioCitas({ ListadeCitas, cancelarCita }) {
  return (
    <>
      <div>
        <div className=" bg-cyan-300 rounde-lg text-center">
          <h2 className="p-4 m-10 font-bold">Programacion de Citas Medicas</h2>
        </div>

        <div className="bg-sky-600 p-4 m-2 text-center rounded-lg">
          <h3 className="font-semibold mb-5">Citas Disponibles:</h3>
          {ListadeCitas.map((cita) => (
            <div key={cita.id} className="flex justify-center m-2 mb-2">
              <p>{`${cita.date}, ${cita.time},${
                cita.available ? "Disponible" : "No Disponible"
              }`}</p>
              {!cita.available && (
                <button
                  onClick={() => cancelarCita(cita.id)}
                  className="bg-red-600 m-10 p-4 rounded-lg text-white"
                >
                  cancelar
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
