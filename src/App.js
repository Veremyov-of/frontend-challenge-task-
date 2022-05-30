import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import CatsPage from './Pages/CatsPage/CatsPage';
import FavoritesCatsPage from './Pages/FavoritesCatsPage/FavoritesCatsPage';

//components
import Navbar from "./components/Navbar/Navbar";

//context
import { AuthContext } from './context';


function App() {

  const [catsData, setCatsData] = useState([]);
  const [page, setPage] = useState(0); 

  const favoriteToggle = (id) => {
    setCatsData(catsData.map((item) => {
      if(item.id === id) {
        item.favorite = !item.favorite;
        return item;
      }
      return item;
    }));
  }

  return (
    <AuthContext.Provider value={{
      catsData,
      setCatsData,
      page,
      setPage,
    }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CatsPage favoriteToggle={favoriteToggle} />} />
          <Route path="/favorites" element={<FavoritesCatsPage favoriteToggle={favoriteToggle}/>} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
