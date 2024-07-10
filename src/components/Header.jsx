import styled from "styled-components"
import logo from "../assets/logo.svg"

const Header = () => {
  return(
    <StyledHeader>
      <Logo src={logo} alt="Logo-CineFlex" />
      <HeaderTitle>CineFlex</HeaderTitle>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  height:65px;
  width:100%;
  background-color: #EE897F;
  z-index: 30;
`

const Logo = styled.img`
  height: 40px;
`

const HeaderTitle = styled.h1`
  font-size: 34px;
  font-weight: 600;
  color: #FADBC5;
`

export default Header