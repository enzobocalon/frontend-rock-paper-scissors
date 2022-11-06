import styled from "styled-components";

interface IProps {
  borderColor: string[];
}

export const Border = styled.div<IProps>`
  background-image: ${props => `linear-gradient(${props.borderColor![0]}, ${props.borderColor![1]})`};
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (min-width: 500px){
    width: 200px;
    height: 200px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Play = styled.div`
  background-color: white;
  width: 130px;
  height: 130px;
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

  @media screen and (min-width: 500px){
    width: 180px;
    height: 180px;
  }

`