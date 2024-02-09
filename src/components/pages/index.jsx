import styled from "styled-components";

const Home = () => {
  const ContainerStyle = styled.div`
    font-family: "Noto Sans", sans-serif;
    background-color: #1a1a1a;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    max-width: 900px;
    margin: 20px auto;
    align-items: center;
  `;
  return (
    <ContainerStyle>
      <p>Ini Halaman apa</p>
    </ContainerStyle>
  );
};

export default Home;
