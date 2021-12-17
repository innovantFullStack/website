import { Signup } from "../components/Signup";
import styles from "../styles/Home.module.css";
import { LoginForm } from "../components/LoginForm";
import { signIn } from "next-auth/react";
 
export default function login() {
  

  return (
    <div>
      <div className={styles.flexContainer}>
        <div className={styles.container}>
          <div className={styles.registerContainer}>
            <Signup
              title={"Register"}
              icon={"./register.svg"}
              text={"Browse and find what you need"}
              link="register"
            />
            <Signup
              title={"Sign In"}
              icon={"./log-in.svg"}
              check="/checkmark.svg"
              text={"Browse and find what you need"}
              link="login"
            />
          </div>
          <LoginForm
            click={() => {
              signIn("credentials", {
                username: u,
                password: p,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
