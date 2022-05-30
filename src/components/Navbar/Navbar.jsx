import { NavLink } from 'react-router-dom';
import cl from './Navbar.module.css';

const setActive = ({ isActive }) => isActive ? `${cl.linkActive} ${cl.link}` : cl.link;

function Navbar() {
    return (
        <div className={cl.navbar}>
            <div className={cl.container}>
                <NavLink to="/" className={setActive}>Все котики</NavLink>
                <NavLink to="/favorites" className={setActive}>Любимые котики</NavLink>
            </div>
        </div>
    );
}

export default Navbar;