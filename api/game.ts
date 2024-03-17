// import query from "./query";
import querySupabase from "../apiSupabase/querySupabase";


const route = "Game";

const getGame = async (id: Number) => {
  const response = await querySupabase(route, "get", id, []);
  return response;
};

const getAllGames = async () => {
    return await querySupabase(route, "get", null, []);
};

const addGame = async () => {
  // const data = {};
  const response = await querySupabase(route, "post", null, {});
  return response;
};

const modifyGame = async (
  gameId: Number,
  playerSessions: [{ playerId: Number; team: String; equipmentId: String }]
) => {
  const data = {
    gameId: gameId,
    playerSessions: playerSessions,
  };
  return await querySupabase(route, "put", null, data);
};

const deleteGame = async (gameId: Number) => {
  return await querySupabase(route, "delete", gameId, []);
};

export { getGame, getAllGames, addGame, modifyGame, deleteGame };
