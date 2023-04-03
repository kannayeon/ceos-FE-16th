import styled from "styled-components";
import Input from "./Input";
import Item from "./Item";

const TodoContainer = () => {
  return (
    <Container>
      <h1>Things to do</h1>
      <Input />
      <Item title="📂 to do" done={false} />
      <Item title="🗑 done" done={true} />
    </Container>
  );
};

const Container = styled.div`
  width: 22rem;
  height: 40rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgb(125, 123, 125);
  display: flex;
  flex-direction: column;
`;

export default TodoContainer;
