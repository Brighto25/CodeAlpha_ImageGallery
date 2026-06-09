function ImageCard({ src, onClick }) {
 return (
  <div className="image-card">
    <img src={src} onClick={onClick} />
  </div>
)
}
export default ImageCard;
