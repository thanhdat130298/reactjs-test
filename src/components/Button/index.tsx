import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import "./Button.scss";
interface IButton {
  href?: string;
  children: ReactElement | string;
  onClick?: () => void;
}
export const Button: FC<IButton> = ({ children, href, ...props }) => {
  return (
    <>
      {href ? (
        <Link className="link" {...props} to={href}>
          {children}
        </Link>
      ) : (
        <div className="button" {...props}>
          {children}
        </div>
      )}
    </>
  );
};
