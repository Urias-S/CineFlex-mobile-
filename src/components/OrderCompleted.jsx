import { useLocation } from "react-router";
import { Link } from "react-router";
import styled from "styled-components";
export default function OrderCompleted() {
  const location = useLocation();
  const { resume } = location.state;
  return (
    <Display>
      <Title>
        <TitleName>Pedido finalizado!</TitleName>
      </Title>
      <Resume>
        <div>
          <ResumeTitle>Filme e sessão</ResumeTitle>
          <Section>
            <p>{resume.name}</p>
            <p>{resume.day} ás {resume.time}</p>
          </Section>
        </div>
        <div>
          <ResumeTitle>Ingressos</ResumeTitle>
          <Section>
            {resume.seats.map((seat) => {
              return (
                <p key = {seat}>Assento {seat}</p>
              );
            })}
          </Section>
        </div>
        <div>
          <ResumeTitle>Comprador(a)</ResumeTitle>
          <Section>
            <p>Nome: {resume.buyerName}</p>
            <p>CPF: {resume.buyerCpf}</p>
          </Section>
        </div>
      </Resume>
      <Return to={'/'}>Voltar para tela inicial</Return>
    </Display>
  )
}
const Return = styled(Link)`
  width: 90vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: rgba(238, 137, 127, 1);
  color: rgba(43, 45, 54, 1);
  font-weight: 700;
  font-family: "Sarala", sans-serif;
  font-size: 18px;
  padding: 10px 0;
  margin-top: 35px;
`;
const Section = styled.div`
  width: 100%;
  font-family: "Sarala", sans-serif;
  color: white;
  font-weight: 400;
  font-size: 20px;
  border-top: solid 1px rgba(78, 90, 101, 1);
`;
const ResumeTitle = styled.h1`
  font-family: "Sarala", sans-serif;
  color: rgba(238, 137, 127, 1);
  font-weight: 700;
  font-size: 24px;
`


const Resume = styled.div`
  background-color: rgba(43, 45, 54, 1);
  border-radius: 8px;
  width: 90vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 20px;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px 0px;
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 0;
`;

const TitleName = styled.p`
    font-family: "Sarala", sans-serif;
    font-size: 30px;
    color: rgba(157, 184, 153, 1);
`;
const Display = styled.div`
  @media (max-width: 768px) {
    background-color: rgba(33, 34, 38, 1);
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;