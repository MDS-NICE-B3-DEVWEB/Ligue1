import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowEquipe = () => {
  const { id } = useParams();
  const [equipeData, setEquipeData] = useState(null);

  useEffect(() => {
    const fetchEquipeData = async () => {
      try {
        const response = await fetch(`http://164.90.163.120:8000/api/equipe?id_saison=269&id_equipe=${id}`);
        const data = await response.json();
        setEquipeData(data.items.team);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchEquipeData();
  }, [id]);

  if (!equipeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{equipeData.teamName}</h1>
      <img src={equipeData.logo} alt={equipeData.teamName} />
      <h2>Players:</h2>
      <ul>
        {equipeData.players.map((player) => (
          <li key={player.playerID}>
            <h3>{player.fullName}</h3>
            <p>Position: {player.additionalInfo.position}</p>
            {/* Ajoutez d'autres informations du joueur ici */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowEquipe;