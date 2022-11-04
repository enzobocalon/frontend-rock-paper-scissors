import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;

  @media screen and (max-width: 800px){
    justify-content: center;
  }

  @media screen and (max-height: 700px){
    margin-top: 1rem;
  }
`

export const Button = styled.button`
  background-color: inherit;
  border: 2px solid white;
  padding: 1rem 2.5rem;
  cursor: pointer;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  font-family: 'Barlow Semi Condensed', sans-serif;
  letter-spacing: 5px;
  transition: all .3s ease;

  &:hover{
    background-color: white;
    color: inherit;
    transition: all .3s ease;
  }
`

export const ModalContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Modal = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 12px;

  div {
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg{
      cursor: pointer;
    }
  }
`