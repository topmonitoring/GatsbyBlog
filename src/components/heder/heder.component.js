import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'

const Heder = () => {
  const [navbarOpen, setOpen] = useState(false)

  const handleNavbar = () => {
    setOpen(!navbarOpen)
  }
  return <Navbar navbarState={navbarOpen} handleNavbar={handleNavbar} />
}

export default Heder
