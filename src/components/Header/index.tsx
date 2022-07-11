import { Scroll, Timer } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { HeaderContainer } from './styles';

function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={22} />
        </NavLink>

        <NavLink to="history" title="Histórico">
          <Scroll size={22} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
