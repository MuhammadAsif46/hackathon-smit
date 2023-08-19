import styles from "@/styles/Home.module.css";
import { getAll } from "@/services/blogs";
import Head from "next/head";
import { Card, Avatar, Divider } from "antd";
import Link from "next/link";
const { Meta } = Card;

export async function getStaticProps() {
  const data = getAll();
  return {
    props: {
      blogs: data,
    },
    revalidate: 10,
  };
}

export default function Blog(props) {
  const { blogs } = props;
  const BlogsList = blogs.map((blog) => {
    return (
        <>
            <ul className={styles.list}>
                <li key={blog.id}></li>
            </ul>
            <div className={styles.cardBlog}>
                <Link href={`/blogs/${blog.id}`}>
                    <Card hoverable
                        style={{
                        width: 600,
                        }}
                    >
                        <Meta title={blog.title} description={blog.userName} />
                        <Divider/>
                        {blog.post}
                    </Card>
                </Link>
            </div>
      </>
    );
  });
  return (
    <div className={styles.blogsAll}>
      <Head>
        <title>Mini Hackathon Project</title>
        <meta name="author" content="Asif Fareed" />
      </Head>
      <h1>All Blogs</h1>
        <div className={styles.blogPost}>
            {BlogsList}
        </div>
    </div>
  );
}
