import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Headroom from 'react-headroom'

const Heder = () => {
  const [navbarOpen, setOpen] = useState(false)

  const handleNavbar = () => {
    setOpen(!navbarOpen)
  }
  return (
    <Headroom>
      <Navbar navbarState={navbarOpen} handleNavbar={handleNavbar} />
    </Headroom>
  )
}

export default Heder
