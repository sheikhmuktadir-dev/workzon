import { useState } from "react";

export default function useToggle() {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return { toggle, setToggle, toggleHandler };
}
