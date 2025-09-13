import { Icons } from "../../assets";
import { NavItem } from "../UI/header/nav-item";

export const TopContent = () => {
  return (
    <div className="w-full bg-mobile-top-content lg:bg-top-content bg-center bg-cover">
      <div className="absolute inset-0 bg-[rgba(29,47,48,1)] opacity-70 h-[344px] lg:h-[490px]"></div>
      <div className="relative z-10 flex flex-col gap-[30px] lg:gap-4 px-8 lg:px-16 h-[344px] lg:h-[490px] max-w-[1536px] mx-auto">
        <nav className="flex gap-8 lg:hidden">
          <NavItem text="Каталог" />
          <NavItem text="Галерея" />
          <NavItem text="О лаборатории" />
        </nav>
        <h1 className="text-almost-white text-5xl lg:text-6xl w=[256px] lg:w-[788px] lg:mt-[115px]">
          Крупнейшая коллекция природных артефактов
        </h1>
        <p className="hidden lg:block text-almost-white text-base w-[635px]">
          Являясь всего лишь частью общей картины, интерактивные прототипы,
          которые представляют собой яркий пример европейского типа политической
          и социальной культуры.
        </p>
        <div className="flex items-center gap-2  w-40">
          <span className="text-premium-green text-base">Исследовать</span>
          <Icons.GreenLongArrow />
        </div>
      </div>
    </div>
  );
};
