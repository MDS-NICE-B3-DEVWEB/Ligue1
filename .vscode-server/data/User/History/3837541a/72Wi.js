import React, { useEffect, useState } from 'react';
import './Classement.css'; // Import the CSS file

function Classement() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const id_saison = '269'; // Replace 'your_season_id' with the ID of the season you want to retrieve
    fetch(`https://www.ligue1.live/api/classement?id_saison=${id_saison}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
        console.log(response);
      }
      return response.json();
    })
    .then((data) => {
      setData(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
    
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <table className="table-standings">
            <thead>
              <tr>
                <th>Team</th>
                <th>Won</th>
                <th>Drawn</th>
                <th>Lost</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {data.teams.map((team, index) => (
                <tr key={index}>
                  <td className="team-name">
                    {team.logo && <img src={team.logo} alt={team.teamName} className="team-logo" />}
                    {team.teamName}
                  </td>
                  <td className="matches-won">{team.matchesWon}</td>
                  <td className="matches-drawn">{team.matchesDrawn}</td>
                  <td className="matches-lost">{team.matchesLost}</td>
                  <td className="points">{team.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default Classement;