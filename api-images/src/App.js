import { useState } from 'react';
import './App.css';
import SearchHeader from './SearchHeader';
import searchImages from './api';
import ImageList from './components/ImageList';

function App() {
  // useState'in array almasının sebebi, api'de tutulan verilerin array içinde olmasıdır.
  const [images, setImages] = useState([]);
  // SearchHeader içerisinde ki handleFormSubmit func değeri aşağıda ki handleSubmit'in term props'una tekamül eder.

  const handleSubmit = async (term) => {
    // searchImages ile API'e istek atıyoruz.
    // bir değişkene kaydettikten sonra, 
    const result = await searchImages(term);
    // searchImages ile api'den gelen istekleri bir useState olan images içerisine aktarıyoruz.
    setImages(result);
  };

  return (
    <div className="App">
    <SearchHeader search={handleSubmit}/>
    {/* yukarıda 'images' useState'inde bulunan verileri 'imagesPlaceholder' propsu ile ImageLıst Componentine yollayabiliriz.  */}
    <ImageList imagesPlaceholder = {images}/>
    </div>
  );
}

export default App;

// api çekmek için AXİOS kurulumu gerçekleştiriyoruz.
// npm install axios : ile kurulumu yapabiliriz.