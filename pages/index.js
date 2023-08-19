import styles from "@/styles/Home.module.css";
import { Button } from "antd";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className={styles.signUpHeader}>
        <div className={styles.blog}>Blogging App</div>
        <Link href="/login/login"><div className={styles.login}>Login</div></Link>
      </header>

      <div className={styles.signUp}>
        <h1>SignUp</h1>
      </div>

      <form action="#" method="POST" className={styles.form}>
        <div className={styles.main}>
          <div className={styles.email}>
            <input className={styles.home} type="email" name="email" placeholder="Email" required />
          </div>
          <div className={styles.input}>
            <input className={styles.home}
              type="password"
              name="password"
              placeholder="Password"
              minLength={8}
              required
            />
          </div>
          <div className={styles.firstName}>
            <input className={styles.home}
              type="text"
              name="firstName"
              placeholder="First name"
              required
              minLength={3}
              maxLength={20}
            />
          </div>
          <div className={styles.lastName}>
            <input className={styles.home} 
            type="text" name="lastName" placeholder="Last name" minLength={1} maxLength={20} required />
          </div>
          <div className={styles.input}>
            <input className={styles.home}
              type="password"
              name="password"
              placeholder="Repeat Password"
              minLength={8}
              required
            />
          </div>
          <div className={styles.btnSignup}>
          <button className={styles.btn} type="submit" value="submit"> SignUp</button>
          </div>
        </div>
      </form>
    </div>
  );
}
