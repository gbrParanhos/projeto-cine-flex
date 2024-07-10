import styled, {keyframes} from "styled-components"
import Movie from "./Movie"
import Loader from "./Loader"
import { useEffect, useState } from "react"
import axios from "axios"

const Main = () => {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
    .then(res => setMovies(res.data))
    .catch()
  },[])

  if (movies === null) return <Loader/>

  return(
    <StyledMain>
      <RouteTitle>Em Cartaz</RouteTitle>
      <Movies>
        {movies.map(movie => (
          <Movie key={movie.id} id={movie.id} src={movie.posterURL} alt={movie.title} />
        ))}
      </Movies>
    </StyledMain>
  )
}

const StyledMain = styled.div`
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
  color:white;
`

const Movies = styled.ol`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 25px;
  row-gap: 20px;
`

export default Main