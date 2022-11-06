import styled from "styled-components";

export const Container = styled.section`
  width: 95%;
  border: 2px solid hsl(217, 16%, 45%);
  border-radius: 12px;
  margin-top: 1rem;
  display: flex;

  @media screen and (min-width: 900px){
    width: 50%;
  }
`

export const Title = styled.div`
  padding: 2rem;
  width: 60%;
  h1{
    color: white;
    font-size: 1.8rem;
  }

  @media screen and (min-width: 700px){
    h1{
      font-size: 2.5rem;
    }
  }
`

export const ScoreContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1.5rem 1rem;

`

export const Score = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 12px;
  width: 100%;
  height: 100%;

  h1{
    font-size: 2.5rem;
    color: hsl(229, 25%, 31%);
  }
  h2{
    font-size: 1.2rem;
    color: hsl(229, 64%, 46%);
    letter-spacing: 2px;
  }

  @media screen and (min-width: 400px){
    width: 150px;
  }
`