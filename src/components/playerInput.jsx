import { useEffect, useState } from "react";
import { addPlayer, getPlayer } from "../../api/player";
import playerInputStyles from "/src/css/playerInput.module.css";

const PlayerInput = (params) => {
    const [showCodeName, setShowCodeName] = useState(false);
    const [isAddButtonDisabled, setAddButtonDisabled] = useState(true);
    const [isCodenameInputDisabled, setCodenameInputDisabled] = useState(true);

    const fetchCodename = async (playerID) => {
        try {
          const player = await getPlayer(playerID);
          if (player) {
            params.setCodename(player.codename);
            setShowCodeName(true);
            setCodenameInputDisabled(true);
          } else {
            // setFetchedCodename('');
            params.setCodename("");
            setShowCodeName(true);
            setCodenameInputDisabled(false);
          }
        } catch (error) {
          console.error("Error fetching codename:", error);
          setShowCodeName(true); // Show the input field for manual entry
          // setCodename(''); // Reset codename state
        }
        console.log("Codename: ", playerID);
        setAddButtonDisabled(false);
        // setCodenameInputDisabled(false);
    };

    const handleAddToRedTeam = () => {
        setShowCodeName(false);
        handleSubmitPlayer("Red");
    };

    const handleAddToGreenTeam = () => {
        setShowCodeName(false);
        handleSubmitPlayer("Green");
    };

    //make sure use of params is right here... not sure if I did it right
    const handleSubmitPlayer = async (team) => {
        setAddButtonDisabled(true);
        if (!params.playerID || !params.codename) {
          console.log("Invalid player");
          return;
        }
        const playerIds = [...params.redTeamPlayers, ...params.greenTeamPlayers].map(
          (player) => player.playerID
        );
        if (playerIds.includes(params.playerID)) {
          // TODO: Handle this case
          console.log("Player ID already exists");
          return;
        }
        const newPlayer = { playerID, codename };
        addPlayer(params.playerID, params.codename);
        if (team === "Red") {
          console.log("Red Team");
          if (params.redTeamIndex !== -1) {
            const updatedRedTeamPlayers = [...params.redTeamPlayers];
            updatedRedTeamPlayers[params.redTeamIndex] = newPlayer; // Update existing player
            params.setRedTeamPlayers(updatedRedTeamPlayers);
            params.setRedTeamIndex(params.redTeamIndex + 1);
          } else {
            console.log("Player not found in the Red Team");
          }
        } else if (team === "Green") {
          if (params.greenTeamIndex !== -1) {
            const updatedGreenTeamPlayers = [...params.greenTeamPlayers];
            updatedGreenTeamPlayers[params.greenTeamIndex] = newPlayer; // Update existing player
            params.setGreenTeamPlayers(updatedGreenTeamPlayers);
            params.setGreenTeamIndex(params.greenTeamIndex + 1);
          } else {
            console.log("Player not found in the Green Team");
          }
        }
    
        // Clear input fields after submission
        params.setPlayerID("");
        params.setCodename("");
    };

    return(
        <div>
            <h3> Add Player</h3>
            <div className={playerInputStyles.playerInput}>
                <input
                    type="number"
                    value={params.playerID}
                    onChange={(e) => {
                        params.setPlayerID(e.target.value);
                        setAddButtonDisabled(true);
                        setCodenameInputDisabled(true);
                        params.setCodename("");
                        // setShowCodeName(false);
                    }}
                    placeholder="Player ID"
                />
                <span
                    className={playerInputStyles.magnifyIcon}
                    onClick={() => {
                        fetchCodename(playerID);
                    }}
                >
                    <img
                    src="/src/assets/Magnifying_glass_icon.svg"
                    alt="Search"
                    className={playerInputStyles.magnifyingGlassIcon}
                    />
                </span>
            </div>
            {params.playerID && showCodeName && (
                <div className={playerInputStyles.playerInput}>
                    <input
                        type="text"
                        value={params.codename}
                        onChange={(e) => params.setCodename(e.target.value)}
                        placeholder="Enter Codename"
                        style={{
                            backgroundColor: isCodenameInputDisabled ? "#aaa" : "#f9f9f9",
                            borderColor: isCodenameInputDisabled ? "#aaa" : "#f9f9f9",
                        }}
                        disabled={isCodenameInputDisabled}
                    />
                </div>
            )}
            <div className={playerInputStyles.buttonContainer}>
                <span style={{gridColumn: "span 3"}}></span>
                <button
                    className={playerInputStyles.addTeamButton}
                    onClick={handleAddToRedTeam}
                    disabled={isAddButtonDisabled}
                    style={{
                        color: "red",
                        backgroundColor: isAddButtonDisabled ? "#aaa" : "#f9f9f9",
                    }}
                >
                    Add to Red Team
                </button>
                <button
                    className={playerInputStyles.addTeamButton}
                    onClick={handleAddToGreenTeam}
                    disabled={isAddButtonDisabled}
                    style={{
                        color: "green",
                        backgroundColor: isAddButtonDisabled ? "#aaa" : "#f9f9f9",
                    }}
                >
                    Add to Green Team
                </button>
                <span style={{gridColumn: "span 3"}}></span>
            </div>
        </div>
    );
}

export default PlayerInput;
