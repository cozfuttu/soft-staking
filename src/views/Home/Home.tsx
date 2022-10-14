import React from "react";
import { useUserNfts } from "state/hooks";
import NFTCard from "./components/NFTCard";
import styled, { keyframes } from "styled-components";
import { useWeb3React } from "@web3-react/core";
import MyNfts from "components/MyNfts";
import StakedNfts from "components/StakedNfts";

const Page = styled.main`
  position: relative;
  display: flex;
  overflow: hidden;
  min-width: 100vw;
  min-height: 100vh;

  & > img {
    position: absolute;
  }
`;

const cloudAnim = keyframes`
  0% {
    right: 0px;
  }

  50% {
    right: 10vw;
  }

  100% {
    right: 0px;
  }
`;

const BackgroundImage = styled.img`
  transform: scaleX(1.5);
  width: 110vw;
  height: 100vh;
  animation: ${cloudAnim} 20s linear infinite;
  object-fit: cover;
  z-index: -3;

  @media (max-width: 1200px) {
    animation: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  margin: 0 auto;
  gap: 16px;
  z-index: 1;
`;

const Menu = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  & > img {
    max-width: 80%;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: stretch;
  align-items: center;

  & a {
    text-decoration: none;
  }

  & button {
    background: url("images/backgrounds/ExternalBtn.webp") no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 126px;
    height: 63px;
    // padding: 0 8px;
    border: none;
    color: white;
    font-weight: bold;
    font-family: "Kingthings Organica", sans-serif;
    font-size: 2rem;
    cursor: pointer;

    & > span {
      font-family: inherit;
      padding: 0 12px;
    }
  }
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  & a {
    text-decoration: none;
  }

  & button {
    background: url("images/backgrounds/SocialBtn.webp") no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 12px 12px 10px;
    border: none;
    cursor: pointer;
  }
`;

const Home = () => {
  const { account } = useWeb3React();
  const userNftsData = useUserNfts();

  return (
    <Page>
      <BackgroundImage
        src="images/backgrounds/SkyBg.webp"
        alt="Cloud Background"
      />
      <img
        src="images/backgrounds/FenceBg.webp"
        alt="Fence Background"
        style={{ bottom: "0", width: "100vw" }}
      />
      <img
        src="images/other/GoblinGem.webp"
        alt="Goblin Gem"
        style={{ bottom: "0", left: "12%", width: "21vw" }}
      />
      <Wrapper>
        <Menu>
          <img src="images/logos/BMLogo.webp" alt="Battlemancers Logo" />
          <Nav>
            <a
              href="https://www.battlemancers.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <button>
                <span>Home</span>
              </button>
            </a>
            <a
              href="https://opensea.io/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <button>Opensea</button>
            </a>
          </Nav>
          <SocialMedia>
            <a
              href="https://twitter.com/BattleMancers"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button>
                <span>
                  <img src="images/icons/twitter.svg" alt="Discord" />
                </span>
              </button>
            </a>
            <a
              href="https://discord.gg/battlemancers"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button>
                <span>
                  <img src="images/icons/dc.svg" alt="Twitter" />
                </span>
              </button>
            </a>
          </SocialMedia>
        </Menu>
        <MyNfts nfts={nftsState} setNftsState={setNftsState} />
        <StakedNfts nfts={nftsState} />
      </Wrapper>
      <img
        src="images/animations/BannerBlue.webp"
        alt="Blue Banner"
        style={{ bottom: "12%", left: "9%", width: "8vw", zIndex: "-1" }}
      />
      <img
        src="images/animations/BannerRed.webp"
        alt="Red Banner"
        style={{ bottom: "17%", right: "20%", width: "4vw", zIndex: "-1" }}
      />
    </Page>
  );
};

export default Home;
