import React from "react";
import { AnchorHTMLAttributes } from "react";

type LoaderProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  className?: string;
};

export const Loader: React.FC<LoaderProps> = () => {
  return (
    <div className="load-bar">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export const Loading: React.FC<LoaderProps> = () => {
  return <p>Loading...</p>;
};
