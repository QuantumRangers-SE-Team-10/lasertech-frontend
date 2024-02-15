import query from './query';

const route = 'Player';

const getPlayer = async (id: Number) => {
  return await query(route, 'get', id, []);
}

const getAllPlayers = async () => {
  return await query(route, 'get', null, []);
}

const addPlayer = async (playerId: Number, codename: String) => {
  const queryParams = {
    // playerId: playerId,
    codename: codename,
  };
  return await query(route, 'post', null, queryParams);
}

export {
  getPlayer,
  getAllPlayers,
  addPlayer,
};
