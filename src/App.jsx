import { useState, useEffect } from "react";
import fetchImages from "./services/unsplash";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoaderMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  // 1. Durum (State) Yönetimleri
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalData, setModalData] = useState(null); // Açık olan resmin bilgisi için

  // 2. SearchBar'dan yeni bir kelime arandığında çalışacak fonksiyon
  const handleSearch = (newQuery) => {
    if (newQuery === query) return; // Aynı kelimeyse tekrar arama yapmasın
    setQuery(newQuery);
    setImages([]); // Yeni aramada eski resimleri temizle
    setPage(1); // Sayfayı 1'e sıfırla
  };

  // 3. Load More butonuna basıldığında sayfayı arttıracak fonksiyon
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // 4. API'den verileri çekecek olan useEffect mekanizması
  useEffect(() => {
    if (!query) return; // Eğer arama kelimesi boşsa hiçbir şey yapma

    const getImages = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const data = await fetchImages(query, page);

        // Yeni gelen resimleri, eski resimlerin üzerine ekliyoruz (Load more mantığı)
        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  return (
    <div className="appContainer">
      {/* Arama Çubuğu */}
      <SearchBar onSubmit={handleSearch} />

      {/* Hata Durumu varsa mesajı göster */}
      {isError && <ErrorMessage />}

      {/* Resim Galerisi - Sadece resim varsa VE HATA YOKSA gösterilecek */}
      {images.length > 0 && !isError && (
        <ImageGallery items={images} onImageClick={setModalData} />
      )}

      {/* Yükleniyor Spinner'ı */}
      {isLoading && <Loader />}

      {/* Daha Fazla Yükle Butonu (Eğer resim varsa ve yükleme bitmişse göster) */}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      {/* Resim Detay Modalı */}
      <ImageModal
        isOpen={modalData !== null}
        onClose={() => setModalData(null)}
        image={modalData}
      />
    </div>
  );
}

export default App;

