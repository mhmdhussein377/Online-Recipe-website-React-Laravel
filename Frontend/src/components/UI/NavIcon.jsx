import {NavLink} from 'react-router-dom';

const NavIcon = ({to, icon, size}) => (
    <NavLink
        to={to}
        className={({isActive}) => (isActive
        ? 'icon active'
        : 'icon')}>
        {icon({size})}
    </NavLink>
);

export default NavIcon;
