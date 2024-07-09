import styled from "styled-components"
import Movie from "./Movie"

const Main = () => {
  return(
    <StyledMain>
      <RouteTitle>Em Cartaz</RouteTitle>
      <Movies>
        <Movie />
      </Movies>
    </StyledMain>
  )
}

const StyledMain = styled.div`
  display:flex;
  justify-content:center;
  padding: 30px 0;
  row-gap: 30px;
`

const RouteTitle = styled.p`
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.04em;
  color:white;
`

const Movies = styled.ol`
  
`

export default Main