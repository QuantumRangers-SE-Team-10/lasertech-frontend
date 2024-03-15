import query from "./query";
import querySupabase from "../apiSupabase/querySupabase";


const route = "PlayerSessions";

const getPlayerSession = async (id: Number) => {
    const response = await querySupabase(route, "get", id, []);
    return response;
};

const getAllPlayerSessions = async () => {
    return await querySupabase(route, "get", null, []);
};

const addPlayerSession = async (playerID: Number, gameID: Number, equipmentID: Number, team: String) => {
  // const data = {
  //   playerID: playerID,
  //   gameID: gameID,
  //   equipmentID: equipmentID,
  //   team: team,
  // };
    const data = { playerID, gameID, equipmentID, team };
  const response = await querySupabase(route, "post", null, data);
  return response;
};

const modifyPlayerSession = async (playerId: Number, codename: String) => {
  const data = {
    playerID: playerId,
    codename: codename,
  };
    return await querySupabase(route, "put", null, data);
};

const deletePlayerSession = async (playerId: Number) => {
    return await querySupabase(route, "delete", playerId, []);
};

export {
  getPlayerSession,
  getAllPlayerSessions,
  addPlayerSession,
  modifyPlayerSession,
  deletePlayerSession,
};
