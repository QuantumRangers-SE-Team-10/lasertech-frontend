import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { addPlayer, getPlayer } from "../api/player";
import { addPlayerSession } from "../api/playerSession";
import { addGame } from "../api/game";
import PlayerInfo from "../src/components/playerInfo.jsx";
import PlayerInput from "../src/components/playerInput.jsx";

import onboardingStyles from "../src/css/onboarding.module.css";

const Onboarding = () => {
  const navigate = useNavigate();
  const [playerID, setPlayerID] = useState("");
  const [redTeamPlayers, setRedTeamPlayers] = useState(
    Array.from(Array(20).keys()).map(() => ({
      codename: "",
      playerID: "",
      equipmentId: "",
    }))
  );
  const [greenTeamPlayers, setGreenTeamPlayers] = useState(
    Array.from(Array(20).keys()).map(() => ({
      codename: "",
      playerID: "",
      equipmentId: "",
    }))
  );
  const [game, setGame] = useState();
  const [codename, setCodename] = useState("");
  const [redTeamIndex, setRedTeamIndex] = useState(0);
  const [greenTeamIndex, setGreenTeamIndex] = useState(0);
  const [equipmentId, setEquipmentId] = useState("");
  // const [showCodeName, setShowCodeName] = useState(false);
  // const [isAddButtonDisabled, setAddButtonDisabled] = useState(true);
  // const [isCodenameInputDisabled, setCodenameInputDisabled] = useState(true);

  useEffect(() => {
    async function add_Game() {
      const game = await addGame();
      setGame(game);
    }
    
    add_Game();
  }, []);

  // const [fetchedCodename, setFetchedCodename] = useState('');

  // const handleEquipmentIdChange = (e, team, index) => {
  //   const value = e.target.value;
  //   validateEquipmentId(value, team, index);
  // };

  // const handleBlur = (e, team, index) => {
  //   const value = e.target.value;
  //   validateEquipmentId(value, team, index);
  // };

  // const fetchCodename = async (playerID) => {
  //   try {
  //     const player = await getPlayer(playerID);
  //     if (player) {
  //       setCodename(player.codename);
  //       setShowCodeName(true);
  //       setCodenameInputDisabled(true);
  //     } else {
  //       setCodename("");
  //       setShowCodeName(true);
  //       setCodenameInputDisabled(false);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching codename:", error);
  //     setShowCodeName(true); // Show the input field for manual entry
  //   }
  //   console.log("Codename: ", playerID);
  //   setAddButtonDisabled(false);
  // };

  // const getBorderColor = (player) => {
  //   if (player.equipmentId === "") {
  //     return "gray"; // Empty box or invalid equipment ID
  //   } else if (player.equipmentId !== "" && player.isValid) {
  //     return "green"; // Valid equipment ID
  //   } else {
  //     return "red"; // Invalid equipment ID
  //   }
  // };

  // const validateEquipmentId = (value, team, index) => {
  //   const equipmentIdValue = parseInt(value);
  //   const isValid =
  //     !isNaN(equipmentIdValue) &&
  //     ((team === "Green" && equipmentIdValue % 2 === 0) ||
  //       (team === "Red" && equipmentIdValue % 2 !== 0));
  //   if (team === "Red") {
  //     const updatedPlayers = [...redTeamPlayers];
  //     updatedPlayers[index] = {
  //       ...updatedPlayers[index],
  //       equipmentId: value,
  //       isValid,
  //     };
  //     setRedTeamPlayers(updatedPlayers);
  //   } else if (team === "Green") {
  //     const updatedPlayers = [...greenTeamPlayers];
  //     updatedPlayers[index] = {
  //       ...updatedPlayers[index],
  //       equipmentId: value,
  //       isValid,
  //     };
  //     setGreenTeamPlayers(updatedPlayers);
  //   }
  // };

  // const handleAddToRedTeam = () => {
  //   setShowCodeName(false);
  //   handleSubmitPlayer("Red");
  // };

  // const handleAddToGreenTeam = () => {
  //   setShowCodeName(false);
  //   handleSubmitPlayer("Green");
  // };

  const handleClearGame = () => {
    setRedTeamPlayers(
      Array.from(Array(20).keys()).map(() => ({
        codename: "",
        playerID: "",
        equipmentId: "",
      }))
    );
    setGreenTeamPlayers(
      Array.from(Array(20).keys()).map(() => ({
        codename: "",
        playerID: "",
        equipmentId: "",
      }))
    );
    setRedTeamIndex(0);
    setGreenTeamIndex(0);
  };

  // const handleSubmitPlayer = async (team) => {
  //   setAddButtonDisabled(true);
  //   if (!playerID || !codename) {
  //     console.log("Invalid player");
  //     return;
  //   }
  //   const playerIds = [...redTeamPlayers, ...greenTeamPlayers].map(
  //     (player) => player.playerID
  //   );
  //   if (playerIds.includes(playerID)) {
  //     // TODO: Handle this case
  //     console.log("Player ID already exists");
  //     return;
  //   }
  //   const newPlayer = { playerID, codename };
  //   addPlayer(playerID, codename);
  //   if (team === "Red") {
  //     console.log("Red Team");
  //     if (redTeamIndex !== -1) {
  //       const updatedRedTeamPlayers = [...redTeamPlayers];
  //       updatedRedTeamPlayers[redTeamIndex] = newPlayer; // Update existing player
  //       setRedTeamPlayers(updatedRedTeamPlayers);
  //       setRedTeamIndex(redTeamIndex + 1);
  //     } else {
  //       console.log("Player not found in the Red Team");
  //     }
  //   } else if (team === "Green") {
  //     if (greenTeamIndex !== -1) {
  //       const updatedGreenTeamPlayers = [...greenTeamPlayers];
  //       updatedGreenTeamPlayers[greenTeamIndex] = newPlayer; // Update existing player
  //       setGreenTeamPlayers(updatedGreenTeamPlayers);
  //       setGreenTeamIndex(greenTeamIndex + 1);
  //     } else {
  //       console.log("Player not found in the Green Team");
  //     }
  //   }

  //   // Clear input fields after submission
  //   setPlayerID("");
  //   setCodename("");
  // };

  // const updateCodeName = async (playerID) => {
  //   if (!playerID) {
  //     return;
  //   }
  //   try {
  //     const existingCodename = await fetchCodename(playerID);
  //     setCodename(existingCodename);
  //   } catch (error) {
  //     console.log("Error fetching codename: ", error);
  //   }
  // };

  const handleSubmit = async () => {
    const players = [...redTeamPlayers, ...greenTeamPlayers];
    console.log(players);

    const filteredPlayers = players.filter(
      (player) => player.playerID !== "" && player.codename !== ""
    );

    filteredPlayers.forEach(async (player) => {
      if (player.equipmentId && player.codename !== "" && player.playerID !== "") {
        const team = player.equipmentId % 2 === 0 ? "Green" : "Red";
        const pS = await addPlayerSession(player.playerID, game.gameID, player.equipmentId, team);
        console.log(pS);
      }
    });

    navigate(`/game?id=${game.gameID}`);
  };

  return (
    <div className={onboardingStyles.window}>
      <div className={onboardingStyles.windowHeader}>
        <h2>Game Setup</h2>
      </div>
      <div className={onboardingStyles.windowContent}>
        <PlayerInput playerID={playerID} setPlayerID={setPlayerID} setCodename={setCodename} codename={codename} redTeamPlayers={redTeamPlayers} setRedTeamPlayers={setRedTeamPlayers} greenTeamPlayers={greenTeamPlayers} setGreenTeamPlayers={setGreenTeamPlayers} redTeamIndex={redTeamIndex} setRedTeamIndex={setRedTeamIndex} greenTeamIndex={greenTeamIndex} setGreenTeamIndex={setGreenTeamIndex} />
        {/* <div>
          <h3> Add Player</h3> */}
          {/* <div className={onboardingStyles.playerInput}>
            <input
              type="number"
              value={playerID}
              onChange={(e) => {
                setPlayerID(e.target.value);
                setAddButtonDisabled(true);
                setCodenameInputDisabled(true);
                setCodename("");
              }}
              placeholder="Player ID"
            />
            <span
              className={onboardingStyles.magnifyIcon}
              onClick={() => {
                fetchCodename(playerID);
              }}
            >
              <img
                src="../src/assets/Magnifying_glass_icon.svg"
                alt="Search"
                className={onboardingStyles.magnifyingGlassIcon}
              />
            </span>
          </div> */}
          {/* {playerID && showCodeName && (
            <div className={onboardingStyles.playerInput}>
              <input
                type="text"
                value={codename}
                onChange={(e) => setCodename(e.target.value)}
                placeholder="Enter Codename"
                style={{
                  backgroundColor: isCodenameInputDisabled ? "#aaa" : "#f9f9f9",
                  borderColor: isCodenameInputDisabled ? "#aaa" : "#f9f9f9",
                }}
                disabled={isCodenameInputDisabled}
              />
            </div>
          )}
          <div className={onboardingStyles.buttonContainer}>
            <span style={{gridColumn: "span 3"}}></span>
            <button
              className={onboardingStyles.addTeamButton}
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
              className={onboardingStyles.addTeamButton}
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
        </div> */}
        <div className={onboardingStyles.columns}>
          <div className={onboardingStyles.column}>
            <h3 className={onboardingStyles.redTeam}>Red Team</h3>
            {redTeamPlayers.map((player, index) => (
              <PlayerInfo  player={player} index={index} redTeamPlayers={redTeamPlayers} greenTeamPlayers={greenTeamPlayers} setRedTeamPlayers={setRedTeamPlayers} setGreenTeamPlayers={setGreenTeamPlayers}/>
              // <div key={index}>
              //   <input
              //     id="playerID"
              //     type="number"
              //     value={player.playerID}
              //     readOnly
              //     //onChange={(e) => handleRedTeamChange(index, 'playerID', e.target.value)}
              //     placeholder="ID Number"
              //     disabled
              //   />
              //   <input
              //     id="codename"
              //     type="text"
              //     value={player.codename}
              //     readOnly
              //     // onChange={(e) => handleRedTeamChange(index, 'codename', e.target.value)}
              //     placeholder="Codename"
              //     disabled
              //   />
              //   <input
              //     id="equipmentId"
              //     type="text"
              //     value={player.equipmentId}
              //     onChange={(e) => handleEquipmentIdChange(e, "Red", index)}
              //     onBlur={(e) => handleBlur(e, "Red", index)}
              //     placeholder="Equipment ID"
              //     style={{ borderColor: getBorderColor(player) }}
              //   />
              // </div>
            ))}
          </div>
          <div className={onboardingStyles.column}>
            <h3 className={onboardingStyles.greenTeam}>Green Team</h3>
            {greenTeamPlayers.map((player, index) => (
              <PlayerInfo  player={player} index={index} redTeamPlayers={redTeamPlayers} greenTeamPlayers={greenTeamPlayers} setRedTeamPlayers={setRedTeamPlayers} setGreenTeamPlayers={setGreenTeamPlayers}/>
              // <div key={index}>
              //   <input
              //     id="playerID"
              //     type="number"
              //     value={player.playerID}
              //     readOnly
              //     //onChange={(e) => handleGreenTeamChange(index, 'playerID', e.target.value)}
              //     placeholder="ID Number"
              //     disabled
              //   />
              //   <input
              //     id="codename"
              //     type="text"
              //     value={player.codename}
              //     readOnly
              //     //onChange={(e) => handleGreenTeamChange(index, 'codename', e.target.value)}
              //     placeholder="Codename"
              //     disabled
              //   />
              //   <input
              //     id="equipmentId"
              //     type="text"
              //     value={player.equipmentId}
              //     onChange={(e) => handleEquipmentIdChange(e, "Green", index)}
              //     onBlur={(e) => handleBlur(e, "Green", index)}
              //     placeholder="Equipment ID"
              //     style={{ borderColor: getBorderColor(player) }}
              //   />
              // </div>
            ))}
          </div>
        </div>
      </div>
      <div className={onboardingStyles.hotkeys}>
        <span style={{gridColumn: "span 2"}}></span>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleClearGame}>Clear Game</button>
      </div>
    </div>
  );
};

export default Onboarding;
