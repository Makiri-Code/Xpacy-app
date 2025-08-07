import { useRef } from "react";
import Card from "../card/card.component";
import styled from "styled-components";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { PulseLoader } from "react-spinners";
const FeaturedContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 120px 7%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 64px;
  @media only screen and (max-width: 600px) {
    padding: 48px 24px;
    gap: 32px;
  }
`;
const Brow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
  text-align: center;
  @media only screen and (max-width: 600px) {
    // padding: 0px 24px;
  }
`;
const Heading = styled.h2`
  color: var(--Primary-Primary);
  font-family: "Florencesans Exp", sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 43.2px;
  margin: 0;
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 1.75rem;
  }
`;
const SubHeading = styled.h5`
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  text-align: center;
  margin: 0px;
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    font-family: "Unitext Regular";
  }
`;
const FeaturedScroll = styled.div`
  align-self: stretch;
  position: relative;
  display: flex;
  align-self: stretch;
`;
const FeaturedContent = styled.div`
  width: 95vw;
  overflow: hidden;
  overflow-x: scroll;
  scrollbar-width: none;
  display: flex;
  flex-wrap: no-wrap;
`;
const HorizontalScrollBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  width: 100%;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
const LeftArrowContainer = styled.div`
  background-color: var(--Base-Base-White);
  border: 1px solid var(--Base-Base-Black);
  border-radius: 50%;
  position: absolute;
  top: 43%;
  left: 0px;
  width: 45px;
  height: 45px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.5s ease-out;
  }
`;
const LeftArrowIcon = styled(GoArrowLeft)`
  width: 20px;
  height: 20px;
`;
const RightArrowContainer = styled.div`
  background-color: var(--Base-Base-White);
  border: 1px solid var(--Base-Base-Black);
  border-radius: 50%;
  position: absolute;
  top: 43%;
  right: -10px;
  width: 45px;
  height: 45px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.5s ease-out;
  }
`;
const RightArrowIcon = styled(GoArrowRight)`
  width: 20px;
  height: 20px;
`;
const FeaturedInnerContainer = styled.div`
  min-width: max-content;
  display: flex;
  gap: 24px;
  padding: 20px 10px;
  flex-wrap: nowrap;
`;

const Featured = ({ featuredProperties, isMobile }) => {
  const featuredCard = useRef(null);
  const handleNext = () => {
    featuredCard.current.scrollBy({ left: 500, behavior: "smooth" });
  };
  const handlePrevious = () => {
    featuredCard.current.scrollBy({ left: -500, behavior: "smooth" });
  };
  const cardStyles = {
    cardWidth: "373px",
    showDivider: true,
    isMobile: isMobile,
  };
  return (
    <>
      {featuredProperties ? (
        <FeaturedContainer>
          <Brow>
            <Heading
              data-aos="slide-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Featured Properties
            </Heading>
            <SubHeading
              data-aos="slide-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Discover Exceptional Spaces Curated Just for You
            </SubHeading>
          </Brow>
          <FeaturedScroll
            data-aos="slide-up"
            data-aos-easing="ease-in"
            data-aos-duration="1000"
          >
            <FeaturedContent ref={featuredCard}>
              {/* Horizontal Scroll Buttons */}
              <HorizontalScrollBtnContainer>
                <LeftArrowContainer name="fclickleft" onClick={handlePrevious}>
                  <LeftArrowIcon name="fclickleft" />
                </LeftArrowContainer>
                <RightArrowContainer name="fclickright" onClick={handleNext}>
                  <RightArrowIcon name="fclickright" />
                </RightArrowContainer>
              </HorizontalScrollBtnContainer>
              <FeaturedInnerContainer>
                {/* Featured Cards */}
                {featuredProperties?.map((properties, property_id) => {
                  return (
                    <Card
                      cardStyles={cardStyles}
                      propertise={properties}
                      key={property_id}
                    />
                  );
                })}
              </FeaturedInnerContainer>
            </FeaturedContent>
          </FeaturedScroll>
        </FeaturedContainer>
      ) : (
        <PulseLoader
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
          }}
          margin={5}
        />
      )}
    </>
  );
};

export default Featured;
