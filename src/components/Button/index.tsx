import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import ButtonAntd from "antd/lib/button";

interface IButton {
  href?: string;
  children: ReactElement | string;
  onClick?: () => void;
}
export const Button: FC<IButton> = ({ children, href, ...props }) => {
  return (
    <>
      {href ? (
        <Link className={styles.link} {...props} to={href}>
          {children}
        </Link>
      ) : (
        <ButtonAntd className={styles.button} {...props}>
          {children}
        </ButtonAntd>
      )}
    </>
  );
};
