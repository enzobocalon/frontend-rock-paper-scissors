import styled from "styled-components";
import bgTriangle from '../../assets/bg-triangle.svg'

interface IProps {
  borderColor: string[];
}

export const Container = styled.section`
  height: 80%;
  width: 50%;
  margin-top: 3rem;
  background-image: url(${bgTriangle});
  background-position: 50% 20%;
  background-size: 50vh;
  background-repeat: no-repeat;


  @media screen and (max-width: 850px){
    width: 75%;
  }

  @media screen and (max-width: 600px){
    width: 90%;
  }

  @media screen and (max-width: 450px){
    background-size: 40vh;
    width: 100%;
    margin-top: 1.5rem;
  }

  @media screen and (min-width: 2000px){
    background-size: 50% 50%;
  }
`

export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50%;
  width: 100%;

  @media screen and (max-width: 1000px){
    justify-content: space-between;
  }

  @media screen and (min-width: 2000px){
    margin-top: 3rem;
  }
`

export const Border = styled.div<IProps>`
  background-image: ${props => `linear-gradient(${props.borderColor[0]}, ${props.borderColor[1]})`};
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


export const SecondRow = styled.div`
  display: flex;
  justify-content: center;
`