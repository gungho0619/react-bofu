import React, { useEffect } from "react";
import styled from "styled-components";
import { Col, useModal } from "@nextui-org/react";
import HeaderImage from "../../components/assets/image/headerimage.png";
import { Column, DefaultImage, Row } from "../../components/element";
import Faq from "../../components/Faq";
import Team from "../../components/team";
import Logo from "../../components/assets/image/logo.jpg";
import Mobile from "../../components/assets/image/mobile.png";
import General from "../../components/Faq/general";
import Utility from "../../components/Faq/utility";
import { ModalContent } from "../../components/modals";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import AboutLogo from "../../components/assets/image/logo.png";

const Home = () => {
  const { setVisible, bindings } = useModal();
  useEffect(() => {
    if (localStorage.getItem("item1") !== "agree") {
      setVisible(true);
    }
  }, []);
  return (
    <Wrapper>
      {/* <ModalContent
        setVisible={setVisible}
        bindings={bindings}
        title="Privacy Policy"
        textdata="We use cookies and similar technologies to provide certain functionalities and to improve user experiences.  By clicking on “Agree and continue”, you are providing your consent to the use of such data technologies.  You can choose to revoke your consent with effect for the future.  You can find further information in our Privacy Policy and Terms and Conditions."
        item="item1"
      /> */}
      <WrapperContent>
        <AboutContainer>
          <TitleText style={{ textAlign: "center" }}>
            THE BOOK OF FUNNY COIN
          </TitleText>
          <AboutIcon src={AboutLogo.src} />
        </AboutContainer>
        <ContentContainer>
          <TitleText>$BOFU</TitleText>
          <Column>
            <ContentEmpText>Buy now Before Launch! **</ContentEmpText>
            <ContentEmpText>1 SOL = 10,000$COMIC</ContentEmpText>
          </Column>
          <WalletMultiButton />
          <Column>
            <ContentEmpText>Can also send SOL to</ContentEmpText>
            <ContentEmpText>
              <WalletAddress>
                JUdkx9cRzAXyNSqUbnp7Hs3ZH6m9LyNy21wXnkodjwV
              </WalletAddress>
              <WalletAbbAddress>JUdkx9cR...nkodjwV</WalletAbbAddress>
            </ContentEmpText>
            <ContentEmpText>from a decentralizsed wallet</ContentEmpText>
            <ContentEmpText>** Then Wait for Moon Airdrop</ContentEmpText>
          </Column>
        </ContentContainer>
        {/* Story Container */}
        <StoryContainer>
          <TitleText>The Story</TitleText>
          <ContentEmpText>
            Once upon a time in the bustling town of Funnycoinville, there was a
            peculiar new currency called $BOFU This funny coin had a unique
            ability to make people burst into laughter whenever they used it for
            transactiosns. The community of Funny Coinvile quickly embraced
            $BOFU coin, finding joy in the sily sound it made whenever it was
            exchanged.
          </ContentEmpText>
          <ContentEmpText>
            Once upon a time in the bustling town of Funnycoinville, there was a
            peculiar new currency called $BOFU This funny coin had a unique
            ability to make people burst into laughter whenever they used it for
            transactiosns. The community of Funny Coinvile quickly embraced
            $BOFU coin, finding joy in the sily sound it made whenever it was
            exchanged.
          </ContentEmpText>
          <ContentEmpText>
            Once upon a time in the bustling town of Funnycoinville, there was a
            peculiar new currency called $BOFU This funny coin had a unique
            ability to make people burst into laughter whenever they used it for
            transactiosns. The community of Funny Coinvile quickly embraced
            $BOFU coin, finding joy in the sily sound it made whenever it was
            exchanged.
          </ContentEmpText>
          <ContentEmpText>
            Once upon a time in the bustling town of Funnycoinville, there was a
            peculiar new currency called $BOFU This funny coin had a unique
            ability to make people burst into laughter whenever they used it for
            transactiosns. The community of Funny Coinvile quickly embraced
            $BOFU coin, finding joy in the sily sound it made whenever it was
            exchanged.
          </ContentEmpText>
        </StoryContainer>
        <ComiconomicsContainer>
          <TitleText>Comiconomics</TitleText>
        </ComiconomicsContainer>
        <ContentContainer>
          <ContentItem>
            <Column>
              <ContentEmpText>Total Supply</ContentEmpText>
              <ContentEmpText>1,000,000,000</ContentEmpText>
            </Column>
          </ContentItem>
          <ContentItem>
            <Column>
              <ContentEmpText>Total Supply</ContentEmpText>
              <ContentEmpText>1,000,000,000</ContentEmpText>
            </Column>
          </ContentItem>
          <ContentItem>
            <Column>
              <ContentEmpText>Total Supply</ContentEmpText>
              <ContentEmpText>1,000,000,000</ContentEmpText>
            </Column>
          </ContentItem>
          <ContentItem>
            <Column>
              <ContentEmpText>Total Supply</ContentEmpText>
              <ContentEmpText>1,000,000,000</ContentEmpText>
            </Column>
          </ContentItem>
        </ContentContainer>
        <UtilityContainer>
          <TitleText>UTILITY</TitleText>
        </UtilityContainer>
        <ContentContainer>
          <ContentEmpText>NFT VIRTUAL CARD GAME</ContentEmpText>
          <ContentEmpText>
            EXCLUSIVE CRYPTO COMEDY SHOWS PAID BY $BOFU
          </ContentEmpText>
          <ContentEmpText>PROFIT SHARING OPPORTUNITIES</ContentEmpText>
          <ContentEmpText>
            A MOBILE BASED GAME WITH LAUGHING HAPPY AS CHARACTER
          </ContentEmpText>
        </ContentContainer>
        <p style={{ height: "40px" }}></p>
      </WrapperContent>
    </Wrapper>
  );
};

const Wrapper = styled(Column)`
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  gap: 50px;
  background-color: #fff308;
  color: #5b463f;
`;

const AboutIcon = styled.img`
  width: 640px;
`;

const BackImage = styled.div<{ src1: string; src2: string }>`
  background-color: #fff308;
  width: 100%;
  text-align: center;

  img {
    content: url(${(p) => p.src1});
    @media screen and (max-width: 700px) {
      content: url(${(p) => p.src2});
    }
    max-width: 100%;
    height: auto;
  }
`;

const BackImage2 = styled.div`
  width: 200px;
`;

const WrapperContent = styled.div`
  width: 100%;
  padding: 0px 40px;
  overflow: hidden;
  @media screen and (max-width: 640px) {
    padding: 0px 10px;
  }
`;

const AboutContainer = styled(Column)`
  padding-top: 20px;
  gap: "20px";
`;

const TitleText = styled.h1`
  font-size: 48px;
  color: black;
  font-weight: 500;
  @media screen and (max-width: 640px) {
    font-size: 24px;
    font-weight: 700;
  }
`;

const ContentEmpText = styled.h2`
  font-size: 24px;
  font-weight: 800;
  color: black;
  @media screen and (max-width: 840px) {
    font-size: 16px;
  }
  @media screen and (max-width: 640px) {
    font-size: 12px;
  }
`;
const ContentContainer = styled(Column)`
  width: 100%;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  gap: 20px;
`;

const ContentItem = styled.div`
  border: 1px solid black;
  padding: 16px 12px;
  border-radius: 12px;
  background-color: #fff308;
`;
const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px 20px;
`;

const ComiconomicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0px 20px 20px 20px;
`;

const Content = styled(Column)`
  max-width: 1300px;
  margin: auto 20px;
  padding-bottom: 50px;
  gap: 30px;
`;
const WrapperHeader = styled.h1`
  border: 7px solid #5b463f;
  padding: 20px;
  font-size: 3em;
  margin: 0;
  line-height: 0.6em;
  color: #5b463f;
  text-transform: uppercase;
  @media screen and (max-width: 500px) {
    font-size: 2.6em;
  }
`;
// eslint-disable-next-line no-redeclare
const Text = styled.div`
  text-align: center;
  font-size: 22px;
  line-height: 1.3em;
  letter-spacing: 1.5px;
  width: 70%;
  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
`;

const UtilityContainer = styled.div`
  padding: 20px;
`;

const WalletAddress = styled.div`
  display: block;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;
const WalletAbbAddress = styled.div`
  display: none;
  @media screen and (max-width: 640px) {
    display: block;
  }
`;

export default Home;
