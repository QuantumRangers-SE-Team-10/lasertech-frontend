const PlayerInfo = (params) => {

    const handleEquipmentIdChange = (e, team, index) => {
        const value = e.target.value;
        validateEquipmentId(value, team, index);
    };

    const handleBlur = (e, team, index) => {
        const value = e.target.value;
        validateEquipmentId(value, team, index);
    };

    const getBorderColor = (player) => {
        if (player.equipmentId === "") {
        return "gray"; // Empty box or invalid equipment ID
        } else if (player.equipmentId !== "" && player.isValid) {
        return "green"; // Valid equipment ID
        } else {
        return "red"; // Invalid equipment ID
        }
    };

    const validateEquipmentId = (value, team, index) => {
        const equipmentIdValue = parseInt(value);
        const isValid =
        !isNaN(equipmentIdValue) &&
        ((team === "Green" && equipmentIdValue % 2 === 0) ||
            (team === "Red" && equipmentIdValue % 2 !== 0));
        if (team === "Red") {
        const updatedPlayers = [...params.redTeamPlayers];
        updatedPlayers[index] = {
            ...updatedPlayers[index],
            equipmentId: value,
            isValid,
        };
        params.setRedTeamPlayers(updatedPlayers);
        } else if (team === "Green") {
        const updatedPlayers = [...params.greenTeamPlayers];
        updatedPlayers[index] = {
            ...updatedPlayers[index],
            equipmentId: value,
            isValid,
        };
        params.setGreenTeamPlayers(updatedPlayers);
        }
    };

    return (
        <div key={params.index}>
            <input
                id="playerID"
                type="number"
                value={params.player.playerID}
                readOnly
                //onChange={(e) => handleRedTeamChange(index, 'playerID', e.target.value)}
                placeholder="ID Number"
                disabled
            />
            <input
                id="codename"
                type="text"
                value={params.player.codename}
                readOnly
                // onChange={(e) => handleRedTeamChange(index, 'codename', e.target.value)}
                placeholder="Codename"
                disabled
            />
            <input
                id="equipmentId"
                type="text"
                value={params.player.equipmentId}
                onChange={(e) => handleEquipmentIdChange(e, "Red", params.index)}
                onBlur={(e) => handleBlur(e, "Red", params.index)}
                placeholder="Equipment ID"
                style={{ borderColor: getBorderColor(params.player) }}
            />
        </div>
    );
}

export default PlayerInfo;