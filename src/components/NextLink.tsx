import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

type NextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  underline?: boolean;
  className?: string;
   href: string | { pathname : string ; query : {id : string}}
};

export const NextLink: React.FC<NextLinkProps> = ({
  children,
  underline = false,
  className = "",
  href,
  ...props
}) => {
  const border = underline
    ? "border-b border-indigo-300 hover:border-indigo-400"
    : "";
 
  
 
    return (
      <Link href={href} className={`${className} ${border}`} {...props}>
        {children}
      </Link>
    );
  

 
};
