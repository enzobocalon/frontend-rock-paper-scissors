import styled from "styled-components";

export const Container = styled.section`
  width: 50%;
  height: 20%;
  border: 2px solid hsl(217, 16%, 45%);
  border-radius: 12px;
  margin-top: 1rem;
  display: flex;

  @media screen and (max-width: 1100px){
    width: 70%;
  }

  @media screen and (max-width: 580px){
    width: 90%;
  }

  @media screen and (max-width: 450px){
    height: fit-content;
    flex-direction: column;
  }
`

export const Title = styled.div`
  padding: 2rem;
  width: 60%;
  min-width: fit-content;
  margin: 0;
  h1{
    color: white;
    font-size: 2.2rem;
  }

  @media screen and (max-width: 450px){
    width: 100%;
    text-align: center;
    padding: 1rem;
  }

  
  @media screen and (max-height: 740px){
   h1{
    font-size: 1.8rem;
   } 
  }
`

export const ScoreContainer = styled.div`
  width: 40%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 450px){
    width: 100%;
  }
`

export const Score = styled.div`
  background-color: white;
  height: 70%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 12px;

  h1{
    font-size: 2.5rem;
    color: hsl(229, 25%, 31%);
  }
  h2{
    font-size: 1.2rem;
    color: hsl(229, 64%, 46%);
    letter-spacing: 2px;
  }

  @media screen and (max-width: 450px){
    width: 90%;
    height: fit-content;
    margin-bottom: 1rem;
  }

`