import styled from "styled-components"
import { Link } from "react-router-dom"

const Movie = ({id, src, alt}) => {
  return(
    <StyledMovie>
      <Link to={`/sessoes/${id}`}>
        <ImgMovie src={src} alt={alt} />
      </Link>
    </StyledMovie>
  )
}

const StyledMovie = styled.li`
  height: 210px;
  border-radius: 8px;
`

const ImgMovie = styled.img`
  height: 100%;
  border-radius: 8px;
`

export default Movie