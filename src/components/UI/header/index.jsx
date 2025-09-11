import { Icons } from "../../../assets";
import { IconButton } from "../Button/IconButton";
import { NavItem } from "./nav-item";

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 lg:px-16  bg-back-color">
      <div>
        <IconButton customFrame>
          <Icons.Logo />
        </IconButton>
      </div>
      <nav className="hidden lg:flex gap-16">
        <NavItem text="Каталог" />
        <NavItem text="Галерея" />
        <NavItem text="О лаборатории" />
        <NavItem text="Контакты" />
      </nav>
      <div className="flex gap-8 lg:gap-16">
        <IconButton>
          <Icons.Search />
        </IconButton>
        <IconButton>
          <Icons.LogIn />
        </IconButton>
      </div>
    </header>
  );
};
