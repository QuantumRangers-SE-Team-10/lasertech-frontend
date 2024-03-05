import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react";
import playerDisplayStyles from "/src/css/playerDisplay.module.css"

const PlayerDisplay = () => {

    const [game, setGame] = useState({});
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [searchParams] = useSearchParams();
                const gameId = searchParams.get("gameId");
                const gameResponse = await fetch(`/api/games/${gameId}`);
                if (!gameResponse.ok) {
                    throw new Error(`Error fetching game information`);
                }
                const gameData = await gameResponse.json();
                setGame(gameData.game);

                const playersResponse = await fetch(`/api/games/${gameId}/players`);
                if (!playersResponse.ok) {
                    throw new Error(`Error fetching player information`);
                }
                const playersData = await playersResponse.json();
                const redPlayers = playersData.players.red.map(player => ({
                    id: player.id,
                    codename: player.codename,
                    team: 'red'
                }));
                const greenPlayers = playersData.players.green.map(player => ({
                    id: player.id,
                    codename: player.codename,
                    team: 'green'
                }));
                setPlayers([...redPlayers, ...greenPlayers]);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

  

    const redPlayers = players.filter(player => player.team === 'red');
    const greenPlayers = players.filter(player => player.team === 'green');

    return (
        <div className={playerDisplayStyles.playerDisplay}>
            <div className={playerDisplayStyles.redTeam}>
                {redPlayers.map(player => (
                    <div key={player.id} className={playerDisplayStyles.playerName}>
                        <h2>{player.codename}</h2>
                        <div className={playerDisplayStyles.playerscore}>
                            <h2>{player.score}</h2>
                        </div>
                    </div>
                ))}
            </div>

            <div className={playerDisplayStyles.greenTeam}>
                {greenPlayers.map(player => (
                    <div key={player.id} className={playerDisplayStyles.playerName}>
                        <h2>{player.codename}</h2>
                        <div className={playerDisplayStyles.playerscore}>
                            <h2>{player.score}</h2>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default PlayerDisplay;