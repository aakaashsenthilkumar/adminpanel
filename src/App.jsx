import './App.css'  
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import { useState } from "react"


function App() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header  OpenSidebar={OpenSidebar}/>
      <Sidebar OpenSidebarToggle={openSidebarToggle}/>
      <Home />
    </div>
  )
}

export default App
