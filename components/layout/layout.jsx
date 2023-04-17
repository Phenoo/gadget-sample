import React from 'react'
import NavigationBar from '../Navbar'
import FooterSection from '../Footer'


const Layout = ({children}) => {
  return (
    <>
      <NavigationBar />
      <main>
        {children}
      </main>
      <footer>
        <FooterSection />
      </footer>
    </>
  )
}

export default Layout