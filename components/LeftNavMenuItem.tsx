import React from "react";

interface LeftMenuTypes {
  id: string;
  text: string;
  icon: React.JSX.Element;
  className: string;
  action: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const LeftNavMenuItem = ({
  id,
  text,
  icon,
  className,
  action,
}: LeftMenuTypes) => {
  return (
    <>
      <div
        key={id}
        className={
          "text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15]" +
          className
        }
        onClick={action}
      >
        <span className="text-xl mr-5">{icon}</span>
        {text}
      </div>
    </>
  );
};

export default LeftNavMenuItem;
