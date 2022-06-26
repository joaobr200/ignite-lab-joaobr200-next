import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  useState,
} from "react";

interface MenuContextState {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

export const MenuContext = createContext({} as MenuContextState);

export const MenuContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};
