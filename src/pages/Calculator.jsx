import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionsOfCalc } from "../store/reducers/calculatorReducer";
import styled from "styled-components";

const Calculator = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.calculator.count);

  const handleAdd = () => {
    const num = prompt("Enter a number to add:");
    dispatch(actionsOfCalc("plus", +num));
  };

  const handleSubtract = () => {
    const num = prompt("Enter a number to subtract:");
    dispatch(actionsOfCalc("minus", +num));
  };

  const handleMultiply = () => {
    const num = prompt("Enter a number to multiply:");
    dispatch(actionsOfCalc("multiply", +num));
  };

  const handleDivide = () => {
    const num = prompt("Enter a number to divide:");
    dispatch(actionsOfCalc("divide", +num));
  };

  const toggleLogin = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <div>
      <h1 style={{ margin: "30px" }}>{count}</h1>

      <div>
        <ButtonsStyled onClick={handleAdd}>Add</ButtonsStyled>
        <ButtonsStyled onClick={handleSubtract}>Subtract</ButtonsStyled>
        <ButtonsStyled onClick={handleMultiply}>Multiply</ButtonsStyled>
        <ButtonsStyled onClick={handleDivide}>Divide</ButtonsStyled>
      </div>

      <ButtonLogout onClick={toggleLogin}>Log out</ButtonLogout>
    </div>
  );
};

export default Calculator;

const ButtonsStyled = styled.button`
  background-color: yellow;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  margin: 15px;
  border: 1px solid gray;
`;

const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonLogout = styled.button`
  background-color: #0077ff;
  border: none;
  padding: 10px 15px;
  margin: 10px;
  border-radius: 5px;
  font-size: 22px;
`;
