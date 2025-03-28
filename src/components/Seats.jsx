import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
export default function Seats() {
  const [availables, setAvailables] = useState([]);
  const { idSessao } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
      .then(res => setAvailables(res.data.seats))
      .catch(error => alert(error.response.data));
  }, []);

  function submitReserve(submit) {
    submit.preventDefault();

    if (selectedSeats.length === 0) {
      alert('Selecione o(s) assento(s)');
      return;
    }

    const reserve = {
      ids: selectedSeats,
      name: name,
      cpf: cpf
    }

    axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', reserve)
    .then(() => navigate('/sucesso'))
    .catch((error) => console.log(error.response.data));
  }

  function toggleSeat(id) {
    setSelectedSeats(prev => prev.includes(id) ? prev.filter((seatId) => seatId !== id) : [...prev, id]);
  }
  return (
    <Display>
      <Title>
        <TitleName>Selecione o(s) assento(s)</TitleName>
      </Title>
      <SeatsForm onSubmit={(submit) => submitReserve(submit)}>
        <SeatsSection>
          {availables.map((seat) => {
            return (
              <Seat key={seat.id}>
                <HiddenCheckbox
                  disabled={!seat.isAvailable}
                  type="checkbox"
                  id={seat.id}
                  checked={selectedSeats.includes(seat.id)}
                  onChange={() => toggleSeat(seat.id)}
                />
                <SeatIcon $isAvailable={seat.isAvailable} htmlFor={seat.id}>{seat.name}</SeatIcon>
              </Seat>
            );
          })}
        </SeatsSection>
        <BuyerData>
          <Name>
            Nome do comprador(a)
          </Name>
          <NameInput
            type="text"
            placeholder="Digite seu nome..."
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Cpf>
            CPF do comprador(a)
          </Cpf>
          <CpfInput
            type="tel"
            placeholder="Digite seu CPF..."
            onChange={(e) => setCpf(e.target.value)}
            required
          />
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