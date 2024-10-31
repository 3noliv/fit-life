import React, { useState } from "react";

const Step4 = ({ formData, handleChange, handleNext, handleBack }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.metodoPago) newErrors.metodoPago = "Elige un método de pago.";
    if (formData.metodoPago === "Tarjeta de Crédito") {
      if (!/^\d{16}$/.test(formData.numeroTarjeta))
        newErrors.numeroTarjeta = "Debe tener 16 dígitos.";
      if (!/^\d{3}$/.test(formData.cvv))
        newErrors.cvv = "Debe tener 3 dígitos.";
      if (!/^\d{2}\/\d{2}$/.test(formData.fechaExpiracion))
        newErrors.fechaExpiracion = "Formato MM/AA.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextClick = () => {
    if (validate()) handleNext();
  };

  return (
    <div>
      <label htmlFor="metodoPago">Método de Pago:</label>
      <select
        name="metodoPago"
        value={formData.metodoPago}
        onChange={handleChange}
      >
        <option value="">Selecciona</option>
        <option value="Tarjeta de Crédito">Tarjeta de Crédito</option>
        <option value="PayPal">PayPal</option>
      </select>
      {errors.metodoPago && <p className="error">{errors.metodoPago}</p>}

      {formData.metodoPago === "Tarjeta de Crédito" && (
        <>
          <label htmlFor="numeroTarjeta">Número de Tarjeta:</label>
          <input
            type="text"
            name="numeroTarjeta"
            value={formData.numeroTarjeta}
            onChange={handleChange}
          />
          {errors.numeroTarjeta && (
            <p className="error">{errors.numeroTarjeta}</p>
          )}

          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
          />
          {errors.cvv && <p className="error">{errors.cvv}</p>}

          <label htmlFor="fechaExpiracion">Fecha de Expiración (MM/AA):</label>
          <input
            type="text"
            name="fechaExpiracion"
            value={formData.fechaExpiracion}
            onChange={handleChange}
          />
          {errors.fechaExpiracion && (
            <p className="error">{errors.fechaExpiracion}</p>
          )}
        </>
      )}

      <button onClick={handleBack}>Regresar</button>
      <button onClick={handleNextClick}>Enviar</button>
    </div>
  );
};

export default Step4;
