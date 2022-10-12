import { useState } from "react";
import logo from "svgs/logo.svg";
import notify from "svgs/notify.svg";
import search from "svgs/search.svg";
import avatar from "images/avatar.png";
import { Button } from "components/Button";
import styles from "./Header.module.scss";
export const Header = () => {
  const [isLogin, setLogin] = useState(true);
  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src={logo} />
      <div className={styles.wrapperSearch}>
        <input className={styles.searchBar} />
        <img
          className={styles.searchIcon}
          src={search}
          placeholder="Search..."
        />
      </div>
      <div>
        {!isLogin ? (
          <Button onClick={() => setLogin(true)}>Login</Button>
        ) : (
          <div className={styles.logged}>
            <div className={styles.notify}>
              <img src={notify} className={styles.iconNotify} />
              <div className={styles.counter}>99+</div>
            </div>
            <div className={styles.author}>
              <img className={styles.avatar} src={avatar} />
              <div className={styles.name}>Đạt Fix</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
