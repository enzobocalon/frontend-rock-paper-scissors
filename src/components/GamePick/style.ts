import styled from "styled-components";

interface IProps {
  shouldTransition?: string | null;
}

export const Container = styled.section`
  width: 50%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 1450px){
    width: 70%;
  }

  @media screen and (max-width: 667px){
    width: 95%;
  }

  @media screen and (max-height: 740px){
    height: 40%;
  }
`

export const Border = styled.div<IProps>`
  background-color: hsl(229, 25%, 31%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 500px){
    width: 150px;
    height: 150px;
  }

  @media screen and (max-height: 700px){
    width: 120px;
    height: 120px;
  }
`

export const FirstRow = styled.div<IProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${props => props.shouldTransition ? '85%' : '50%'};
  color: white;
  transition: all .3s ease;
  
  h1{
    width: 50%;
    text-align: left;
    margin-left: 2rem;
    margin-bottom: 2rem;
    &:last-child{
      text-align: right;
      margin-left: 0;
    }
  }

  @media screen and (max-width: 500px){
    width: ${props => props.shouldTransition ? '90%' : '85%'};
    h1{
      margin-left: 0;
      width: 40%;
      &:last-child{
        width: 60%;
      }
    }
  }

  @media screen and (max-width: 390px){
    h1{
      font-size: 1.2rem;
    }
  }
`

export const SecondRow = styled.div<IProps>`
  width: ${props => props.shouldTransition ? '100%' : '50%'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all .3s ease;
  position: relative;

  @media screen and (max-width: 1650px){
    width: ${props => props.shouldTransition ? '100%' : '75%'};
  }

  @media screen and (max-width: 575px){
    width: ${props => props.shouldTransition ? '100%' : '80%'};
  }

  @media screen and (max-width: 390px){
    width: ${props => props.shouldTransition ? '100%' : '85%'};
  }
`

export const StatusContainer = styled.div<IProps>`
  opacity: ${props => props.shouldTransition ? '1' : '0'};
  pointer-events: ${props => props.shouldTransition ? 'all' : 'none'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  width: 50%;

  h1{
    font-size: 1.25rem;
    color: white;
  }


  @media screen and (max-width: 900px){
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
  }
`

export const Button = styled.button`
  background-color: white;
  color: hsl(229, 64%, 46%);
  border: none;
  padding: 1rem;
  width: 100%;
  font-weight: 700;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 1.25rem;
  letter-spacing: 2px;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all .3s ease;

  &:hover{
    background-color: inherit;
    border: 2px solid white;
    color: white;
    transition: all .3s ease;
  }
`