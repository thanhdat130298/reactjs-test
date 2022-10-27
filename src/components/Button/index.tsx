import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import ButtonAntd from "antd/lib/button";
import clsx from "clsx";

interface IButton {
  href?: string;
  className?: string | undefined;
  type?:
    | "link"
    | "text"
    | "ghost"
    | "default"
    | "primary"
    | "dashed"
    | undefined;
  htmlType?: "button" | "submit" | "reset" | undefined;

  children: ReactElement | string;
  onClick?: () => void;
}
export const Button: FC<IButton> = ({
  children,
  href,
  type,
  htmlType,
  className,
  ...props
}) => {
  return (
    <>
      {href ? (
        <Link className={styles.link} {...props} to={href}>
          {children}
        </Link>
      ) : (
        <ButtonAntd
          type={type || "default"}
          htmlType={htmlType}
          className={clsx(styles.button, type && styles[type], className)}
          {...props}
        >
          {children}
        </ButtonAntd>
      )}
    </>
  );
};
