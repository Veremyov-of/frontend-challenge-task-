//hooks
import { useContext } from 'react';

//css modules
import cl from './CardCat.module.css';

//context
import { AuthContext } from '../../context';

function CardCat({ urlImg, favorite, id,}) {
    const {favoriteToggle} = useContext(AuthContext);
    return (
        <div className={cl.card}>
            <img className={cl.img} src={urlImg} alt="picture-cat" />
            <button className={cl.btnFavorite} onClick={() => favoriteToggle(id)}>
                <img className={cl.btnImg} src={favorite ? './img/favoriteOn.png' : './img/favoriteOff.png'}/>
            </button>
        </div>
    );
}

export default CardCat;