import React from "react";
import { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import themes2 from "../UI/themes";
import capitalize from "../../tools/capitalize";

const StylingElement = ({ name, colorLeft, colorRight }) => {
  const ctx = useContext(ThemeContext);
  const themeLabel = capitalize(name);

  return (
    <div className="relative flex h-12 sm:w-full">
      <div className={`styling-element-left ${colorLeft}`}></div>
      <div className={`styling-element-right ${colorRight}`}></div>
      <button
        className="absolute left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] rounded font-bold hover:text-xl text-white "
        onClick={() => ctx.onChangeTheme(name)}
        type="button">
        {themeLabel}
      </button>
    </div>
  );
};

const Styling = () => {
  return (
    <div className="w-full h-full max-w-[700px] ">
      <h1 className="text-3xl text-sky-500 font-bold px-10 py-2">Theme:</h1>
      <div className="px-10 h-fit gap-2 flex flex-wrap ">
        {Array.from(themes2.entries()).map(([themeName, theme]) => {
          return (
            <StylingElement
              key={themeName}
              name={themeName}
              colorLeft={theme.bg}
              colorRight={theme.text.replace("text-", "bg-")}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Styling;
