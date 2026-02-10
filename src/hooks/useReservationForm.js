import { useState } from "react";
import { validateField, validateForm } from "../utils/formValidation";

export const useReservationForm = (initialValues, requiredFields) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validace pouze pokud bylo pole již touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (onSuccess) => (e) => {
    e.preventDefault();

    // Validace všech required polí
    const newErrors = validateForm(formData, requiredFields);
    setErrors(newErrors);

    // Označ všechna pole jako touched
    const allTouched = {};
    requiredFields.forEach((field) => {
      allTouched[field] = true;
    });
    setTouched(allTouched);

    // Pokud nejsou chyby, zavolej callback
    if (Object.keys(newErrors).length === 0) {
      onSuccess(formData);
    }
  };

  const updateField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    updateField,
    resetForm,
  };
};
