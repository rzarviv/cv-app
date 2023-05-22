import { formatDate, formatDateOrBlank } from "../../tools/formatDate";
import uniqid from "uniqid";
import { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import BulletPoint from "../UI/bulletPoint";

export default function WorkExpOutput({ educationArr }) {
  const ctx = useContext(ThemeContext);
  return (
    <div className="flex flex-col border-sky-500 px-8">
      {educationArr.length >= 1 ? (
        <h1
          className={`font-medium  ${ctx.theme.text} border-b-2 text-lg ${ctx.theme.border}`}>
          Education
        </h1>
      ) : (
        ""
      )}
      {educationArr.map((education) => (
        <div className="w-full flex-col pl-3" key={uniqid()}>
          <div className="flex  justify-between">
            <div className="flex gap-2">
              <h1 className="font-medium">{education.institution}</h1>
              <p>-</p>
              <p className="italic">{education.degree}</p>
            </div>
            <div className="flex items-center  gap-2">
              <p className="text-sm italic">
                {formatDateOrBlank(education.startDate)}
              </p>
              <p>-</p>
              <p className="text-sm italic">{formatDate(education.endDate)}</p>
            </div>
          </div>
          <div className="flex flex-col pl-3">
            <BulletPoint text={education.bulletPoint1}/>
            <BulletPoint text={education.bulletPoint2}/>
            <BulletPoint text={education.bulletPoint3}/>
            <BulletPoint text={education.bulletPoint4}/>
          </div>
        </div>
      ))}
    </div>
  );
}
