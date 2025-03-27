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
      <SeatsSection>
        {availables.map((seat) => {
          return (
            <Seat>
              <HiddenCheckbox  disabled = {!seat.isAvailable} type="checkbox" id = {seat.id}></HiddenCheckbox>
              <SeatIcon $isAvailable = {seat.isAvailable} htmlFor={seat.id}>{seat.isAvailable ? `${seat.name}` : ''}</SeatIcon>
            </Seat>
          );
        })}
      </SeatsSection>
    </Display>
  );
}
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

const Seat = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const SeatsSection = styled.form`
  height: auto;
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
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
    flex-direction: column;
    align-items: center;
  }
`;