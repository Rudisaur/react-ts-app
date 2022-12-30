import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Shops from './components/content/shops/Shops'
import Sidebar from './components/sidebar/Sidebar'

function App(props: any) {
  const [count, setCount] = useState(0)

  return (
    <div className='App-wrapper'>
      <div className='Header' ><Header /></div>
      <div className='Navigation'><Navbar  /></div>
      <div className='Content'><Shops  /></div>
      <div className='Sidebar'><Sidebar  /></div>
    </div>
  )
}

export default App
