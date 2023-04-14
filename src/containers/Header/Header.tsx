import React from "react";

import HeaderComponents from "components/Header/Header";

const Header: React.FC = () => {
  const handleMenuClick = () => {
    console.log("menu click");
  };

  const handleSearchClick = () => {
    console.log("search click");
  };

  // change function name
  const handleAvatarClick = () => {
    console.log("avatar click");
  };

  const handleSearchChange = () => {
    console.log("search change");
  };

  return (
    <HeaderComponents
      onMenuClick={handleMenuClick}
      onSearchClick={handleSearchClick}
      onAvatarClick={handleAvatarClick}
      onSearchChange={handleSearchChange}
    />
  );
};

export default Header;
