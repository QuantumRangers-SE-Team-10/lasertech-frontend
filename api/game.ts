import query from './query';

const route = 'Game';

const getGame = async (id: Number) => {
  const response = await query(route, 'get', id, []);
  return response.data;
  // console.log(response.data);
}

const getAllGames = async () => {
  return await query(route, 'get', null, []);
}

const addGame = async (gameId: Number, playerSessions: [{playerId: Number, team: String, equipmentId: String}]) => {
  const data = {
    gameId: gameId,
    playerSessions: playerSessions,
  };
  return await query(route, 'post', null, data);
}

const modifyGame = async (
  gameId: Number, 
  playerSessions: [{playerId: Number, team: String, equipmentId: String}]
  ) => {
  const data = {
    gameId: gameId,
    playerSessions: playerSessions,
  };
  return await query(route, 'put', null, data);
}

const deleteGame = async (gameId: Number) => {
  return await query(route, 'delete', gameId, []);
}

export {
  getGame,
  getAllGames,
  addGame,
  modifyGame,
  deleteGame,
};
