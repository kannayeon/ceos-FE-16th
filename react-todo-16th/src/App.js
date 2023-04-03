import TodoContainer from "./components/TodoContainer";
import TodoProvider from "./context/todoProvider";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoContainer />
    </TodoProvider>
  );
}

export default App;
