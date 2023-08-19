import styles from "@/styles/Home.module.css";
import { Button } from "antd";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className={styles.signUpHeader}>
        <div className={styles.blog}>Blogging App</div>
        <Link href="/"><div className={styles.signUppage}>Signup</div></Link>
      </header>

      <div className={styles.signUp}>
        <h1>Login</h1>
      </div>

      <form className={styles.form}>
        <div className={styles.main}>
          <div className={styles.email}>
            <input className={styles.home} type="email" name="email" placeholder="Enter Email" required />
          </div>
          <div className={styles.input}>
            <input className={styles.home}
              type="password"
              name="password"
              placeholder="Enter Password"
              minLength={8}
              required
            />
          </div>
         
          <div className={styles.btnSignup}>
          <button className={styles.btn} type="submit" value="submit"> Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}
