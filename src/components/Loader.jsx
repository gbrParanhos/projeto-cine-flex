import styled, {keyframes} from "styled-components"

const Loader = () => {
  return(
    <StyledLoader>
      <Animation>
      </Animation>
      <Text>
        CARREGANDO
      </Text>
    </StyledLoader>
  )
}

const roll = keyframes`
  0% {top: 0px;}
  100% {top: -15px;}
`

const StyledLoader = styled.div`
  display: flex;
  position: fixed;
  top: 95px;
  left: calc( 50% - 28px );
  flex-direction: column;
  width: 56px;
  row-gap: 5px;
`

const Text = styled.p`
  text-align: center;
  font-weight:700;
  font-size: 8px;
  color: #EE897F;    
  z-index:20;
`

const Animation = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  background: #EE897F;
  z-index: 10;
  &:before, &:after {
    content: '';
    position: absolute;
    height: 120%;
    border-left: 5px dashed #212226;
    animation: ${roll} 20ms infinite;
  }
  &:before {left: 5px;}
  &:after {right: 5px;}
`

export default Loader