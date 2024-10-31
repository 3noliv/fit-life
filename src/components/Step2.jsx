import React, { useState } from "react";

const Step2 = ({ formData, handleChange, handleNext, handleBack }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.direccion.trim())
      newErrors.direccion = "La dirección es obligatoria.";
    if (!formData.ciudad.trim()) newErrors.ciudad = "La ciudad es obligatoria.";
    if (!/^\d{5}$/.test(formData.codigoPostal))
      newErrors.codigoPostal = "El código postal debe tener 5 dígitos.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextClick = () => {
    if (validate()) handleNext();
  };

  return (
    <div>
      <label htmlFor="direccion">Dirección:</label>
      <input
        type="text"
        name="direccion"
        value={formData.direccion}
        onChange={handleChange}
      />
      {errors.direccion && <p className="error">{errors.direccion}</p>}

      <label htmlFor="ciudad">Ciudad:</label>
      <input
        type="text"
        name="ciudad"
        value={formData.ciudad}
        onChange={handleChange}
      />
      {errors.ciudad && <p className="error">{errors.ciudad}</p>}

      <label htmlFor="codigoPostal">Código Postal:</label>
      <input
        type="text"
        name="codigoPostal"
        value={formData.codigoPostal}
        onChange={handleChange}
      />
      {errors.codigoPostal && <p className="error">{errors.codigoPostal}</p>}

      <button onClick={handleBack}>Regresar</button>
      <button onClick={handleNextClick}>Siguiente</button>
    </div>
  );
};

export default Step2;
