import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterClass from "./components/counterclass"
import Header from "./components/header"
function App() {
  return (
    <div>
      <Header/>
      <CounterClass />
      </div>
  )
}

export default App