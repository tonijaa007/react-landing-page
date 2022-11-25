/** @jsxImportSource @emotion/react */

import { css, cx, keyframes } from '@emotion/react';
import Background1 from './images/backgroundColor_1.png';
import flowSingle from './images/flowWhite.png';
import { ReactComponent as Logo } from './images/logo.svg';

const mainStyles = css``;

const headerStyles = css`
  display: flex;
  justify-content: space-around;
  align-items: center;

  img:nth-child(2) {
    width: 250px;
    height: auto;
  }
`;

const heroBackground1 = css`
  position: absolute;
  overflow: hidden;
`;

const logoURL = css`
  display: flex;
  align-items: center;
  position: relative;
`;

const url = css`
  margin-left: 20px;
  font-weight: 500px;
`;

const flowHeaderContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flowHeader = css`
  display: inline-block;
  position: absolute;

  img:nth-child(1) {
    width: 250px;
    display: inline-block;
    max-width: 100%;
  }
`;

const websiteName = css``;

const navHeaderDiv = css`
  font-size: 18px;
  padding-right: 16px;
  padding-left: 16px;
  box-shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.1);
`;

const navHeaderRight = css`
  color: white;
  opacity: 0.6;
  padding: 10px;
  text-decoration: none;
`;

const mainHeader = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 220px;
`;

const h1StylesContainer = css`
  min-height: 100vh;
  position: absolute;
`;

const liStyles = css`
  position: relative;
  top: 0;
  animation: slide 5s steps(5) infinite;

  @keyframes slide {
    100% {
      top: -360px;
    }
  }
`;
const staticText = css`
  color: white;
  font-size: 60px;
`;

const dynamicText = css`
  color: white;
  list-style: none;
  text-align: center;
  font-size: 60px;
  height: 60px;
  overflow: hidden;
  position: relative;
  top: 0;
`;

const dynamicTextSpan = css`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.6;
    border-left: 4px solid white;
    animation: typing 1s steps(10) infinite;

    @keyframes typing {
      100% {
        left: 100%;
        margin: 0 -35px 0 35;
      }
    }
  }
`;

const buttonContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const buttonStyles = css`
  position: absolute;
  font-size: 20px;
  padding: 20px;
  border-radius: 15px;
  color: purple;
  font-weight: 500;
`;

function App() {
  return (
    <div css={mainStyles}>
      <div css={heroBackground1}>
        <img src={Background1} alt="" />
      </div>
      <header css={headerStyles}>
        <div css={logoURL}>
          <Logo />
          <div css={url}>buildwithflo.io</div>
        </div>
        <div css={flowHeaderContainer}>
          <div css={flowHeader}>
            <img src={flowSingle} alt="" />
          </div>
        </div>
        <nav css={navHeaderDiv}>
          <a css={navHeaderRight} href="www.google.at">
            Perks
          </a>
          <a css={navHeaderRight} href="www.google.at">
            Work
          </a>
          <a css={navHeaderRight} href="www.google.at">
            Pricing
          </a>
          <a css={navHeaderRight} href="www.google.at">
            FAQs
          </a>
        </nav>
      </header>
      <br />
      <br />
      <main css={mainHeader}>
        <div css={h1StylesContainer}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1 css={staticText}>
            Bringing delightful
            <br /> webflow sites to your
            <br />
          </h1>
          <ul css={dynamicText}>
            <li css={liStyles}>
              <span css={dynamicTextSpan}>startup.</span>
            </li>
            <li css={liStyles}>
              <span css={dynamicTextSpan}>customers.</span>
            </li>
            <li css={liStyles}>
              <span css={dynamicTextSpan}>products.</span>
            </li>
            <li css={liStyles}>
              <span css={dynamicTextSpan}>agency.</span>
            </li>
          </ul>
        </div>
        <div css={buttonContainer}>
          <button css={buttonStyles}>Explore the perks</button>
        </div>
      </main>
    </div>
  );
}

export default App;
