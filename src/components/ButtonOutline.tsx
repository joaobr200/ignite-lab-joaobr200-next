import React, { PropsWithChildren } from "react";

interface ButtonProps {
  children: React.ReactNode;
  css?: string;
}

const ButtonOutline = ({ children, css }: ButtonProps) => {
  return (
    <a
      href=""
      className={`${css} flex items-center justify-center gap-3 text-sm text-blue-500 font-bold border border-blue-500 bg-transparent py-4 px-6 rounded  uppercase transition-colors hover:bg-blue-500 hover:text-gray-900`}
    >
      {children}
    </a>
  );
};

export default ButtonOutline;
