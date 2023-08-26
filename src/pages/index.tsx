import { NextPage } from "next"
import Link from "next/link"
import { ReactNode, useState } from "react"
import MyListBoxItemComponent from "./components/MyListBoxItemComponent"
import Navbar from "./components/Navbar"
import Layout from "./components/Layout"
import Hero from "./components/Hero"
import Background from "./components/Background"

const Home = function () {

  let [openBurger, setOpenBurger] = useState(false)


  return (
    <>

      <Navbar openBurger={openBurger} setOpenBurger={setOpenBurger} />
      <Background setOpenBurger={setOpenBurger}>
        <Hero />
        {/* Put rest of the code here */}
      </Background>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}

export default Home