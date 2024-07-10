import styled from "styled-components"
import Loader from "./Loader"
import Sessions from "./Sessions"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const DaySessions = () => {
  const [daySessions, setDaySessions] = useState(null)
  const idMovie = useParams().idMovie

  useEffect(() => {
    axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idMovie}/showtimes`)
    .then(res => setDaySessions(res.data.days))
    .catch(() => console.log('deu ruim'))
  },[])

  if (daySessions === null) return <Loader/>

  return(
    <StyledDaySessions>
      <RouteTitle>Selecione o Horário</RouteTitle>
      <ListDaySessions>
        {daySessions.map(daySession => (
          <Sessions
            key={daySession.id}
            weekday={daySession.weekday}
            date={daySession.date}
            listSessions={daySession.showtimes}
          />
        ))}
      </ListDaySessions>
    </StyledDaySessions>
  )
}

const StyledDaySessions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  row-gap: 30px;
`

const RouteTitle = styled.p`
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: white;
`

const ListDaySessions = styled.ol`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 25px;
  row-gap: 25px;
`

export default DaySessions