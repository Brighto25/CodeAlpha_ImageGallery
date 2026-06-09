import { useState } from "react";
import Gallery from "./components/Gallery";
import UploadButton from "./components/UploadButton";
import Lightbox from "./components/Lightbox";
import "./App.css";

function App() {
  const [images, setImages] = useState([
    "/Image1.jpg",
    "/Image2.jpg",
    "/Image3.jpg",
    "/Image4.jpg",
    "/Image5.jpg",
    "/Image6.jpg",
    "/Image7.jpg",
    "/Image8.jpg",
    "/Image9.jpeg",
  ]);

  const [lightbox, setLightbox] = useState(null);

  function handleUpload(newImage) {
    setImages([...images, newImage]);
  }

  function handleImageClick(url) {
    setLightbox(url);
  }

  return (
    <div className="app">
      <div className="header">
        <h1>My Gallery</h1>
        <UploadButton onUpload={handleUpload} />
      </div>
      <Gallery images={images} onImageClick={handleImageClick} />
      {lightbox && (
        <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
      )}
    </div>
  );
}

export default App;
