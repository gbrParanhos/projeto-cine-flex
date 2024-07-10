import styled from "styled-components"
import { Link } from "react-router-dom"

const Sessions = ({weekday, date, listSessions}) => {
  return(
    <StyledSessions>
      <DaySessionTitle>{`${weekday}, ${date}`}</DaySessionTitle>
      <ListSessions>
        {listSessions.map(session => (
          <Session key={session.id} >
            <Link to={`/assentos/${session.id}`}>
              <Time>{session.name}</Time>
            </Link>
          </Session>
        ))}
      </ListSessions>
    </StyledSessions>
  )
}

const StyledSessions = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding: 20px;
  width: 340px;
  border-radius: 8px;
  background-color: #2B2D36;
`

const DaySessionTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: white;
`

const ListSessions = styled.ol`
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #4E5A65;
  padding-top: 15px;
  column-gap: 25px;
  row-gap: 15px;
`

const Session = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  height: 40px;
  border-radius: 4px;
  border: 2px solid #EE897F;
`

const Time = styled.span`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: #EE897F;
`

export default Sessions