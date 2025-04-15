import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const ImageGrid = ({ images, navigate }) => {
  return (
    <Row className="mt-4">
      {images.map((img, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={img.previewURL} />
            <Card.Body>
              <Button
                variant="primary"
                onClick={() => navigate('/editor', { state: { imageUrl: img.largeImageURL } })}
              >
                Add Caption
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ImageGrid;
