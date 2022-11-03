import styled from "styled-components";

interface IProps {
  borderColor?: string[];
  shouldTransition?: string | null;
}

export const Container = styled.section`
  width: 50%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Border = styled.div<IProps>`
  background-image: ${props => `linear-gradient(${props.borderColor![0]}, ${props.borderColor![1]})`};
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 450px){
    width: 150px;
    height: 150px;
  }
`

export const Play = styled.div`
  background-color: white;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 1px 8px 5px 2px rgb(0 0 0 / 20%), 2px 2px 5px rgb(0 0 0 / 10%);
  transition: all .3s ease;

  &:hover{
    background-color: rgba(236, 231, 231, 1);
    transition: all .3s ease;
  }

  @media screen and (max-width: 450px){
    width: 130px;
    height: 130px;
  }
`

export const FirstRow = styled.div<IProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${props => props.shouldTransition ? '100%' : '50%'};;
  color: white;
  font-size: 1rem;
  transition: all .3s ease;
  
  h1{
    width: 200px;
    text-align: center;
    margin-bottom: 2rem;
}
`

export const SecondRow = styled.div<IProps>`
  width: ${props => props.shouldTransition ? '100%' : '50%'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all .3s ease;
`

export const StatusContainer = styled.div<IProps>`
  opacity: ${props => props.shouldTransition ? '1' : '0'};
  pointer-events: ${props => props.shouldTransition ? 'all' : 'none'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  width: 20%;

  h1{
    font-size: 1.25rem;
    color: white;
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