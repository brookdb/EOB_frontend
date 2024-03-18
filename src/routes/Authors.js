import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "react-bootstrap/esm/Pagination";
import { motion } from "framer-motion";

//styles
import { useTheme } from "../context/ThemeContext";

//data
import { fetchAuthors, API_BASE_URL } from "../Services";

//components
import Card from "react-bootstrap/esm/Card";
import Banner from "../components/Banner";
import SearchBar from "../components/SearchBar";
import ErrorMessage from "../components/Error";

function Authors() {
  const [authors, setAuthors] = useState([]);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const [error, setError] = useState(null);
  const [active, setActive] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const options = { year: "numeric", month: "long", day: "numeric" };
  const theme = useTheme();

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        let url = `${API_BASE_URL}/api/authors?page=${currentPage}`;
        if (searchTerm) {
          url += `&search=${searchTerm}`;
        }

        const data = await fetchAuthors(url);

        console.log(data);
        setAuthors(data.results);
        setNext(data.next);
        setPrev(data.previous);
        setTotalPages(Math.ceil(data.count / 5));
      } catch (err) {
        setError(err.message);
      }
    };

    fetchAPI();
  }, [API_BASE_URL, currentPage, searchTerm]);

  if (error) {
    return <ErrorMessage message={error} />;
  }
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  const handleSearch = (searchKey) => {
    setSearchTerm(searchKey);
    setCurrentPage(1); // Reset the page to 1 when a new search is made
  };

  const styles = {
    anchor: {
      textDecoration: "none",
    },
    container: {
      background: theme.color.background,
      minHeight: "100vh",
    },
    posts: {
      minHeight: "100vh",
      paddingTop: "30px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
    },

    card: {
      height: "200px",
      margin: "20px 10px auto",
      display: "flex",
      flexDirection: "row",
      background: theme.color.backgroundLight,
      border: "none",
    },
    cardBody: {
      textAlign: "left",
    },
    imgWrapper: {
      height: "200px",
      overflow: "hidden",
      borderRadius: "0.375rem 0 0 0.375rem",
      backgroundPosition: "50% 50%",
      backgroundSize: "cover",
    },
    img: {
      height: "100%",
      width: "auto",
      borderRadius: "0",
    },
    Subtitle: {
      fontFamily: theme.font.fontFamily.title,
      color: theme.color.foreground,
      fontSize: theme.font.fontSize.subtitle,
    },
    title: {
      fontFamily: theme.font.fontFamily.title,
      color: theme.color.foreground,
      fontSize: theme.font.fontSize.title,
    },
    paragraph: {
      fontFamily: theme.font.fontFamily.paragraph,
      color: theme.color.cream,
      fontSize: theme.font.fontSize.paragraph,
    },
    pagination: {
      active: {
        color: "#eee",
      },
      buttons: {
        background: "none",
        fontSize: theme.font.fontSize.pagination,
        fontFamily: theme.font.fontFamily.title,
        color: theme.color.foreground2,
        border: "none",
      },
      container: {
        margin: "0 auto",
        width: "25vw",
        justifyContent: "space-evenly",
        marginBottom: "30px",
      },
    },
  };

  return (
    <div style={styles.container}>
      <Banner title="Authors List" />
      <SearchBar onSearch={handleSearch} />

      {authors.length != 0 ? (
        <div style={styles.posts}>
          {authors.map((author) => (
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <Card key={author.id} style={styles.card}>
                <div
                  className="img col-sm-4"
                  style={{
                    backgroundImage: `url(${author.avatar})`,
                    ...styles.imgWrapper,
                  }}
                ></div>
                <Card.Body style={styles.cardBody}>
                  <Card.Title style={styles.title}>{author.name}</Card.Title>
                  <p style={styles.paragraph}>{author.bio}</p>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
          <Pagination style={styles.pagination.container}>
            <Pagination.Prev
              disabled={currentPage === 1}
              onClick={() => handlePageClick(currentPage - 1)}
              linkStyle={styles.pagination.buttons}
            />
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === currentPage}
                disabled={index + 1 === currentPage}
                onClick={() => handlePageClick(index + 1)}
                linkStyle={
                  index + 1 === currentPage
                    ? {
                        ...styles.pagination.buttons,
                        ...styles.pagination.active,
                      }
                    : styles.pagination.buttons
                }
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              disabled={currentPage === totalPages}
              onClick={() => handlePageClick(currentPage + 1)}
              linkStyle={styles.pagination.buttons}
            />
          </Pagination>
        </div>
      ) : (
        <ErrorMessage message="The post you are looking for can not be found. Please try again!" />
      )}
    </div>
  );
}

export default Authors;
