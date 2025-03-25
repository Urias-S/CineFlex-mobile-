import styled from "styled-components";

export default function OnDisplay({ movies }) {
  return (
    <>
      <Display>
        <Title>
          <TitleName>Em Cartaz</TitleName>
        </Title>
        <MoviesSection>
          {movies.map((movie) => {
            return (<Poster src={movie.posterURL} key={movie.id} />);
          })}
        </MoviesSection>
      </Display>
    </>
  );
}

const MoviesSection = styled.div`
  width: 90vw;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  padding-bottom: 25px;
`;

const Poster = styled.img`
  width: 145px;
  height: auto;
  border-radius: 8px;
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