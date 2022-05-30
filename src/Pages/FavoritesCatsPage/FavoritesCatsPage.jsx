//components
import CardCat from "../../components/CardCat/CardCat";

//css modules
import cl from './FavoritesCatsPage.module.css';

function FavoritesCatsPage({catsData , favoriteToggle}) {
    return (
        <div className={cl.content}>
            {catsData.map((item) => {
                if(item.favorite) {
                    return <CardCat key={item.id} urlImg={item.url} favorite={item.favorite} id={item.id} favoriteToggle={favoriteToggle} />
                }
            })}
        </div>
    );
}

export default FavoritesCatsPage;