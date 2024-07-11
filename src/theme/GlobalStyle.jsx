import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  h1{
    font-family: Raleway;
  }

  a,p{
    font-family: Sarala;
  }

  span{
    font-family: Roboto;
  }
`
 
export default GlobalStyle