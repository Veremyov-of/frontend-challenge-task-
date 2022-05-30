//Components
import CardCat from '../../components/CardCat/CardCat';

//UI
import Loader from '../../UI/Loader/Loader';

//css modules
import cl from './CatsPage.module.css';

function CatsPage({ isLoading, catsData, catsError, favoriteToggle, lastElement, fetchCats, page }) {
    return (
        <div>
            <div className={cl.content}>
                {catsError &&
                    <h1>Произошла ошибка {catsError}</h1> 
                }
                {catsData.map((item) => 
                    <CardCat key={item.id} urlImg={item.url} favorite={item.favorite} id={item.id} favoriteToggle={favoriteToggle}/>)
                }
            </div>
            <div ref={lastElement} className={cl.observer}></div>
            <div className={cl.wrapp}>{isLoading ? <Loader /> : <button className={cl.btnMore} onClick={() => fetchCats(page)}>Загрузить ещё</button>}</div>
        </div>
    );
}

export default CatsPage;