// src/services/localStorage.js

export const initializeDefaultData = () => {
  if (!localStorage.getItem("clients")) {
    localStorage.setItem("clients", JSON.stringify([]));
  }

  if (!localStorage.getItem("gallery")) {
    localStorage.setItem("gallery", JSON.stringify([]));
  }
};
