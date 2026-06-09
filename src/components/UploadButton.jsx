function UploadButton({ onUpload }) {
  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onUpload(url);
    }
  }

  return (
    <label className="upload-btn">
      📁 Upload Image
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </label>
  );
}

export default UploadButton;
