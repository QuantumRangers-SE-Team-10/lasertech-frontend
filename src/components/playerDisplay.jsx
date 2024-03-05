// import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react";
import playerDisplayStyles from "/src/css/playerDisplay.module.css"

import { getGame } from "../../api/game";
import { getPlayer } from "../../api/player";

const PlayerDisplay = (params) => {

    // const [game, setGame] = useState({});
    // const [players, setPlayers] = useState();
    const [redPlayers, setRedPlayers] = useState([]);
    const [greenPlayers, setGreenPlayers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const [searchParams] = useSearchParams();
                // const gameId = searchParams.get("gameId");
                // const gameResponse = await fetch(`/api/games/${gameId}`);
                const game = await getGame(Number(params.gameId));
                // if (!gameResponse.ok) {
                //     throw new Error(`Error fetching game information`);
                // }
                // const gameData = await gameResponse.json();
                // setGame(gameData.game);

                // const playersResponse = await fetch(`/api/games/${gameId}/players`);
                // if (!playersResponse.ok) {
                //     throw new Error(`Error fetching player information`);
                // }
                // const playersData = await playersResponse.json();

                // const redPlayers = playersData.players.red.map(player => ({
                //     id: player.id,
                //     codename: player.codename,
                //     team: 'red'
                // }));
                const redPlayers = game.playerSessions.filter(player => player.team === 'Red');
                const redPlayerInfo = await Promise.all(redPlayers.map(async player => {
                    const playerInfo = await getPlayer(player.playerID);
                    // console.log(playerInfo);
                    return {
                        ...player,
                        codename: playerInfo.codename,
                    };
                }));
                console.log(redPlayerInfo);
                // const greenPlayers = playersData.players.green.map(player => ({
                //     id: player.id,
                //     codename: player.codename,
                //     team: 'green'
                // }));
                const greenPlayers = game.playerSessions.filter(player => player.team === 'Green');
                const greenPlayerInfo = await Promise.all(greenPlayers.map(async player => {
                    const playerInfo = await getPlayer(player.playerID);
                    return {
                        ...player,
                        codename: playerInfo.codename,
                    };
                }));
                setRedPlayers(redPlayerInfo);
                setGreenPlayers(greenPlayerInfo);
                // setPlayers([...redPlayers, ...greenPlayers]);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={playerDisplayStyles.playerDisplay}>
            {/* <div className={playerDisplayStyles.redTeam}>
                <span className={playerDisplayStyles.redPlayer} style={{gridColumn: "span 6"}}>Red Team</span>
                {redPlayers.map(player => (
                    <div key={player.playerID} className={playerDisplayStyles.redPlayer}>
                        <span className={playerDisplayStyles.redPlayerName}>{player.codename}</span>
                        <span className={playerDisplayStyles.redPlayerScore}>{player.playerScore}</span>
                    </div>
                ))}
            </div> */}
            
            <div className={playerDisplayStyles.redTeam}>
                <span className={playerDisplayStyles.teamLabel}>Red Team</span>
                {redPlayers.map(player => (
                    <div key={player.playerID} className={playerDisplayStyles.redPlayer}>
                        <span className={playerDisplayStyles.redPlayerName}>{player.codename}</span>
                        <span className={playerDisplayStyles.redPlayerScore}>{player.playerScore}</span>
                    </div>
                ))}
            </div>
            <div className={playerDisplayStyles.greenTeam}>
                <span className={playerDisplayStyles.teamLabel}>Green Team</span>
                {greenPlayers.map(player => (
                    <div key={player.playerID} className={playerDisplayStyles.greenPlayer}>
                        <span className={playerDisplayStyles.greenPlayerName}>{player.codename}</span>
                        <span className={playerDisplayStyles.greenPlayerScore}>{player.playerScore}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlayerDisplay;