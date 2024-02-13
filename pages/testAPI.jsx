import { useEffect, useState } from 'react';
import getPlayers from '../api/player'

function TestAPI() {
  const [players, setValue] = useState('');

  useEffect(() => {
    async function getValue() {
      const response = await getPlayers();
      setValue(response);
    }
    
    getValue();
  }, []);

  useEffect(() => {
    console.log(players);
  }, [players]);

  let player1Codename = '';

  if (players != '') {
    player1Codename = players.data[0].codename;
  }

  return (
    <>
      <p>
        Player 1 is {player1Codename}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </>
  )
}

export default TestAPI;
