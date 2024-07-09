import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import Main from "./components/Main"
import Header from "./components/Header"
import Sessions from "./components/Sessions"
import Seats from "./components/Seats"
import Ticket from "./components/Ticket"

const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Header/>
        <Routes>
          <Route path="/" element={<Main></Main>}/>
          <Route path="/sessoes/:idSession" element={<Sessions></Sessions>}/>
          <Route path="/assentos/:idSeats" element={<Seats></Seats>}/>
          <Route path="/sucesso" element={<Ticket></Ticket>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

const Layout = styled.div`
  width:100vw;
  height:100vh; //por enquanto só
  background-color: #212226;
`

export default App