import { ReactNode } from "react";

interface SectionProps {
  className?: string;
  id?: string;
  children: ReactNode;
}

export const Section = ({ className, id, children }: SectionProps) => {
  return (
    <div
      id={id}
      className={`relative py-10 lg:py-16 xl:py-20 ${className || ""}`}
    >
      {children}
    </div>
  );
};

{
  /* <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />

     
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" /> */
}
