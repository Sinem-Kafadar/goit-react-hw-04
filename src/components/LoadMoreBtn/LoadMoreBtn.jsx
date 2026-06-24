import css from './LoadMoreBtn.module.css';

function LoadMoreBtn({ onClick }) {
  
  return (
    <button type="button" className={css.loadMoreButton} onClick={onClick}>
      Load More
    </button>
  );
}

export default LoadMoreBtn;