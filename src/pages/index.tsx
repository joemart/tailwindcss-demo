import { ReactNode, useState } from "react"
import Navbar from "./components/misc/Navbar"
import Layout from "./components/misc/Layout"
import Hero from "./components/Hero"
import Background from "./components/misc/Background"
import Features from "./components/Features"


const Home = function () {

  let [openBurger, setOpenBurger] = useState(false)


  return (
    <>
      <Navbar openBurger={openBurger} setOpenBurger={setOpenBurger} />
      <Background setOpenBurger={setOpenBurger} />
      <div className="h-screen">
        <Hero />
      </div>

      <Features></Features>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}

export default Home