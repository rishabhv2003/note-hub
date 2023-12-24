import React, { useState } from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'
import { DataContextProvider } from './context/DataContext'
function App() {
  const [cards, setcards] = useState([]);
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background />
      <DataContextProvider>
        <Foreground />
      </DataContextProvider>
    </div>
  )
}

export default App
