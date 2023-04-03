import styled from "styled-components";
import useInput from "../hooks/useInput";
import { TodoContext } from "../context/todoProvider";
import { useContext } from "react";

const Input = () => {
  const todo = useInput();
  const { todoDispatch } = useContext(TodoContext);

  const todoData = {
    id: new Date(),
    text: todo.value,
    isDone: false,
  };

  const handleInputButtonClick = () => {
    if (todoData.text.trim()) {
      todoDispatch({ type: "TODO", value: todoData });
      todo.setValue("");
    } else {
      alert("Don't just enter spaces! 👀");
    }
  };

  return (
    <>
      <InputForm onSubmit={(e) => e.preventDefault()}>
        <InputText {...todo} placeholder="📍 Enter your to-do" />
        <InputButton onClick={handleInputButtonClick}>+</InputButton>
      </InputForm>
    </>
  );
};

const InputForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const InputText = styled.input`
  width: 80%;
  height: 30px;
  font-size: 18px;
  border: 0;
  border-radius: 15px;
  outline: none;
  background: rgba(213, 213, 213, 0.5);
`;

const InputButton = styled.button`
  border: 0;
  background: none;
  font-size: 25px;
  cursor: pointer;
`;

export default Input;
