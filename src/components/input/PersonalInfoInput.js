import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ErrorLabel from "../UI/ErrorLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object({
  firstName: yup
    .string()
    .matches(/^[A-Za-z]+$/i, { excludeEmptyString: true })
    .required(),
  lastName: yup
    .string()
    .matches(/^[A-Za-z]+$/i, { excludeEmptyString: true })
    .required(),
  email: yup.string().email().required(),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required(),
  linkedinLink: yup.string().url().nullable().optional(),
  websiteLink: yup.string().url().nullable().optional(),
  summary: yup.string().nullable().optional(),
});


export default function PersonalInfoInput({
  handlePersonalInfoChange,
  personalInfo,
  handleSummary,
  showSummary,
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form className="flex-col flex gap-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-evenly gap-2 sm:flex-col sm:max-w-[300px]">
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name:</label>
          <motion.input
            {...register("firstName")}
            aria-invalid={errors.firstName ? "true" : "false"}
            whileFocus={{ scale: 1.05 }}
            className="form-input invalid:border-pink-500  focus:invalid:border-pink-500 focus:invalid:ring-pink-500 invalid:text-pink-600"
            onChange={handlePersonalInfoChange}
            type="text"
            placeholder="First Name"
            name="firstName"
            value={personalInfo.firstName}></motion.input>
          {errors.lastName?.type && (
            <ErrorLabel text={errors.firstName?.message}></ErrorLabel>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name:</label>
          <motion.input
            {...register("lastName", { required: true })}
            whileFocus={{ scale: 1.05 }}
            className="form-input"
            border="true"
            onChange={handlePersonalInfoChange}
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={personalInfo.lastName}></motion.input>
          {errors.lastName?.type && (
            <ErrorLabel text={errors.lastName?.message}></ErrorLabel>
          )}
        </div>
      </div>
      <div className="flex justify-evenly gap-2 sm:flex-col sm:max-w-[300px]">
        <div className="flex flex-col">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <motion.input
            {...register("phoneNumber")}
            whileFocus={{ scale: 1.05 }}
            className="form-input invalid:border-pink-500  focus:invalid:border-pink-500 focus:invalid:ring-pink-500 invalid:text-pink-600"
            border="true"
            onChange={handlePersonalInfoChange}
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={personalInfo.phoneNumber}
            /*pattern="^(0?(([23489]{1}[0-9]{7})|[57]{1}[0-9]{8})+)$"*/
          ></motion.input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <motion.input
            {...register("email")}
            whileFocus={{ scale: 1.05 }}
            className="form-input invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 invalid:text-pink-600"
            border="true"
            onChange={handlePersonalInfoChange}
            type="email"
            placeholder="Email"
            name="email"
            value={personalInfo.email}
            pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"></motion.input>
        </div>
      </div>
      <div className="flex justify-evenly gap-2 sm:flex-col sm:max-w-[300px]">
        <div className="flex flex-col">
          <label htmlFor="linkedinLink">Linkedin Link:</label>
          <motion.input
            {...register("linkedinLink")}
            whileFocus={{ scale: 1.05 }}
            className="form-input"
            onChange={handlePersonalInfoChange}
            type="text"
            placeholder="Linkedin Link"
            name="linkedinLink"
            value={personalInfo.linkedinLink}></motion.input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="websiteLink">Portfolio Link:</label>
          <motion.input
            {...register("websiteLink")}
            whileFocus={{ scale: 1.05 }}
            className="form-input"
            onChange={handlePersonalInfoChange}
            type="text"
            placeholder="Portfolio Website / Github Link"
            name="websiteLink"
            value={personalInfo.websiteLink}></motion.input>
        </div>
      </div>
      <span className="flex gap-2 justify-center">
        <label htmlFor="showSummary">
          Add Summary Section?
          <motion.input
            {...register("showSummary")}
            whileFocus={{ scale: 1.05 }}
            className="checked:bg-orange-700 bg-slate-700 ml-1"
            type="checkbox"
            value="showSummary"
            onChange={handleSummary}></motion.input>
        </label>
      </span>
      {showSummary && (
        <div className="flex justify-center">
          <textarea
           {...register("summary")}
            placeholder="Write a descriptive summary about you here..."
            value={personalInfo.summary}
            name="summary"
            onChange={handlePersonalInfoChange}
            className="h-24 w-[80%] p-2 border focus:border-sky-500 focus:outline-none"></textarea>
        </div>
      )}
    </form>
  );
}
