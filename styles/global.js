import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  *::-webkit-scrollbar {
    display: none;
  }
  *:hover {
    transition: 0.3s;
  }
  body {
    animation: fadeIn ease 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    background: #0F0F0F;
    font-family: 'Roboto';
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
  h1 {
    font-size: 28px;
  }
  p {
    margin: 0 !important;
  }
  a:link {
    word-wrap: break-word;
  }
`;
