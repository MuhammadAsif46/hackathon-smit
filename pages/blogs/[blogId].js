import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Divider, Button } from "@mui/material";
import { getById } from "@/services/blogs";
import styles from "@/styles/Home.module.css";

export default function Home(props) {
  const { blogs } = props;
  return (
    <div className={styles.container}>
      <div className={styles.detailPostPage}>
        <div className={styles.detailPostH1}>
          <h1>Blog {blogs.userName} Detail page</h1>
        </div>
        <div className={styles.detailPostCard}>
          <Card sx={{ maxWidth: 600 }} >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {blogs.id}
                </Avatar>
              }
              title={blogs.title}
            />
            <CardContent>
              <Divider />
              <br />
              <Typography variant="body2" color="text.secondary">
                {blogs.post}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <Button
          style={{ margin: "10px 30%", display: "block", textAlign: "center" }}
          variant="outlined"
          href="/blogs/blog"
        >
          Back To All Blogs Page
        </Button>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { blogId } = params;
  const data = getById(blogId);
  return {
    props: {
      blogs: data,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          blogId: "1",
        },
      },
    ],
    fallback: "blocking",
  };
}


