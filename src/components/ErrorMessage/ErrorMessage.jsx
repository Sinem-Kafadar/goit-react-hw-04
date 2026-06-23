import css from './ErrorMessage.module.css';

function ErrorMessage() {
  return (
    <div className={css.errorWrapper}>
      <p className={css.errorText}>
        Hoppala! Bir şeyler ters gitti. Lütfen sayfayı yenileyip tekrar deneyin. 😢
      </p>
    </div>
  );
}

export default ErrorMessage;