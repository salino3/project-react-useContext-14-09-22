import { useState } from "react";

export const Booleano = () => {

const [validacion, setValidacion] = useState(false);

  return {
    validacion,
    setValidacion,
  };
}

