import { createGlobalStyle } from "styled-components";
import "./font.css"

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
		box-sizing: border-box;
	}
	:root {
		font-size: 10px;
	}

	body {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		font-family: 'Inter', sans-serif;
    background: #ECF1FF;
	}

	h1 {
		font-size: 2rem;
    font-weight: 700;
    margin: 0.8rem;
    color: #717A94;
	}

  p {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0.8rem;
    color: #717A94;
  }

  hr {
    width: 100%;
    height: 0.1rem;
    border: 0;
    color: #ECF1FF;
    background-color: #ECF1FF;
    border-color: #ECF1FF;
  }
`;

export default GlobalStyle;