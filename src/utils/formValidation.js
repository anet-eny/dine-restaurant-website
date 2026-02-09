export const validators = {
  name: (value) => {
    if (value.trim() === "") {
      return "This field is required";
    }
    return "";
  },

  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value.trim() === "") {
      return "This field is required";
    }
    if (!emailRegex.test(value)) {
      return "This field is incomplete";
    }
    return "";
  },

  dateField: (value) => {
    if (value === "") {
      return "This field is incomplete";
    }
    if (!/^\d+$/.test(value)) {
      return "Please enter numbers only";
    }
    return "";
  },

  month: (value) => {
    const error = validators.dateField(value);
    if (error) return error;

    const num = parseInt(value, 10);
    if (num < 1 || num > 12) {
      return "Invalid month";
    }
    return "";
  },

  day: (value) => {
    const error = validators.dateField(value);
    if (error) return error;

    const num = parseInt(value, 10);
    if (num < 1 || num > 31) {
      return "Invalid day";
    }
    return "";
  },

  year: (value) => {
    const error = validators.dateField(value);
    if (error) return error;

    const num = parseInt(value, 10);
    const currentYear = new Date().getFullYear();
    if (num < currentYear || num > currentYear + 10) {
      return "Invalid year";
    }
    return "";
  },

  hours: (value) => {
    const error = validators.dateField(value);
    if (error) return error;

    const num = parseInt(value, 10);
    if (num < 1 || num > 12) {
      return "Invalid hour";
    }
    return "";
  },

  minutes: (value) => {
    const error = validators.dateField(value);
    if (error) return error;

    const num = parseInt(value, 10);
    if (num < 0 || num > 59) {
      return "Invalid minutes";
    }
    return "";
  },
};

export const validateField = (name, value) => {
  const validator = validators[name];
  return validator ? validator(value) : "";
};

export const validateForm = (formData, requiredFields) => {
  const errors = {};
  requiredFields.forEach((field) => {
    const error = validateField(field, formData[field]);
    if (error) {
      errors[field] = error;
    }
  });
  return errors;
};
