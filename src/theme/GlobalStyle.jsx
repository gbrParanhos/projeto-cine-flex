import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  h1{
    font-family: Righteous;
  }

  p,span{
    font-family: Recursive;
  }
`
 
export default GlobalStyle