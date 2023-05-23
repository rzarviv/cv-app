import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import { motion } from "framer-motion";

export default function Education({
  handleEducation,
  education,
  educationArr,
  handleEducationArr,
  handleSuccessModal,
  handleSuccessModalMessage,
}) {
  const [bulletPointInputArr, setBulletPointArr] = useState([]);

  function addBulletPointInput() {
    const bulletPointName = `bulletPoint${bulletPointInputArr.length + 1}`;

    return (
      <motion.input
        whileFocus={{ scale: 1.05 }}
        className="pl-2 w-full rounded shadow text-slate-400 border border-slate-400 focus:border-sky-500 focus:outline-none"
        type="text"
        id="bulletPoints"
        placeholder="EXAMPLE: Cumulative GPA: 3.8/4.0; Dean's List 4 semesters in a row... "
        name={bulletPointName}
        onChange={handleEducation}
        value={education.bulletPointName}
        key={uniqid()}></motion.input>
    );
  }
  function handleBulletPointsInput(e) {
    e.preventDefault();
    if (bulletPointInputArr.length <= 3) {
      setBulletPointArr((prevArr) => [...prevArr, addBulletPointInput()]);
    }
  }
  function clearBulletPoints() {
    setBulletPointArr(() => []);
  }
  useEffect(() => clearBulletPoints(), [educationArr]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-evenly sm:flex-col sm:max-w-[300px]">
        <div className="flex flex-col">
          <label htmlFor="company">Institution:</label>
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            className="rounded pl-2 shadow border border-slate-400 focus:border-sky-500 focus:outline-none"
            placeholder="Institution"
            name="institution"
            onChange={handleEducation}
            value={education.institution}></motion.input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="position">Degree/Course:</label>
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            className="rounded pl-2 shadow border border-slate-400 focus:border-sky-500 focus:outline-none"
            id="position"
            placeholder="Degree/Course/Seminar"
            name="degree"
            onChange={handleEducation}
            value={education.degree}></motion.input>
        </div>
      </div>
      <div className="flex justify-evenly sm:flex-col sm:max-w-[300px]">
        <div className="flex flex-col">
          <label htmlFor="from-date">
            From Date:
            <motion.input
              whileFocus={{ scale: 1.05 }}
              className="block w-full md:w-[258px] lg:w-[258px] rounded shadow border text-slate-400  border-slate-400 focus:border-sky-500 focus:outline-none"
              type="date"
              name="startDate"
              onChange={handleEducation}
              value={education.startDate}></motion.input>
          </label>
        </div>
        <div className="flex flex-col">
          <label htmlFor="to-date" className="items-center gap-2">
            To Date
            <span className="text-sm ml-2">(leave blank to mark present)</span>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              className="block w-full md:w-[258px] lg:w-[258px] rounded shadow text-slate-400 border border-slate-400 focus:border-sky-500 focus:outline-none"
              type="date"
              name="endDate"
              onChange={handleEducation}
              value={education.endDate}></motion.input>
          </label>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col w-[90%] gap-2">
          <label>Bullet Points: (4 Max)</label>
          <div className="flex flex-col gap-2">{bulletPointInputArr}</div>
          <motion.button
            type="button"
            whileTap={{ scale: 0.8 }}
            onClick={handleBulletPointsInput}
            className="bg-slate-400 text-white rounded">
            Add Bullet Point
          </motion.button>
        </div>
      </div>
      <div className="flex justify-evenly gap-2 py-2">
        <motion.button
          type="button"
          whileTap={{ scale: 0.8 }}
          onClick={() => {
            handleEducationArr();
            handleSuccessModal();
            handleSuccessModalMessage("Education Section Added");
          }}
          className="bg-sky-500 rounded shadow w-[90%] text-white">
          +Add Section
        </motion.button>
      </div>
    </div>
  );
}
