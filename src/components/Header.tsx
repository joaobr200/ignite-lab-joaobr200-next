import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { List, SignOut, X } from "phosphor-react";
import React, { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import { Ignite } from "./Icons";

const Header: React.FC = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext);
  const { data: session } = useSession();

  return (
    <header className="w-full bg-gray-700 border-b border-gray-600 p-4 flex items-center justify-between">
      <Ignite />
      <div className="flex items-center justify-center gap-6">
        <div
          onClick={() => setIsOpen((state) => !state)}
          className="hidden items-center justify-center gap-2 cursor-pointer lg:flex"
        >
          <span className="text-gray-100 text-sm">Aulas</span>
          {isOpen ? (
            <X size={32} className="text-blue-500" />
          ) : (
            <List size={32} className="text-blue-500" />
          )}
        </div>
        {session && (
          <div className="flex items-center justify-center gap-4">
            <Image
              src={session?.user?.image}
              alt="avatar img"
              width={32}
              height={32}
              className="border-2 border-blue-500 rounded-full"
              title={session.user?.name}
            />
            <SignOut
              className="text-md cursor-pointer"
              onClick={() => signOut()}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
