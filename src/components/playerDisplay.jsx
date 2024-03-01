import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react";
import "/src/css/playerDisplay.css"

const PlayerDisplay = () => {
    return (
            <div className="playerDisplay">
                <div className="redPlayerName">
                    <h2>Red Player Name</h2>
                </div>
                <div className="redPlayerScore">
                    <h2>Red Player Score</h2>
                </div>
                <div className="greenPlayerName">
                    <h2> Green Player Name</h2>
                </div>
                <div className="greenPlayerScore">
                    <h2> Green Player Score</h2>
                </div>
            </div>
    );
}

export default PlayerDisplay;
