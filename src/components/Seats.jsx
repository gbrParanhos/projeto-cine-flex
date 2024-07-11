import styled from "styled-components"
import Loader from "./Loader"
import Seat from "./Seat"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const Seats = ({ order, setOrder }) => {
  const [seats, setSeats] = useState(null)
  const idSession = useParams().idSession

  useEffect(() => {
    axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSession}/seats`)
    .then(({data}) => {
      setSeats(data.seats)
      setOrder({ movie: data.movie.title, date: data.day.date, time: data.name })
    })
    .catch(() => console.log('deu ruim'))
  },[])

  if (seats === null) return <Loader/>
  return(
    <StyledSeats>
      <RouteTitle>Selecione o(s) Assento(s)</RouteTitle>
      <ListSeats>
        {seats.map((seat,i) => (
          <Seat
            key={seat.id}
            seatIndex={i}
            seats={seats}
            setSeats={setSeats}
            seatNumber={seat.name}
            isAvailable={seat.isAvailable}
          />
        ))}
      </ListSeats>
    </StyledSeats>
  )
}

const StyledSeats = styled.div`
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

const ListSeats = styled.ol`
  display: flex;
  width: 322px;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 20px;
`

export default Seats