import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import playersList from './players'
import Player from './components/Player'
import PlayerList from './components/PlayersList'


function App() {
  let player = playersList["1"]
  console.log(player)

  return (
    <>
      <h1 className="text-center pb-5">Côte d'Ivoire Professional Football Team Players</h1>
      <PlayerList playerList={playersList} />
    </>
  )
}

export default App
