import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { Link } from "react-router";
export default function Schedules() {
  const [sessions, setSessions] = useState([]);
  const { idFilme } = useParams();
  useEffect(() => {
    axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
      .then(res => setSessions(res.data.days))
      .catch(error => alert(error.response.data));
  }, [])
  return (
    <Display >
      <Title>
        <TitleName>Selecione o horário</TitleName>
      </Title>
      <SchedulesSection >
        {sessions.map((session) => {
          return (
            <SessionDay key={session.id}>
              <p>
                {session.weekday}, {session.date}
              </p>
              <SessionSchedule >
                {session.showtimes.map((session) => {
                  return (
                    <Link key={session.id} to={`/assentos/${session.id}`}> <button >{session.name}</button></Link>
                  );
                })}
              </SessionSchedule>
            </SessionDay>
          );
        })}
      </SchedulesSection>
    </Display>
  );
}
const SessionSchedule = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
  border-top: 1px solid rgba(78, 90, 101, 1);
  width: 100%;
  height: 75px;
  button {
    width: 85px;
    height: 40px;
    border-radius: 4px;
    border: solid 2px rgba(238, 137, 127, 1);
    color: rgba(238, 137, 127, 1);
    font-weight: 400;
    font-family: "Sarala", sans-serif;
    font-size: 16px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const SessionDay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: rgba(43, 45, 54, 1);
  width: 80vw;
  height: 150px;
  border-radius: 8px;
  margin-bottom: 25px;
  padding: 0px 20px;
  p {
    font-family: "Sarala", sans-serif;
    font-weight: 400;
    color: white;
    font-size: 20px;
    height: 75px;
    display: flex;
    align-items: center;
  }
`;


const SchedulesSection = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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