import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react";
import playerDisplayStyles from "/src/css/playerDisplay.module.css"

const PlayerDisplay = () => {
    return (
        <div className="playerDisplay">
            <div className={playerDisplayStyles.redTeam}>
                <div className={playerDisplayStyles.redPlayerName}>

                    <h2>Red Player Name</h2>
                </div>
                <div className={playerDisplayStyles.redPlayerScore}>

                    <h2>Red Player Score</h2>
                </div>
            </div>


            <div className={playerDisplayStyles.greenTeam}>
                <div className={playerDisplayStyles.greenPlayerName}>

                    <h2>Green Player Name</h2>
                </div>
                <div className={playerDisplayStyles.greenPlayerScore}>

                    <h2>Green Player Score</h2>
                </div>
            </div>
        </div>
    );
}

export default PlayerDisplay;
