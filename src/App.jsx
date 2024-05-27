import { useState } from "react";
import styled from "styled-components";
import "./App.css";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 60px;
  height: 30px;
  font-size: 15px;
  border-radius: 10px;
  margin: 0px 10px 0px 10px;
  border: none;
  background-color: ${(prop) => prop.$bgColor};
  color: #ffffff;
`;

function App() {
  const [count, setCount] = useState(0);
  const handlePlusBtn = () => {
    setCount(count + 1);
  };
  const handleMinusBtn = () => {
    setCount(count - 1);
  };
  const handleResetBtn = () => {
    setCount(0);
  };

  return (
    <>
      <Box>
        <h1 className="count">Count: {count}</h1>
        <div>
          <Button $bgColor="#ff3434" onClick={handlePlusBtn}>
            +
          </Button>
          <Button $bgColor="#2550ff" onClick={handleMinusBtn}>
            -
          </Button>
          <Button $bgColor="#228b1e" onClick={handleResetBtn}>
            reset
          </Button>
        </div>
      </Box>
    </>
  );
}

export default App;
