import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Loader from "./Loader"
import styled from "styled-components"

const Ticket = ({order}) => {
  const navigate = useNavigate()

  useEffect(() => {
    if(order === null) navigate('/')
  },[])

  if (order === null) return <Loader/>

  return(
    <StyledTicket>
      <RouteTitle>Pedido finalizado!</RouteTitle>
      <Order>
        <OrderItem>
          <OrderTitle>Filme e sessão</OrderTitle>
          <Line />
          <OrderData>{order.movie}</OrderData>
          <OrderData>{order.date} às {order.time}</OrderData>
        </OrderItem>
        <OrderItem>
          <OrderTitle>Ingressos</OrderTitle>
          <Line />
          {order.seats.map(({name}) => <OrderData key={name} >Assento {name}</OrderData>)}
        </OrderItem>
        <OrderItem>
          <OrderTitle>Comprador(a)</OrderTitle>
          <Line />
          <OrderData>Nome: {order.name}</OrderData>
          <OrderData>CPF: {order.cpf}</OrderData>
        </OrderItem>
      </Order>
      <BackButton to='/' >Voltar para a tela inicial</BackButton>
    </StyledTicket>
  )
}

const StyledTicket = styled.div`
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
  color: #9DB899;
`

const Order = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 340px;
  border-radius: 8px;
  background-color: #2B2D36;
  padding: 20px;
`

const OrderItem = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  
`

const OrderTitle = styled.p`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 32px;
  color: #EE897F;
`

const Line = styled.hr`
  width: 100%;
  background-color: #4E5A65;
`

const OrderData = styled.p`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 32px;
  color: white;
`

const BackButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 40px;
  border-radius: 8px;
  background-color: #EE897F;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #2B2D36;
`

export default Ticket