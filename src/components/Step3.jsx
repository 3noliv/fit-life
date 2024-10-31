import React, { useState } from "react";

const Step3 = ({ formData, handleChange, handleNext, handleBack }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.tipoEntrenamiento)
      newErrors.tipoEntrenamiento = "Elige un tipo de entrenamiento.";
    if (!formData.objetivos) newErrors.objetivos = "Elige un objetivo.";
    if (!formData.disponibilidad)
      newErrors.disponibilidad = "Elige una disponibilidad.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextClick = () => {
    if (validate()) handleNext();
  };

  return (
    <div>
      <label htmlFor="tipoEntrenamiento">Tipo de Entrenamiento:</label>
      <select
        name="tipoEntrenamiento"
        value={formData.tipoEntrenamiento}
        onChange={handleChange}
      >
        <option value="">Selecciona</option>
        <option value="Cardio">Cardio</option>
        <option value="Fuerza">Fuerza</option>
        <option value="Flexibilidad">Flexibilidad</option>
      </select>
      {errors.tipoEntrenamiento && (
        <p className="error">{errors.tipoEntrenamiento}</p>
      )}

      <label htmlFor="objetivos">Objetivos:</label>
      <select
        name="objetivos"
        value={formData.objetivos}
        onChange={handleChange}
      >
        <option value="">Selecciona</option>
        <option value="Pérdida de peso">Pérdida de peso</option>
        <option value="Ganancia muscular">Ganancia muscular</option>
        <option value="Resistencia">Resistencia</option>
      </select>
      {errors.objetivos && <p className="error">{errors.objetivos}</p>}

      <label htmlFor="disponibilidad">Disponibilidad:</label>
      <select
        name="disponibilidad"
        value={formData.disponibilidad}
        onChange={handleChange}
      >
        <option value="">Selecciona</option>
        <option value="Diario">Diario</option>
        <option value="Semanal">Semanal</option>
        <option value="Fin de semana">Fin de semana</option>
      </select>
      {errors.disponibilidad && (
        <p className="error">{errors.disponibilidad}</p>
      )}

      <button onClick={handleBack}>Regresar</button>
      <button onClick={handleNextClick}>Siguiente</button>
    </div>
  );
};

export default Step3;
