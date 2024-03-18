import query from "./query";
import querySupabase from "./querySupabase";


const route = "PlayerSession";

const getPlayerSession = async (id: Number) => {
  const response = await querySupabase(route, "get", id, []);
  return response;
};

const getAllPlayerSessions = async () => {
  const response = await querySupabase(route, "get", null, []);
  return response;
};

const addPlayerSession = async (playerId: Number, gameId: Number, equipmentId: Number, team: String) => {
  const data = { playerId, gameId, equipmentId, team };
  const response = await querySupabase(route, "post", null, data);
  return response;
};

const modifyPlayerSession = async (playerId: Number, codename: String) => {
  const data = { playerId, codename };
  const response = await querySupabase(route, "put", null, data);
  return response;
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
