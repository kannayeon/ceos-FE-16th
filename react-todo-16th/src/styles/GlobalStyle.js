import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 800;
  font-style: normal;
}

body {
    height: 100vh;
    background: linear-gradient(to left, rgb(221, 202, 209), rgb(210, 173, 190));
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Pretendard-Regular";
    margin: 0;
}

h1,
h2 {
  margin-left: 6%;
  margin-bottom: 0;
}

li {
    list-style: none;
}

button {
  border: 0;
  background: none;
  font-size: 20px;
  cursor: pointer;
}
}
`;

export default GlobalStyle;
