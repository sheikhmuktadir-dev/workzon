import { useEffect } from "react";

export default function useAutoDismiss(value, setter, delay = 3000) {
  useEffect(() => {
    if (!value) return;

    const timer = setTimeout(() => {
      setter("");
    }, delay);

    return () => clearTimeout(timer);
  }, [value, setter, delay]);
}
