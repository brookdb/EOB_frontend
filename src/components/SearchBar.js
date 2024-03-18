import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

//styles
import { useTheme } from "../context/ThemeContext";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const theme = useTheme();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  // Custom styles
  const styles = {
    formControl: {
      width: "70%",
    },
    button: {
      // Add your custom styles here
      color: theme.color.foreground,
      borderColor: theme.color.foreground,
    },
    container: {
      display: "flex",
      margin: "0 auto",
      width: "60vw",
      justifyContent: "space-between",
      marginTop: "30px",
    },
  };

  return (
    <Form
      className="search-bar"
      inline
      onSubmit={handleSearchSubmit}
      style={styles.container}
    >
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2 search-input"
        value={searchQuery}
        onChange={handleSearchChange}
        style={styles.formControl}
      />
      <Button
        variant="outline"
        type="submit"
        style={styles.button}
        className="search-button"
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
