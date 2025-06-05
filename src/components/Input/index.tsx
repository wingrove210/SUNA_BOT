import React from "react";
import './index.css'
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className="mb-2">
      {label && (
        <label
          className="block mb-2 text-base font-medium text-white"
          htmlFor={props.id || props.name}
        >
          {label}
        </label>
      )}
      <input
        {...props}
        className={
          "input" +
          (props.className || "")
        }
      />
    </div>
  );
}
