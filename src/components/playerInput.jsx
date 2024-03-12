import { useEffect, useState } from "react";
import { addPlayer, getPlayer } from "../../api/player";
import onboardingStyles from "/src/css/onboarding.module.css"; //will change to have separate css page for things only in this jsx

const PlayerInput = (params) => {
    const [isCodenameInputDisabled, setCodenameInputDisabled] = useState(true);

    const fetchCodename = async (playerID) => {
        try {
          const player = await getPlayer(playerID);
          if (player) {
            params.setCodename(player.codename);
            params.setShowCodeName(true);
            setCodenameInputDisabled(true);
          } else {
            // setFetchedCodename('');
            params.setCodename("");
            params.setShowCodeName(true);
            setCodenameInputDisabled(false);
          }
        } catch (error) {
          console.error("Error fetching codename:", error);
          params.setShowCodeName(true); // Show the input field for manual entry
          // setCodename(''); // Reset codename state
        }
        console.log("Codename: ", playerID);
        params.setAddButtonDisabled(false);
        // setCodenameInputDisabled(false);
    };

    return(
        <div className={onboardingStyles.playerInput}>
            <input
                type="number"
                value={params.playerID}
                onChange={(e) => {
                    params.setPlayerID(e.target.value);
                    params.setAddButtonDisabled(true);
                    setCodenameInputDisabled(true);
                    params.setCodename("");
                    // setShowCodeName(false);
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
                src="/src/assets/Magnifying_glass_icon.svg"
                alt="Search"
                className={onboardingStyles.magnifyingGlassIcon}
                />
            </span>
        </div>
    );
}

export default PlayerInput;
