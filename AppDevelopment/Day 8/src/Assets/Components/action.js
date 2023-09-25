// src/Assets/Components/Patient/actions.js
export const updateFormData = (formData) => ({
    type: "UPDATE_FORM_DATA",
    payload: formData,
  });
  
  export const resetFormData = () => ({
    type: "RESET_FORM_DATA",
  });
  