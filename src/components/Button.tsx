import React, { AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  css?: string;
}

const Button = ({ children, css, ...props }: ButtonProps) => {
  return (
    <a
      {...props}
      href="#"
      className={`${css} flex items-center justify-center gap-[10px] py-4 px-6 text-sm text-gray-100 font-bold bg-green-500  rounded uppercase transition-colors hover:bg-green-700`}
    >
      {children}
    </a>
  );
};

export default Button;
