import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from '../pages/Menu/Menu';
import Classement from '../pages/Classement/Classement';
import Equipe from '../pages/Equipe/Equipe';
import Home from '../pages/HomePage/HomePage';
import Equipetop from '../components/EquipeTop/Equipetop';
import LoginForm from '../components/forms/LoginForm/LoginForm';
import RegisterForm from '../components/forms/RegisterForm/RegisterForm';
import Match from '../pages/Match/Match';
import ShowEquipe from '../pages/ShowEquipe/ShowEquipe'; // Importez le composant ShowEquipe
import ShowPlayer from '../pages/ShowPlayer/ShowPlayer'; // Importez le composant ShowPlayer
import User from '../pages/User/User';

function App() {
  const [accessToken, setAccessToken] = useState(null); // État local pour stocker access_token

  // Logique pour mettre à jour access_token lors de la connexion
  // Par exemple, une fonction de connexion qui met à jour access_token
  const handleLogin = (token) => {
    setAccessToken(token);
  };


  return (
    <Router>
      <Equipetop />
      <Menu access_token={accessToken} /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classement" element={<Classement />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/user" element={<User />} />
        <Route path="/match" element={<Match />} />
        {/* Utilisez ShowEquipe avec l'ID de l'URL */}
        <Route path="/ShowEquipe/:id" element={<ShowEquipe />} /> 
        <Route path="/ShowPlayer/:id" element={<ShowPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;
