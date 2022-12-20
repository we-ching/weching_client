import { Nav } from './NavBottom/NavBottom';

export const NavBar = () => {

    if (window.location.pathname === '/') return null;
    return (
        <div>
            <Nav/>
        </div>
    )
}