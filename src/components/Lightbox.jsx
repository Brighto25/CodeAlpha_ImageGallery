function Lightbox({ src, onClose }) {
  return (
    <div onClick={onClose} style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <img src={src} style={{ maxHeight: '90%', maxWidth: '90%' }} />
    </div>
  )
}

export default Lightbox;