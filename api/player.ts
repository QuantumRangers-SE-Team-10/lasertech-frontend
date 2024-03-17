import querySupabase from "../apiSupabase/querySupabase";

const route = "Player";

const getPlayer = async (id: Number) => {
    const response = await querySupabase(route, "get", id, []);
    console.log(response)
    return response;
};

const getAllPlayers = async () => {
    return await querySupabase(route, "get", null, []);
};

const addPlayer = async (playerId: Number, codename: String) => {
  const data = {
    id: playerId,
    codename: codename,
  };
    return await querySupabase(route, "post", null, data);
};

const modifyPlayer = async (playerId: Number, codename: String) => {
  const data = {
    id: playerId,
    codename: codename,
  };
    return await querySupabase(route, "put", null, data);
};

const deletePlayer = async (playerId: Number) => {
    return await querySupabase(route, "delete", playerId, []);
};

export { getPlayer, getAllPlayers, addPlayer, modifyPlayer, deletePlayer };
