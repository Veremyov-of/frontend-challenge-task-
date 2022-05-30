//css modules
import cl from './CardCat.module.css';

function CardCat({ urlImg, favorite, id, favoriteToggle}) {
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