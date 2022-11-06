import styled from "styled-components";
import bgTriangle from '../../assets/bg-triangle.svg'

interface IProps {
  borderColor: string[];
}

export const Container = styled.section`
  height: 100%;
  width: 100%;
  background-image: url(${bgTriangle});
  background-size: 310px;
  background-position: 50%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 500px){
    background-size: 450px;
  }
`

export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50%;
  width: 100%;

  @media screen and (min-width: 500px){
    width: 500px;
    justify-content: space-between;
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
`


export const SecondRow = styled.div`
  display: flex;
  justify-content: center;
`