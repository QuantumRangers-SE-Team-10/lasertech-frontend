import playerActionStyles from "../css/playerAction.module.css"

const PlayerAction = () => {

    const [game, setGame] = useState({});
    const [players, setPlayers] = useState([]);

    const fetchGame = async (gameId) => {
        try {
            const response = await fetch(`/api/games/${gameId}`);
            if (!response.ok) {
            throw new Error(`Error fetching game information`);
            }
            const data = await response.json();
            setGame(data.game);
        } catch (error) {
            console.error(error);
        }
        };

        const fetchPlayers = async (gameId) => {
            try {
                const response = await fetch(`/api/games/${gameId}/players`);
                if (!response.ok) {
                    throw new Error(`Error fetching player information`);
                }
                const data = await response.json();
                const playersData = data.players.map(player => ({
                    codename: player.codename,
                    action: player.action
                }));
                setPlayers(playersData);
            } catch (error) {
                console.error(error);
            }
        };
    
        useEffect(() => {
            let [searchParams] = useSearchParams();
            const gameId = searchParams.get("gameId");
            fetchGame(gameId);
            fetchPlayers(gameId);
        }, []);
    
        return (
            <div className={playerActionStyles.actionScreen}>
                {players.map(player => (
                    <div key={player.id} className={playerActionStyles.playerAction}>
                        <div className={playerActionStyles.playerName}>
                            <h2>{player.name}</h2>
                        </div>
                        <div className={playerActionStyles.playerAction}>
                            <h2>{player.action}</h2>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    export default PlayerAction;