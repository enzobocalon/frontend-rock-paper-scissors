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

  @media screen and (max-width: 900px){
    width: 60%;
  }

  @media screen and (max-width: 750px){
    width: 75%;
  }

  @media screen and (max-width: 600px){
    width: 90%;
  }

  @media screen and (max-width: 450px){
    background-size: 40vh;
  }

  @media screen and (max-width: 375px){
    width: 95%;
  }

  @media screen and (max-width: 330px){
    width: 100%;
  }

  @media screen and (min-width: 2000px){
    background-size: 50% 50%;
  }
`

export const FirstRow = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 1000px){
    justify-content: space-between;
  }

  @media screen and (max-width: 800px){
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

export const SecondRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6rem;

  @media screen and (max-width: 1000px){
    margin-top: 4rem;
  }

  @media screen and (min-width: 2000px){
    margin-top: 20rem;
  }
`