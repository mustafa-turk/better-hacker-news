import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  *:hover {
    transition: 0.3s;
  }
  html {
    font-family: inter;
  }
  body {
    animation: fadeIn ease 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    background: black;
    font-family: inter;
    color: white;
  }
  body::-webkit-scrollbar {
    display: none !important;
  }
  @keyframes fadeIn {
    0% { opacity: 0 }
    100% { opacity: 1 }
  }
  h1,
  h2,
  h3,
  body,
  p,
  a {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: white;
  }
  ul {
    padding-inline-start: 20px;
  }
  hr {
    border-top: 1px solid #EAEAEA;
  }
  h1 {
    font-size: 28px;
  }
  p {
    margin: 0 !important;
  }
`;
