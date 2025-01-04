import { ReactNode, forwardRef } from "react";

interface SectionProps {
  className?: string;
  id?: string;
  children: ReactNode;
}

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ className, id, children }, ref) => {
    return (
      <div
        id={id}
        ref={ref}
        className={`relative py-10 lg:py-16 xl:py-20 ${className || ""}`}
      >
        {children}
      </div>
    );
  }
);
