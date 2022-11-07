import styled from "styled-components";

interface IProps {
  shouldTransition?: string | null;
}

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 700px){
    padding: 1rem;
  }
`
export const Wrapper = styled.div<IProps>`
  width: ${props => props.shouldTransition ? '100%' : '85%'};
  display: flex;
  align-items: center;
  position: relative;
  transition: width .3s ease;

  @media screen and (min-width: 700px){
    width: ${props => props.shouldTransition ? '100%' : '65%'};
  }

  @media screen and (min-width: 900px){
    width: ${props => props.shouldTransition ? '80%' : '65%'};
  }

  @media screen and (min-width: 1100px){
    width: ${props => props.shouldTransition ? '65%' : '40%'};
  }
`

export const PlayContent = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column-reverse;
  gap: 1rem;
  h1{
    font-size: 1.25rem;
    text-align: center;
    color: white;
    font-weight: bold;
  }

  @media screen and (min-width: 700px){
    flex-direction: column;
    gap: 2rem;
    h1{
      font-size: 1.5rem;
    }
  }
`

export const StatusContainer = styled.div<IProps>`
  opacity: ${props => props.shouldTransition ? '1' : '0'};
  pointer-events: ${props => props.shouldTransition ? 'all' : 'none'};
  text-align: center;
  width: 95%;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 50%);
  transition: all .3s ease;

  h1{
    font-size: 2rem;
    color: white;
  }

  @media screen and (min-width: 700px){
    position: initial;
    transform: none;
  }
`

export const Button = styled.button`
  background-color: white;
  color: hsl(229, 64%, 46%);
  border: none;
  padding: 1rem;
  width: 75%;
  font-weight: 700;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 1.25rem;
  letter-spacing: 2px;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  margin-top: 1rem;
  transition: all .3s ease;

  &:hover{
    background-color: inherit;
    border: 2px solid white;
    color: white;
    transition: all .3s ease;
  }
`