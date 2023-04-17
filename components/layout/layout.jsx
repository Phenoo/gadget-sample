import React from 'react'
import NavigationBar from '../Navbar'
import FooterSection from '../Footer'
import Head from 'next/head'


const Layout = ({children}) => {
  return (
    <>
    <Head>
      <title>Gadgeett</title>
    </Head>
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