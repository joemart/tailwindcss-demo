import { ReactNode, useState } from "react"
import Navbar from "./components/misc/Navbar"
import Layout from "./components/misc/Layout"
import Background from "./components/misc/Background"

import Hero from "./components/Hero"
import Features from "./components/Features"
import SignUp from "./components/SignUp"

const Home = function () {

  let [openBurger, setOpenBurger] = useState(false)


  return (
    <>
      <Navbar openBurger={openBurger} setOpenBurger={setOpenBurger} />
      <Background setOpenBurger={setOpenBurger} />
      {/* <div className="h-screen">
        <Hero />
      </div>
      <Features></Features>
      <SignUp></SignUp> */}


    </>
  )
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}

export default Home