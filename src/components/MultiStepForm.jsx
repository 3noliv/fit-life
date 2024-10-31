import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import "./../styles/MultiStepForm.css";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    codigoPostal: "",
    tipoEntrenamiento: "",
    objetivo: "",
    disponibilidad: "",
    metodoPago: "",
    numeroTarjeta: "",
    cvv: "",
    fechaCaducidad: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      handleSubmit(); // Llamar a handleSubmit en el último paso
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://tu-api.com/endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error en la conexión");
      }

      const data = await response.json();
      console.log("Respuesta de la API:", data);
      alert("Formulario enviado con éxito!");
    } catch (error) {
      console.error("Error en la conexión:", error);
      alert("Error en el envío. Por favor, inténtelo de nuevo más tarde.");
    }
  };

  return (
    <div className="form-container">
      {step === 1 && (
        <Step1
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
        />
      )}
      {step === 2 && (
        <Step2
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
      {step === 3 && (
        <Step3
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
      {step === 4 && (
        <Step4
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
    </div>
  );
};

export default MultiStepForm;
