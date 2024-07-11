import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  h1{
    font-family: Raleway;
  }

  a,p,label,button{
    font-family: Sarala;
  }

  span,input{
    font-family: Roboto;
  }
`
 
export default GlobalStyle