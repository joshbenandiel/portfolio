import styled from 'styled-components'

export const Wrapper = styled.div`
position: relative;
`

export const Container = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: red;
  z-index: 1000;
  transform: ${props => props.transition};
  transition: 300ms;
  display: none;
`