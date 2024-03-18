import { useEffect, useState } from 'react';
// import { getAllPlayers } from '../api/player'
// export async function sendMessage() {
//   'use server';

//   UDPSendMessage();

//   return {
//     props: { message: 'Hello World!' },
//   }
// }

export default function TestAPI() {
  // const [players, setValue] = useState('');

  // useEffect(() => {
  //   async function getValue() {
  //     const response = await getAllPlayers();
  //     setValue(response);
  //   }
    
  //   getValue();
  // }, []);

  // useEffect(() => {
  //   UDPSendMessage();
  // }, []);

  // let player1Codename = '';

  // if (players != '') {
  //   player1Codename = players.data[0]?.codename;
  // }

  return (
    <>
      <p>
        Player 1 is {'f'}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </>
  )
}
