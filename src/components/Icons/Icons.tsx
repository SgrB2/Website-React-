import React from "react";

import CloseIcon from "./svg/close.svg";
import MenuIcon from "./svg/menu.svg";
import SearchIcon from "./svg/search.svg";
import PersonIcon from "./svg/person.svg";

interface IconsProps {
  className?: string;
  name: "close" | "menu" | "search" | "person";
}

const icons: Record<IconsProps["name"], string> = {
  close: CloseIcon,
  menu: MenuIcon,
  search: SearchIcon,
  person: PersonIcon,
};

const Icons: React.FC<IconsProps> = ({ name, className }) => {
  return <img className={className} src={icons[name]} alt={name} />;
};

export default Icons;
