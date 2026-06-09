import ImageCard from "./ImageCard";

function Gallery({ onImageClick, images }) {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <ImageCard
          key={index}
          src={image}
          onClick={() => onImageClick(image)}
        />
      ))}
    </div>
  );
}

export default Gallery;
