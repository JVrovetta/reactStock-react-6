import Footer from "./Footer"
import Header from "./Header"
import { Outlet } from "react-router-dom"

function RootLayout() {
  return (
    <>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout