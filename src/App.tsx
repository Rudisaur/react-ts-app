import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Shops from './components/content/shops/Shops'
import Sidebar from './components/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import CreateShopContainer from './components/content/shops/CreateShopContainer'
import Experimental from './components/content/experimental/Experimental'

function App(props: any) {
  const [count, setCount] = useState(0)

  return (
    <div className='App-wrapper'>
      <div className='Header' ><Header /></div>
      <div className='Navigation'><Navbar  /></div>
      <div className='Content'><Routes>
        <Route path = '/shops' element = {<Shops/>}/>
        <Route path = '/shops/create-shop' element = {<CreateShopContainer/>}/>
        <Route path = '/experimental' element = {<Experimental/>}/>
        </Routes></div>
      <div className='Sidebar'><Sidebar  /></div>
    </div>
  )
}

export default App
