import { useState } from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Ballom = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  border-radius: 50px;
  background-color: #e20202;
  transform: scale(${({ size }) => size});
`;

export default function Index() {
  const [size, setSize] = useState(1);
  return (
    <HomeContainer>
      <h1 onClick={() => setSize(size + 0.1)}> Home page </h1>
      <Ballom size={size} />
    </HomeContainer>
  );
}
