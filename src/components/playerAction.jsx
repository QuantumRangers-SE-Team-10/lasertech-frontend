import playerActionStyles from "../css/playerAction.module.css"

const PlayerAction = () => {
    return (
        <div>
            <div className={playerActionStyles.playerAction}>
                <h2>Player Action</h2>
            </div>
            <div className={playerActionStyles.playerName}>
                <h2>Player Name</h2>
            </div>
        </div>
    );
}

export default PlayerAction;