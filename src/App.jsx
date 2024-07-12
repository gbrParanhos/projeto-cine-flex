import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import Main from "./components/Main"
import Header from "./components/Header"
import DaySessions from "./components/DaySessions"
import Seats from "./components/Seats"
import Ticket from "./components/Ticket"
import { useState } from "react"

const App = () => {
  const [order, setOrder] = useState(null)
  return (
    <BrowserRouter>
      <Layout>
        <Header/>
        <Routes>
          <Route path="/" element={<Main></Main>}/>
          <Route path="/sessoes/:idMovie" element={<DaySessions></DaySessions>}/>
          <Route path="/assentos/:idSession" element={<Seats order={order} setOrder={setOrder} ></Seats>}/>
          <Route path="/sucesso" element={<Ticket order={order} ></Ticket>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

const Layout = styled.div`
  padding-top: 65px;
  width: 100vw;
  min-height: 100vh;
  background-color: #212226;
`

export default App