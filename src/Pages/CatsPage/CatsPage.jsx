//Components
import CardCat from '../../components/CardCat/CardCat';

//UI
import Loader from '../../UI/Loader/Loader';

//css modules
import cl from './CatsPage.module.css';

//API
import CatsInfo from '../../API/CatsInfo';

//hooks
import { useContext, useRef, useEffect } from 'react';
import { useFetching } from './../../hooks/useFetching';
import { useObserver } from './../../hooks/useObserver';

//context
import { AuthContext } from './../../context/index';


function CatsPage({}) {
    const lastElement = useRef();
    
    
    const {catsData , setCatsData} = useContext(AuthContext);
    const {page, setPage} = useContext(AuthContext);

    
    const [fetchCats, isLoading, catsError] = useFetching(async (page) => {
        const catsInfo = await CatsInfo.getAll(page);
        setCatsData([...catsData, ...catsInfo]);
    });
  
    useEffect(() => {
      if(page === 0) return;
      fetchCats(page);
    }, [page]);
  
    useObserver(lastElement, isLoading, () => {
        setPage(page + 1);
    })

    return (
        <div>
            <div className={cl.content}>
                {catsError &&
                    <h1>Произошла ошибка {catsError}</h1> 
                }
                {catsData.map((item) => 
                    <CardCat key={item.id} urlImg={item.url} favorite={item.favorite} id={item.id}/>)
                }
            </div>
            <div ref={lastElement} className={cl.observer}></div>
            {/* <button className={cl.btnMore} onClick={() => fetchCats(page)}>Загрузить ещё</button> */}
            <div className={cl.wrapp}>{isLoading ? <Loader /> : ''}</div>
        </div>
    );
}

export default CatsPage;