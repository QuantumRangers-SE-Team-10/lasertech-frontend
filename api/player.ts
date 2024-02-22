import query from './query';

const route = 'Player';

const getPlayer = async (id: Number) => {
  const response = await query(route, 'get', id, []);
  return response.data;
}

const getAllPlayers = async () => {
  return await query(route, 'get', null, []);
}

const addPlayer = async (playerId: Number, codename: String) => {
  const data = {
    playerID: playerId,
    codename: codename,
  };
  return await query(route, 'post', null, data);
}

const modifyPlayer = async (playerId: Number, codename: String) => {
  const data = {
    playerID: playerId,
    codename: codename,
  };
  return await query(route, 'put', null, data);
}

const deletePlayer = async (playerId: Number) => {
  return await query(route, 'delete', playerId, []);
}


export {
  getPlayer,
  getAllPlayers,
  addPlayer,
  modifyPlayer,
  deletePlayer,
};
