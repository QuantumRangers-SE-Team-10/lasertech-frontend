import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import gameStyles from "../src/css/game.module.css";
import PlayerDisplay from "../src/components/playerDisplay.jsx";
import PlayerAction from "../src/components/playerAction.jsx";

const Game = () => {

    const [countdown, setCountdown] = useState(30);
    const [timeRemaining, setTimeRemaining] = useState(360);

    useEffect(() => {
        
        const countdownInterval = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);

        if (countdown === 0) {
             fetch(`/api/games/${gameId}`, {
                 method: 'PUT',
                 body: JSON.stringify({ status: 'active' }),
                headers: {
                     'Content-Type': 'application/json'
                 }
             });

            const timeRemainingInterval = setInterval(() => {
                setTimeRemaining(prevTime => prevTime - 1);
            }, 1000);
           
            clearInterval(countdownInterval);
        }
        return () => {
            clearInterval(countdownInterval);
        };
    }, [countdown])


    return (
        <div className={gameStyles.window}>
            <div className={gameStyles.windowHeader}>
                <h1>Game</h1>
            </div>
            <PlayerDisplay />
            <PlayerAction />
            <div className={gameStyles.timeRemaining}>
                <h4>Time Remaining: {timeRemaining} seconds</h4>
            </div>
            <div className={gameStyles.countdown}>
                <h4>Countdown: {countdown} seconds</h4>
        </div>
    </div>

    );
};


export default Game;

