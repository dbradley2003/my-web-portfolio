import React, { ReactNode } from "react";

interface LayoutProps {
  left: ReactNode;
  right: ReactNode;
  leftWeight: number;
  rightWeight: number;
  leftClassName: string;
  rightClassName: string;
}

export const Layout: React.FC<LayoutProps> = ({
  left: Left,
  right: Right,
  leftWeight,
  rightWeight,
  leftClassName,
  rightClassName,
}) => {
  return (
    <div className="flex ">
      <div className={` ${leftClassName} || ''`} style={{ flex: leftWeight }}>
        {Left}
      </div>
      <div className={` ${rightClassName} || ''`} style={{ flex: rightWeight }}>
        {Right}
      </div>
    </div>
  );
};
