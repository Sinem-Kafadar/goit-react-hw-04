import css from './ImageCard.module.css';

function ImageCard({ item, onImageClick }) {
  return (
    <div className={css.cardWrapper} onClick={() => onImageClick(item)}>
      <img
        src={item.urls.small}
        alt={item.alt_description || 'Görsel'}
        className={css.cardImage}
      />
    </div>
  );
}

export default ImageCard;
