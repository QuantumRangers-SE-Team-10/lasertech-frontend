import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react";
import "/src/css/playerDisplay.css"

const PlayerDisplay = () => {
    return (
        <div className="playerDisplay">
            <div class="redTeam">
                <div class="redPlayerName">

                    <h2>Red Player Name</h2>
                </div>
                <div class="redPlayerScore">

                    <h2>Red Player Score</h2>
                </div>
            </div>


            <div class="greenTeam">
                <div class="greenPlayerName">

                    <h2>Green Player Name</h2>
                </div>
                <div class="greenPlayerScore">

                    <h2>Green Player Score</h2>
                </div>
            </div>
        </div>
    );
}

export default PlayerDisplay;
