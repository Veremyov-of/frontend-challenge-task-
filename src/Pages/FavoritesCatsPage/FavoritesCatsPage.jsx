//components
import CardCat from "../../components/CardCat/CardCat";

//css modules
import cl from './FavoritesCatsPage.module.css';


//hooks
import { useContext } from 'react';

//context
import { AuthContext } from "../../context";

function FavoritesCatsPage({ favoriteToggle }) {
    const {catsData, setCatsData} = useContext(AuthContext);
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