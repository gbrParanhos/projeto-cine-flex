import styled from "styled-components"
import Loader from "./Loader"
import Seat from "./Seat"
import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const Seats = ({ order, setOrder }) => {
  const [seats, setSeats] = useState(null)
  const idSession = useParams().idSession
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSession}/seats`)
    .then(({data}) => {
      setSeats(data.seats)
      setOrder({ movie: data.movie.title, date: data.day.date, time: data.name })
    })
    .catch(() => console.log('deu ruim'))
  },[])

  const buyTickets = (e) => {
    e.preventDefault()
    setName('')
    setCpf('')
    navigate('/sucesso')
  }

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
      <Line />
      <FormOrder onSubmit={buyTickets} >
        <LabelForm htmlFor="name">Nome do comprador(a)</LabelForm>
        <InputForm id="name" type="text" placeholder="Digite seu nome..." required value={name} onChange={e => setName(e.target.value)} />
        <LabelForm htmlFor="cpf">CPF do comprador(a)</LabelForm>
        <InputForm id="cpf" type="number" placeholder="Digite seu CPF..." required value={cpf} onChange={e => setCpf(e.target.value)} />
        <ButtonForm type="submit">Reservar assento(s)</ButtonForm>
      </FormOrder>
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

const Line = styled.hr`
  width: 300px;
  background-color: #4E5A65;
`

const FormOrder = styled.form`
  display: flex;
  flex-direction: column;
  width: 322px;
`

const LabelForm = styled.label`
  font-size: 16px;
  line-height: 25px;
  font-weight: 400;
  color: white;
`

const InputForm = styled.input`
  height: 40px;
  padding: 0 15px;
  margin-bottom: 10px; 
  border-radius: 8px;
  border: 1px solid #D4D4D4;
  &::placeholder {
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    color: #AFAFAF;
  };
`

const ButtonForm = styled.button`
  height: 40px;
  margin-top: 25px;
  border-radius: 8px;
  background-color: #EE897F;
  font-family: Sarala;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #2B2D36;
`

export default Seats