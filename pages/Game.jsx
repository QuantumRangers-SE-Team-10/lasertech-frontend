import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "/src/css/Game.css";
import "/src/components/playerAction.jsx";
import PlayerDisplay from "/src/components/playerDisplay.jsx";
import PlayerAction from "/src/components/playerAction.jsx";

//useSearchParams();

const Game = () => {
    return (
        <div className="window">
            <div className="window-header">
                <h1>Game</h1>
            </div>
            <PlayerDisplay />
            <div className="playerAction">
                <h3>Player Action</h3>
            </div>
            <div className="playerName">
                <h3>Player Name</h3>
            </div>
            <div className="timeRemaining">
                <h4>Time Remaining</h4>
            </div>
        </div>


    );
};


export default Game;

