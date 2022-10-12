import { FC } from "react";
import "./Button.scss";
export const Button: FC<any> = ({ children, ...props }) => {
  return (
    <div className="wrapper" {...props}>
      <div>{children}</div>
    </div>
  );
};
