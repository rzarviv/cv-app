import {createContext} from "react";
import themes from "../components/UI/themes";

const ThemeContext = createContext({
  /*theme: {
    bg: "bg-slate-800",
    text: "text-sky-500",
    icons: "text-sky-600",
  },*/
  theme: themes.get("sky")
});

export default ThemeContext;
