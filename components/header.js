import Link from "next/link";
import styles from "@/styles/Home.module.css"

export default function Header () {
    return (<header>
        <nav>
            <div>
                <div className={styles.header}>
                    <Link href="/blogs/blog">
                        <div className={styles.blogs}>All Blogs</div>
                    </Link>
                    <Link href="/">
                        <div className={styles.logout}>Logout</div>
                    </Link>
                    <Link href="/profile">
                        <div className={styles.profile}>Profile</div>
                    </Link>
                </div>
            </div>
        </nav>
    </header>)
};