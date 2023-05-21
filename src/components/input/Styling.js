import React from "react";
import { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import ClassNames from "classnames";

const StylingElement = (props) => {
  const ctx = useContext(ThemeContext);
  const themeName = String(props.name);
  const themeText = capitalize(themeName);
  const colorLeft = ClassNames(props.colorLeft, "styling-element-left");
  const colorRight = ClassNames(props.colorRight, "styling-element-right");

  return (
    <div className="relative flex h-12 sm:w-full">
      <div className={colorLeft}></div>
      <div className={colorRight}></div>
      <button
        className="absolute left-[50%] translate-x-[-50%] translate-y-[-50%]  top-[50%] rounded font-bold hover:text-xl text-white "
        onClick={() => ctx.onChangeTheme(themeName)}
        type="button">
        {themeText}
      </button>
    </div>
  );
};

const capitalize = (str) => {
  const arr = str.split(" ");

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
};

const Styling = () => {
  return (
    <div className="w-full h-full max-w-[700px] ">
      <h1 className="text-3xl text-sky-500 font-bold px-10 py-2">Theme:</h1>
      <div className="px-10 h-fit gap-2 flex flex-wrap ">
        <StylingElement
          name="marshmallow"
          colorLeft="bg-[#372948]"
          colorRight="bg-pink-400"
        />
        <StylingElement
          name="sky"
          colorLeft="bg-slate-800"
          colorRight="bg-sky-500"
        />
        <StylingElement
          name="earth"
          colorLeft="bg-[#395144]"
          colorRight="bg-[#EABC7F]"
        />
        <StylingElement
          name="space"
          colorLeft="bg-[#181818]"
          colorRight="bg-[#9759FF]"
        />
        <StylingElement
          name="desert sunset"
          colorLeft="bg-[#493323]"
          colorRight="bg-[#FFC996]"
        />
        <StylingElement
          name="maccabi"
          colorLeft="bg-[#203E5F]"
          colorRight="bg-[#FFCC00]"
        />
        <StylingElement
          name="mastik"
          colorLeft="bg-[#323232]"
          colorRight="bg-[#FA5EAB]"
        />
        <StylingElement
          name="lanister"
          colorLeft="bg-[#DFB160]"
          colorRight="bg-[#5F093D]"
        />
      </div>
    </div>
  );
};
export default Styling;
