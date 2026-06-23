import Modal from 'react-modal';
import css from './ImageModal.module.css';

// Modal'ın uygulamanın kök elemanına (id="root") bağlanmasını sağlıyoruz (Erişilebilirlik için zorunlu)
Modal.setAppElement('#root');

function ImageModal({ isOpen, onClose, image }) {
  if (!image) return null; // Eğer tıklanan bir resim yoksa hiçbir şey gösterme

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose} // Boşluğa veya ESC tuşuna basınca kapanması için
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
    >
      <div className={css.imageWrapper}>
        {/* Dokümanın istediği gibi urls.regular sürümünü basıyoruz */}
        <img
          src={image.urls.regular}
          alt={image.alt_description || 'Büyük Görsel'}
          className={css.modalImage}
        />
        
        {/* Ekstra güzel detaylar: Açıklama ve Beğeni sayısı */}
        {image.alt_description && (
          <p className={css.description}>{image.alt_description}</p>
        )}
        <div className={css.info}>
          <span>📸 Yazar: {image.user.name}</span>
          <span>❤️ Beğeni: {image.likes}</span>
        </div>
      </div>
    </Modal>
  );
}

export default ImageModal;
