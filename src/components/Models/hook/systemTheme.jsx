import { useEffect, useState } from "react";

const useSystemTheme = () => {
  const getCurrentTheme = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const [theme, setTheme] = useState(getCurrentTheme);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => setTheme(media.matches ? "dark" : "light");

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return theme;
};

export default useSystemTheme;
