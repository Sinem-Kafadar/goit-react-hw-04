import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast'; // Bildirim kütüphanesi
import css from './SearchBar.module.css';

function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Metin alanının boş olması durumunda bildirim gösterilir
    if (inputValue.trim() === '') {
      toast.error('Lütfen aramak için bir kelime yazın!', {
        duration: 2000,
        position: 'top-right',
      });
      return;
    }

    // Arama değerini üst bileşene (App.jsx) iletiyoruz
    onSubmit(inputValue);
  };

  return (
    <header className={css.searchHeader}>
      {/* React Hot Toast bildirim bileşeni */}
      <Toaster />
      
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className={css.searchButton}>
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;

