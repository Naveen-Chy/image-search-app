import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import { useLocation } from 'react-router-dom';
import { Container, Button, Row, Col, Alert } from 'react-bootstrap';

const EditorPage = () => {
  const canvasRef = useRef(null);
  const location = useLocation();
  const imageUrl = location.state?.imageUrl;
  const [canvas, setCanvas] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [selectedObject, setSelectedObject] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const newCanvas = new fabric.Canvas('canvas', {
      width: 750,
      height: 500,
      backgroundColor: '#f0f0f0'
    });

    newCanvas.on('object:selected', (e) => {
      setSelectedObject(e.target);
    });

    newCanvas.on('selection:cleared', () => {
      setSelectedObject(null);
    });

    setCanvas(newCanvas);

    const handleKeyDown = (e) => {
      if (e.key === 'Delete' && selectedObject) {
        deleteSelected();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      newCanvas.dispose();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedObject]); 

  useEffect(() => {
    if (canvas && imageUrl) {
      setIsImageLoaded(false);
      fabric.Image.fromURL(imageUrl, (img) => {
        const scale = Math.min(
          canvas.width / img.width,
          canvas.height / img.height
        );
        img.set({
          scaleX: scale,
          scaleY: scale,
          left: (canvas.width - img.width * scale) / 2,
          top: (canvas.height - img.height * scale) / 2,
          originX: 'left',
          originY: 'top',
          selectable: false // Prevent background image from being selected
        });
        
        canvas.setBackgroundImage(img, () => {
          canvas.renderAll();
          setIsImageLoaded(true);
        }, {
          crossOrigin: 'anonymous'
        });
      }, {
        crossOrigin: 'anonymous'
      });
    }
  }, [canvas, imageUrl]);

  const addText = () => {
    if (!canvas) return;
    const text = new fabric.IText('Double click to edit', {
      left: 50,
      top: 50,
      fontSize: 20,
      fill: '#fff',
      fontFamily: 'Impact',
      fontWeight: 'bold',
      stroke: '#000',
      strokeWidth: 1,
      shadow: '5px 5px 10px rgba(0,0,0,0.5)'
    });
    canvas.add(text);
    canvas.setActiveObject(text);
    text.enterEditing();
    text.selectAll();
  };

  const addRect = () => {
    if (!canvas) return;
    const rect = new fabric.Rect({
      width: 100,
      height: 100,
      fill: 'rgba(255,0,0,0.5)',
      left: 100,
      top: 100,
      stroke: '#000',
      strokeWidth: 1
    });
    canvas.add(rect);
    canvas.setActiveObject(rect);
  };

  const deleteSelected = () => {
    if (!canvas || !selectedObject) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
      return;
    }
    
    canvas.remove(selectedObject);
    setSelectedObject(null);
    canvas.discardActiveObject().renderAll();
  };

  const download = () => {
    if (!canvas || !isImageLoaded) {
      alert('Please wait for the image to load completely');
      return;
    }
    
    try {
      const link = document.createElement('a');
      const dataURL = canvas.toDataURL({
        format: 'png',
        quality: 1.0,
        multiplier: 2
      });
      
      link.href = dataURL;
      link.download = 'meme-image.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading image:', error);
      alert('Error downloading image. Please try again.');
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Meme Editor</h2>
      
      {showAlert && (
        <Alert variant="warning" onClose={() => setShowAlert(false)} dismissible>
          Please select an object to delete
        </Alert>
      )}
      
      <Row className='align-items-center pt-5'>
        <Col md={8}>
          <canvas 
            id="canvas" 
            ref={canvasRef}
            style={{ 
              border: '1px solid #ccc',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </Col>
        <Col md={4}>
          <Button variant="success" className="mb-3 w-100" onClick={addText}>
            Add Text
          </Button>
          <Button variant="info" className="mb-3 w-100" onClick={addRect}>
            Add Rectangle
          </Button>
          <Button 
            variant="danger" 
            className="mb-3 w-100" 
            onClick={deleteSelected}
            disabled={!selectedObject}
          >
            Delete Selected (or press <strong>Del</strong> key)
          </Button>
          <Button 
            variant="dark" 
            className="mb-3 w-100" 
            onClick={download}
            disabled={!isImageLoaded}
          >
            {isImageLoaded ? 'Download Image' : 'Loading Image...'}
          </Button>
          
          <div className="mt-5">
            <h5>Instructions:</h5>
            <ul>
              <li><strong>Click</strong> on objects to select them</li>
              <li><strong>Double-click</strong> text to edit</li>
              <li><strong>Drag</strong> to move objects</li>
              <li><strong>Select + Press "Delete" key</strong> to remove</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EditorPage;