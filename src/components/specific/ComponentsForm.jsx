import React, { useState } from "react";
export function InputForm(props) {
  return (
    <input
      type={props.type}
      className="color-text p-4 w-full py-2 mt-2 px-3 border-b-2 border-gray-400 outline-none focus:border-blue-500 focus:ring-blue-500"
      name={props.name}
      placeholder={props.placeholder}
      required
      autoFocus={props.autofocus ? true : false}
      onChange={props.onChange}
      value={props.value}
    />
  );
}

export function InputForm2(props) {
  return (
    <div>
    <label className="text-white" htmlFor="email">{props.labelName}</label>
    <input
    className="bg-transparent text-white w-full py-2 mb-4 px-3 border-b-2 border-gray-400 outline-none focus:border-blue-500 focus:ring-blue-500"
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      autoFocus={props.autofocus ? true : false}
      onChange={props.onChange}
      value={props.value}
    />
  </div>
  )
}