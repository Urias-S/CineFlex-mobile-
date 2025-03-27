import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
export default function Seats() {
  const [availables, setAvailables] = useState([]);
  const { idSessao } = useParams();
  useEffect(() => {
    axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
      .then(res => setAvailables(res.data.seats))
      .catch(error => alert(error.response.data));
  }, []);
  return (
    <Display>
      <Title>
        <TitleName>Selecione o(s) assento(s)</TitleName>
      </Title>
      <SeatsForm>
        <SeatsSection>
          {availables.map((seat) => {
            return (
              <Seat>
                <HiddenCheckbox disabled={!seat.isAvailable} type="checkbox" id={seat.id}></HiddenCheckbox>
                <SeatIcon $isAvailable={seat.isAvailable} htmlFor={seat.id}>{seat.isAvailable ? `${seat.name}` : ''}</SeatIcon>
              </Seat>
            );
          })}
        </SeatsSection>
        <BuyerData>
          <Name>
            Nome do comprador(a)
          </Name>
          <NameInput type="text" placeholder="Digite seu nome..." />
          <Cpf>
            CPF do comprador(a)
          </Cpf>
          <CpfInput type="text" placeholder="Digite seu CPF..." />
          <Reserve type="submit">Reservar assento(s)</Reserve>
        </BuyerData>
      </SeatsForm>
    </Display>
  );
}
const Reserve = styled.button`
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
const Cpf = styled.label`
  font-family: "Sarala", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: white;
  margin-top: 15px;
`;
const CpfInput = styled.input`
  font-family: "Sarala", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: black;
  width: 90vw;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 8px 20px;
  margin-top: 5px;
`;
const Name = styled.label`
  font-family: "Sarala", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: white;
`;
const NameInput = styled.input`
  font-family: "Sarala", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: black;
  width: 90vw;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 8px 20px;
  margin-top: 5px;
`;
const BuyerData = styled.div`
    width: 90vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    padding-top: 25px;
    border-top: solid 1px rgba(78, 90, 101, 1);
  `;
const HiddenCheckbox = styled.input`
    opacity: 0;
    position: absolute;
    width: 0;
    height: 0;
  `;

const SeatIcon = styled.label`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${props => props.$isAvailable ? 'rgba(157, 184, 153, 1);' : 'rgba(43, 45, 54, 1)'};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  color: rgba(43, 45, 54, 1);
  font-size: 11px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  ${HiddenCheckbox}:checked + & {
    background-color: rgba(250, 219, 197, 1);
    border: solid 2px rgba(238, 137, 127, 1);
  }
`;
const SeatsSection = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 26px);
    grid-template-rows: repeat(5, 26px);
    gap: 8px;
   align-items: center;
   justify-content: center;
  `;
const Seat = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

`;
const SeatsForm = styled.form`
  height: auto;
  width: 90vw;
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
    color: white;
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