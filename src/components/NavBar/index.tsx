import { Nav } from './NavBottom/NavBottom';
import { Outlet } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};
