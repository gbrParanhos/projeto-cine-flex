import styled from "styled-components"

const Seat = ({ seats, setSeats, seatIndex, seatNumber, isAvailable }) => {
  const choseSeat = (ind) => {
    const listSeats = [...seats]
    if(listSeats[ind].isChosed) {
      listSeats[ind].isChosed = false;
      setSeats(listSeats);
    } else {
      listSeats[ind].isChosed = true;
      setSeats(listSeats)
    }
  }
  console.log(seats)
  return(
    <StyledSeat onClick={() => isAvailable && choseSeat(seatIndex)} isAvailable={isAvailable} isChosed={seats[seatIndex].isChosed} >
      <SeatNumber>{seatNumber}</SeatNumber>
    </StyledSeat>
  )
}

const StyledSeat = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 12px;
  border: ${({isChosed}) => isChosed && '2px solid #EE897F'};
  background-color: ${({ isAvailable, isChosed }) => {
    if (!isAvailable) return '#2B2D36'
    if (!isChosed) return '#9DB899'
    return '#FADBC5'
    } };
`

const SeatNumber = styled.span`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: #2B2D36;
`

export default Seat