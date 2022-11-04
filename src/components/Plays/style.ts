import styled from "styled-components";

interface IProps {
  borderColor: string[];
}

export const Border = styled.div<IProps>`
  background-image: ${props => `linear-gradient(${props.borderColor![0]}, ${props.borderColor![1]})`};
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

  @media screen and (max-width: 320px){
    width: 120px;
    height: 120px;
  }

  @media screen and (max-height: 700px){
    width: 120px;
    height: 120px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
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

  @media screen and (max-width: 500px){
    width: 130px;
    height: 130px;
  }

  @media screen and (max-width: 320px){
    width: 100px;
    height: 100px;
  }

  @media screen and (max-height: 700px){
    width: 100px;
    height: 100px;
  }
`