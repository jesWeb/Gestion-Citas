export default function SelectCitas({
  ListadeCitas,
  selectCita,
  seleccionarCita,
  reservarCita,
 ResetearForm
}) {
  return (
    <>
      <div className="">
        <div className="bg-blue-500 m-10 p-4 rounded-lg">
          <label
            htmlFor="citas"
            className="block text-center font-semibold text-white mb-5"
          >
            Selecciona una cita:
          </label>
          <select
            id="citas"
            value={seleccionarCita}
            onChange={(e) => selectCita(Number(e.target.value))}
            className="block mx-auto px-3 py-3 border-gray-300 bg-white focus:outline-none rounded-md shadow-sm focus:ring-indigo-200  focus:border-indigo-500 sm:text-sm"
          >
            <option value="" disabled>
              selecciona una opcion
            </option>
            {ListadeCitas.map((cita) => (
              <option key={cita.id} value={cita.id} disabled={!cita.available}>
                {`${cita.date}, ${cita.time},${
                  cita.available ? "Disponible" : "No Disponible"
                }`}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            className="bg-lime-700 m-10 p-4 rounded-lg text-white"
            onClick={() => reservarCita(seleccionarCita.id)}
          >
            Reservar cita
          </button>
          <button
            onClick={ResetearForm}
            className="bg-red-600 m-10 p-4 rounded-lg text-white"
          >
            Resetear Formulario
          </button>
        </div>
      </div>
    </>
  );
}
