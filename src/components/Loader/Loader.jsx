import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.loaderWrapper}>
      <RotatingLines strokeColor="blue" />
    </div>
  );
}

// Varsayılan dışa aktarma:
export default Loader;