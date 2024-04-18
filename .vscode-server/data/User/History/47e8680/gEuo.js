import { Link } from 'react-router-dom';
import { slide as BurgerMenu } from 'react-burger-menu'; 
import logo_ligue1_verticale from '../../assets/img/logo_ligue1_verticale.png';
import user from '../../assets/img/user.png';
import './Menu.css';

const styles = {
  bmBurgerButton: {
    position: 'absolute', // Change 'fixed' to 'absolute'
    width: '36px',
    height: '30px',
    left: '20px', // Position à gauche
    top: '50%', // Centre verticalement
    transform: 'translateY(-50%)', // Centre verticalement
    backgroundColor: '#02153C',
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    width: '25%', // Change '25%' to '100%'
    top: '0', // Change '50px' to '0'
    left: '0',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'block',
    color: '#CEFB03'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  },

  logo: {
    width: 32,
    height: 47,
  },
  userIcon: {
    width: 50,
    height: 50,
  },
  bandeau: {
    display: 'flex',
    justifyContent: 'center', // Centre horizontalement
    alignItems: 'center', // Centre verticalement
    position: 'sticky',
    top: 0,
    width: '100%',
    backgroundColor: '#02153C',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    zIndex: 999,
  },
  menuContainer: {
    position: 'relative',
  }
}

// ... (importations inchangées)

const Menu = () => {
  return (
    <div style={styles.menuContainer}>
      <div style={styles.bandeau}>
        <BurgerMenu styles={styles}>
          <Link id="home" className="menu-item" to="/home">Home</Link>
          <Link id="equipe" className="menu-item" to="/equipe">Equipe</Link>
          <Link id="classement" className="menu-item" to="/classement">Classement</Link>
        </BurgerMenu>
        <img src={logo_ligue1_verticale} alt="Logo Ligue 1" style={styles.logo} /> {/* Utilisez la variable importée ici */}
        <div style={{ width: '36px' }}></div>
        <img src={user} alt="User Icon" style={styles.userIcon} /> {/* Et ici */}
      </div>
    </div>
  );
};

export default Menu;