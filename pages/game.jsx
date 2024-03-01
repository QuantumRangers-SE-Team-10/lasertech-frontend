import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import gameStyles from "../src/css/game.module.css";
import PlayerDisplay from "../src/components/playerDisplay.jsx";
import PlayerAction from "../src/components/playerAction.jsx";

//useSearchParams();

const Game = () => {
    return (
        <div className={gameStyles.window}>
            <div className={gameStyles.windowHeader}>
                <h1>Game</h1>
            </div>
            <PlayerDisplay />
            <div className={gameStyles.playerAction}>
                <h3>Player Action</h3>
            </div>
            <div className={gameStyles.playerName}>
                <h3>Player Name</h3>
            </div>
            <div className={gameStyles.timeRemaining}>
                <h4>Time Remaining</h4>
            </div>
        </div>


    );
};


export default Game;

