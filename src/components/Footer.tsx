import { memo } from "react";
import { Rocketseat } from "./Icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 px-8 h-[56px]">
      <div className="w-full max-w-[1100px] mx-auto flex items-center justify-between border-t border-gray-500 p-4 sm:flex-col sm:gap-6 sm:text-center">
        <div className="flex items-center gap-6 md:flex-col md:gap-4">
          <Rocketseat />
          <span className="text-base text-gray-300 sm:text-sm">
            Rocketseat - Todos os direitos reservados
          </span>
        </div>
        <div>
          <a href="" className="text-base text-gray-300 sm:text-sm">
            Políticas de privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
