//libraries
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Figure from "react-bootstrap/esm/Figure";
import { useScroll, useSpring, motion } from "framer-motion";

//styles
import { useTheme } from "../context/ThemeContext";

//data
import { fetchPost } from "../Services";

//components
import Card from "react-bootstrap/esm/Card";
import Banner from "../components/Banner";
import ErrorMessage from "../components/Error";

const PostDetails = () => {
  //local state
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const { postSlug } = useParams();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  console.log(scrollYProgress);

  //global state
  const theme = useTheme();

  //component style
  const styles = {
    anchor: {
      textDecoration: "none",
    },
    container: {
      background: theme.color.cream,
      minHeight: "100vh",
      padding: "67px 200px",
    },
    imgWrapper: {
      height: "200px",
      overflow: "hidden",
      borderRadius: "0.375rem 0 0 0.375rem",
    },
    img: {
      width: "100%",
      borderRadius: "0",
    },
    Subtitle: {
      fontFamily: theme.font.fontFamily.title,
      color: theme.color.background,
      fontSize: theme.font.fontSize.paragraph,
      textAlign: "left",
    },
    title: {
      fontFamily: theme.font.fontFamily.title,
      color: theme.color.background,
      fontSize: theme.font.fontSize.title,
    },
    paragraph: {
      fontFamily: theme.font.fontFamily.paragraph,
      color: theme.color.black,
      fontSize: theme.font.fontSize.paragraph,
      textAlign: "justify",
      marginTop: "30px",
    },
  };

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const data = await fetchPost(postSlug);
        console.log(data);
        setPost(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchAPI();
  }, [postSlug]);

  if (error) {
    console.log(error);
    return <ErrorMessage mesage={error} />;
  }
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <motion.div className="progressBar" style={{ scaleX }} />
      <div className="post-details" style={styles.container}>
        <h1 style={styles.title}>{post.title}</h1>
        <div className="post-img-container">
          {post.picture ? (
            <Figure>
              <Figure.Image src={post.picture} />
            </Figure>
          ) : null}

          <h6 style={styles.Subtitle}>By {post.author}</h6>
          <h6 style={styles.Subtitle}>
            Published on{" "}
            {new Date(post.updated_on).toLocaleDateString("en-US", options)}
          </h6>
          <p style={styles.paragraph}>{post.content}</p>
        </div>
      </div>
    </>
  );
};
export default PostDetails;
