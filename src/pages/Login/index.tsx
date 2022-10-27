import { Checkbox, Form, Input } from "antd";
import { Button } from "components/Button";

import bannerLogin from "images/bannerLogin.jpg";
import { useHistory } from "react-router-dom";
import styles from "./Login.module.scss";

export const Login = () => {
  const history = useHistory();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginBox}>
        <div className={styles.illustrationWrapper}>
          <img src={bannerLogin} alt="Login" />
        </div>
        <Form
          name="login-form"
          className={styles.loginForm}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className={styles.formTitle}>Welcome!</p>
          <p>Login to the Dashboard</p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            className={styles.rememberCheckbox}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Button
            // htmlType="submit"
            type="primary"
            onClick={() => history.push("/")}
            className={styles.loginFormButton}
          >
            LOGIN
          </Button>
        </Form>
      </div>
    </div>
  );
};
