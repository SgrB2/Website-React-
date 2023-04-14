import React from "react";

import pepeTrump from "./img/pepetrump.jpeg"
import pepeNaked from "./img/pepenaked.jpg"

interface ImageProps {
    className?: string;
    name: "pepenaked" | "pepetrump"
  }
  
  const images: Record<ImageProps["name"], string> = {
    pepenaked: pepeNaked,
    pepetrump: pepeTrump,
    // search: SearchIcon,
    // person: PersonIcon,
  };
  
  const Image: React.FC<ImageProps> = ({ name, className }) => {
    return <img className={className} src={images[name]} alt={name} />;
  };
  
  export default Image;