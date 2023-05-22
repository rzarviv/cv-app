import ThemeContext from "../../store/theme-context";
import { useContext } from "react";

const Skill = ({ text }) => {
  const ctx = useContext(ThemeContext);
  return text ? (
    <p className={`text-white ${ctx.theme.bg} rounded-md px-2`}>{text}</p>
  ) : (
    ""
  );
};

export default Skill;