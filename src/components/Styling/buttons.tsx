import styled from 'styled-components'

export const NavButton = styled.button`
  border: none;
  color: black;
  height: 50px;
  width: 100px;
  border-radius: 5px;
  background-color: green;
  margin-top: 10px;
  &:hover {
    transform: scale(1.03);
    background-color: #007800;
  }
`;

export const FedButton = styled.button`
  border: none;
  color: black;
  height: 50px;
  width: 100px;
  border-radius: 5px;
  background-color: #5050ff;
  margin-top: 10px;
  &:hover {
    transform: scale(1.03);
    background-color: #4949ff;
  }
`;