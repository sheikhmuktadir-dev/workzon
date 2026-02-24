import { useState } from "react";

export default function usePasswordEyeToggle() {
  const [eyeToggle, setEyeToggle] = useState(false);

  const inputType = eyeToggle ? "text" : "password";

  const eyeToggleHandler = () => {
    setEyeToggle((prev) => !prev);
  };

  return { eyeToggle, inputType, eyeToggleHandler };
}
