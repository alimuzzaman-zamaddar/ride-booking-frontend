import React from "react";
import { cn } from "../../../lib/utils/utils";

type HeadingProps = {
  Txt: string | React.ReactNode;
  className?: string;
  Variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Heading: React.FC<HeadingProps> = ({
  Txt,
  className,
  Variant = "h2",
}) => {
  const Component = Variant;

  const isAdminRoute =
    typeof window !== "undefined" &&
    window.location.pathname.startsWith("/dashboard");

  return (
    <Component
      {...(!isAdminRoute && {
        "data-aos": "fade-up",
        "data-aos-delay": "100",
      })}
      className={cn("defaut-design", className)}
    >
      {Txt}
    </Component>
  );
};

export default Heading;
