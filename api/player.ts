import querySupabase from "../apiSupabase/querySupabase";

const route = "Player";

const getPlayer = async (id: Number) => {
    const response = await querySupabase(route, "get", id, []);
    return response;
};

const getAllPlayers = async () => {
  const response = await querySupabase(route, "get", null, []);
  return response;
};

const addPlayer = async (playerId: Number, codename: String) => {
  const data = {
    id: playerId,
    codename: codename,
  };
  const response = await querySupabase(route, "post", null, data);
  return response;
};

const modifyPlayer = async (playerId: Number, codename: String) => {
  const data = {
    id: playerId,
    codename: codename,
  };
  const response = await querySupabase(route, "put", null, data);
  return response;
}

const deletePlayer = async (playerId: Number) => {
  const response = await querySupabase(route, "delete", playerId, []);
  return response;
};

export { getPlayer, getAllPlayers, addPlayer, modifyPlayer, deletePlayer };
