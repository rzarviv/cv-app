import uniqid from "uniqid";
import ThemeContext from "../../store/theme-context";
import { useContext } from "react";
import Skill from "../UI/skill";

export default function WorkExpOutput({ skills }) {
  const ctx = useContext(ThemeContext);

  return (
    <div className={`flex flex-col px-8`}>
      {skills.skill1 !== "" ? (
        <h1
          className={`font-medium  ${ctx.theme.text} text-lg border-b-2 ${ctx.theme.border}`}>
          Skills
        </h1>
      ) : (
        ""
      )}

      <div className="w-full flex-col py-2" key={uniqid()}>
        <div className="flex pl-2 gap-2 flex-wrap">
          <Skill text={skills.skill1} />
          <Skill text={skills.skill2} />
          <Skill text={skills.skill3} />
          <Skill text={skills.skill4} />
          <Skill text={skills.skill5} />
          <Skill text={skills.skill6} />
          <Skill text={skills.skill7} />
          <Skill text={skills.skill8} />
          <Skill text={skills.skill9} />
          <Skill text={skills.skill10} />
        </div>
      </div>
    </div>
  );
}
