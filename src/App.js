import { useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

//Pages
import CatsPage from './Pages/CatsPage/CatsPage';
import FavoritesCatsPage from './Pages/FavoritesCatsPage/FavoritesCatsPage';

//components
import Navbar from "./components/Navbar/Navbar";

//hook
import { useFetching } from './hooks/useFetching';

//API
import CatsInfo from './API/CatsInfo';


function App() {
  const [catsData, setCatsData] = useState([]);
  const [page, setPage] = useState(0);
  
  const lastElement = useRef();
  const observer = useRef();
  
  const [fetchCats, isLoading, catsError] = useFetching(async (page) => {
      const catsInfo = await CatsInfo.getAll(page);
      setCatsData([...catsData, ...catsInfo]);
  });

  useEffect(() => {
    if(page === 0) return;
    fetchCats(page);
  }, [page]);

  useEffect(() => {
    if(isLoading) return;
    if(observer.current) observer.current.disconnect();
    let callback = function(entries, observer) {
      if(entries[0].isIntersecting) setPage(page + 1);
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [isLoading])
 

  const favoriteToggle = (id) => {
    setCatsData(catsData.map((item) => {
      if(item.id === id) {
        item.favorite = !item.favorite;
        return item;
      }
      return item;
    }));
  }
  function test() {
    console.log('testContext');
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CatsPage isLoading={isLoading} catsData={catsData} catsError={catsError} favoriteToggle={favoriteToggle} lastElement={lastElement} fetchCats={fetchCats} page={page}/>} />
        <Route path="/favorites" element={<FavoritesCatsPage catsData={catsData} favoriteToggle={favoriteToggle}/>} />
      </Routes>
    </div>
  );
}

export default App;
