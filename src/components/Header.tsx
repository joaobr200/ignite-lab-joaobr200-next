import { List, X } from "phosphor-react";
import React, { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import { Ignite } from "./Icons";

const Header: React.FC = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext);

  return (
    <header className="w-full bg-gray-700 border-b border-gray-600 p-4 flex items-center justify-center lg:justify-between">
      <Ignite />
      <div
        className="hidden items-center justify-center gap-2 lg:flex"
        onClick={() => setIsOpen((state) => !state)}
      >
        <span className="text-gray-100 text-sm">Aulas</span>
        {isOpen ? (
          <X size={32} className="text-blue-500" />
        ) : (
          <List size={32} className="text-blue-500" />
        )}
      </div>
    </header>
  );
};

export default Header;
