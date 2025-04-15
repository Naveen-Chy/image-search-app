import React, { useState } from "react";
import axios from "axios";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ImageGrid from "./ImageGrid";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const fetchImages = async () => {
    try {
      const res = await axios.get(
        `https://pixabay.com/api/?key=49738534-0b43193f7e3e7d12f7a47979f&q=${encodeURIComponent(
          query
        )}&image_type=photo&per_page=12`
      );
      setImages(res.data.hits);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchImages();
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSearch}>
        <Row className="g-2 wid-800">
          <Col md={10}>
            <Form.Control
              type="text"
              placeholder="Search for images..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input" required
            />
          </Col>
          <Col md={2}>
            <Button 
              type="submit" 
              variant="primary" 
              className="w-100 custom-search-btn"
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      <ImageGrid images={images} navigate={navigate} />
    </Container>
  );
};

export default SearchPage;