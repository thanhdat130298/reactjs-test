import { Button } from "components/Button";

import styles from "./Login.module.scss";
export const Login = () => {
  return (
    <div>
      <div>Welcome!</div>
      <div>
        Please sign in to continue or{" "}
        <a href="#" className={styles.signUp}>
          Sign up
        </a>
        if you have not account yet!
      </div>
      <div>Sign in</div>
      <div>
        <div>
          <label>Username</label>
          <input />
        </div>
        <div>
          <label>Password</label>
          <input />
        </div>
        <div>
          <input type="checkbox" />
          <a>Forgot password!</a>
        </div>
        <Button href="/">Login</Button>
      </div>
    </div>
  );
};
