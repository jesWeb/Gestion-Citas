import { useEffect, useState } from "react";
import { citas_db } from "../data/citas_db.js";

export default function UseCitas() {
  const [ListadeCitas, setListadeCitas] = useState(() => {
    const guardarCitas = localStorage.getItem("listaCitas");
    return guardarCitas ? JSON.parse(guardarCitas) : citas_db;
  });

  const [seleccionarCita, setSeleccionarCita] = useState("");
  //funcion para el select
  const selectCita = (id) => {
    const citaSelect = ListadeCitas.find((cita) => cita.id === id);
    setSeleccionarCita(citaSelect);
  };

  //funcion
  const actualizarCita = (id, available) => {
    const updateCita = ListadeCitas.map((cita) =>
      cita.id === id ? { ...cita, available } : cita
    );
    setListadeCitas(updateCita);
  };

  const reservarCita = (id) => {
    actualizarCita(id, false);
  };

  const cancelarCita = (id) => {
    actualizarCita(id, true);
  };

  const ResetearForm = () => {
    setListadeCitas(citas_db);
    setSeleccionarCita("");
  };

  useEffect(() => {
        localStorage.setItem('listaCitas', JSON.stringify(ListadeCitas))
  }, [ListadeCitas])
  

  return {
    ListadeCitas,
    seleccionarCita,
    selectCita,
    reservarCita,
    cancelarCita,
    ResetearForm,
  };
}
