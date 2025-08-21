import React from "react";

const isAdminRoute =
  typeof window !== "undefined" &&
  window.location.pathname.startsWith("/dashboard");

interface ImageProps {
  Src: string;
  Alt: string;
  className: string;
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}

const Image: React.FC<ImageProps> = ({ Src, Alt, className, onClick }) => {
  return (
    <img
      src={Src}
      alt={Alt}
      className={className}
      onClick={onClick}
      {...(!isAdminRoute && {
        "data-aos": "fade-up",
        "data-aos-delay": "100",
      })}
    />
  );
};

export default Image;
