import React, { useState } from "react";

const Step1 = ({ formData, handleChange, handleNext }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    if (!formData.email.includes("@"))
      newErrors.email = "El correo electrónico no es válido.";
    if (!/^\d{9}$/.test(formData.telefono))
      newErrors.telefono = "El teléfono debe tener 9 dígitos.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextClick = () => {
    if (validate()) handleNext();
  };

  return (
    <div>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
      />
      {errors.nombre && <p className="error">{errors.nombre}</p>}

      <label htmlFor="email">Correo Electrónico:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label htmlFor="telefono">Teléfono:</label>
      <input
        type="text"
        name="telefono"
        value={formData.telefono}
        onChange={handleChange}
      />
      {errors.telefono && <p className="error">{errors.telefono}</p>}

      <button onClick={handleNextClick}>Siguiente</button>
    </div>
  );
};

export default Step1;
