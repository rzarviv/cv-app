import uniqid from "uniqid";
import { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import BulletPoint from "../UI/bulletPoint";

export default function ProjectOutput({ projectsArr }) {
  const ctx = useContext(ThemeContext);
  return (
    <div className="flex flex-col gap-2 border-sky-500 px-8">
      {projectsArr.length >= 1 ? (
        <h1
          className={`font-medium ${ctx.theme.text} text-lg border-b-2 ${ctx.theme.border}`}>
          Projects
        </h1>
      ) : (
        ""
      )}
      {projectsArr.map((project) => (
        <div className="w-full flex-col pl-3" key={uniqid()}>
          <div className="flex  justify-between">
            <div className="flex gap-2 items-center">
              <h1 className="font-medium">{project.projectName}</h1>
              <p>-</p>
              <p className="italic text-sm">{project.tech}</p>
            </div>
          </div>
          <div className="flex flex-col pl-3">
            <BulletPoint text={project.bulletPoint1} />
            <BulletPoint text={project.bulletPoint2} />
            <BulletPoint text={project.bulletPoint3} />
            <BulletPoint text={project.bulletPoint4} />
          </div>
        </div>
      ))}
    </div>
  );
}
