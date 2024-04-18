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
    background: 'white'
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
    background: '#02153C',
    padding: '3.5em 1.5em 0', // Increase the top padding to move down the content
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
    color: '#CEFB03',
    textDecoration: 'none',
    fontSize: 'larger',
    lineHeight: '2', // Add this line to increase line spacing
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    top: '0',

  },

  logo: {
    width: 45,
    height: 67.5,
  },
  userIcon: {
    width: 50,
    height: 50,
  },
  bandeau: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    width: '100%',
    backgroundColor: '#02153C',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    zIndex: 999,
    borderBottom: '1px solid white', // Ajoute une bande blanche de 2px en bas du bandeau
  },

  section: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '33.33%',
  },
  userSection: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '33.33%',
  },

  menuContainer: {
    position: 'relative',
  }
}

const Menu = () => {
  return (
    <div style={styles.menuContainer}>
      <div style={styles.bandeau}>
        <div style={styles.section}>
          <BurgerMenu styles={styles}>
            <Link id="home" className="menu-item" to="/home">Home</Link>
            <Link id="equipe" className="menu-item" to="/equipe">Equipe</Link>
            <Link id="classement" className="menu-item" to="/classement">Classement</Link>
          </BurgerMenu>
        </div>
        <div style={styles.section}>
          <img src={logo_ligue1_verticale} alt="Logo Ligue 1" style={styles.logo} />
        </div>
        <div style={styles.userSection}>
  <Link to="/login">
    <img src={user} alt="User Icon" style={styles.userIcon} />
  </Link>
</div>
      </div>
    </div>
  );
};
export default Menu;