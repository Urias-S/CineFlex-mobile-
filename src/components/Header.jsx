import styled from "styled-components";
import icon from '../assets/icon.png'


export default function Header () {
  return (
    <HeaderSection>
      <Icon  src = {icon}/>
      <span>Cineflex</span>
    </HeaderSection>
  );
}
const Icon = styled.img`
  height: 40px;
  width: auto;
  margin-right: 15px;
`
const HeaderSection = styled.header`
  span {
    font-family: "Raleway", sans-serif;
    font-size: 34px;
    font-weight: 600;
    color: rgba(250, 219, 197, 1);
  }
  @media (max-width: 768px) {
    background-color: rgba(238, 137, 127, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 10vh;
  }
`;