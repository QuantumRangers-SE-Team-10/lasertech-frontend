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
            <div className="redTeam">
                <h2>Red Team</h2>
            </div>
            <div className="greenTeam">
                <h2>Green Team</h2>
            </div>
            <PlayerDisplay />
            {/* <div className = "redPlayerName">
        <h2>Red Player Name</h2>
        </div>
        <div className = "redPlayerScore">
        <h2>Red Player Score</h2>
        </div>
        <div className = "greenTeam">
        <h2>Green Team</h2>
        </div>
        <div className = "greenPlayerName">
            <h2> Green Player Name</h2>
        </div> 
        <div className = "greenPlayerScore">
            <h2> Green Player Score</h2>
    </div>*/}
            <div className="playerAction">
                <h2>Player Action</h2>
            </div>
            <div className="playerName">
                <h2>Player Name</h2>
            </div>
            <div className="timeRemaining">
                <h2>Time Remaining</h2>
            </div>
        </div>
    );
};


export default Game;

