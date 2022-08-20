import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="text-7xl p-10 shadow-md rounded-md">{props.label}</button>;
};

export default Button;