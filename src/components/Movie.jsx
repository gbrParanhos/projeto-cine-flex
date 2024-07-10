import styled from "styled-components"

const Movie = ({id, src, alt}) => {
  console.log("id",id)
  console.log("url",src)
  console.log("title",alt)
  return(
    <StyledMovie>
      <ImgMovie src={src} alt={alt} />
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