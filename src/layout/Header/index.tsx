import { AppstoreOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, Popover } from "antd";
import { Button } from "components/Button";
import avatar from "images/avatar.png";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "svgs/logo.svg";
import notify from "svgs/notify.svg";
import search from "svgs/search.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  const history = useHistory();
  const [isLogin, setLogin] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  const onSelectMenuItem = (e: { key: string }) => {
    switch (e.key) {
      case "logout":
        history.push("/login");
        break;
      default:
        history.push(e.key);
        break;
    }
  };
  const items: MenuProps["items"] = [
    {
      label: "Profile",
      key: "/profile",
      icon: <AppstoreOutlined />,
    },
    {
      label: "Manage posts",
      key: "/manage",
      icon: <AppstoreOutlined />,
    },
    {
      label: "Logout",
      key: "logout",
      icon: <AppstoreOutlined />,
    },
  ];
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <img className={styles.logo} src={logo} />
      </Link>
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
            <Popover
              trigger="click"
              open={open}
              onOpenChange={handleOpenChange}
              content={<Menu onClick={onSelectMenuItem} items={items} />}
            >
              <div className={styles.author}>
                <img className={styles.avatar} src={avatar} />
                <div className={styles.name}>Đạt Fix</div>
              </div>
            </Popover>
          </div>
        )}
      </div>
    </div>
  );
};
