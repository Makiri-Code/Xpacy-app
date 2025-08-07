import styled from "styled-components";
import { Carousel, CarouselCaption } from "react-bootstrap";

export const CarouselContainer = styled(Carousel)`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  @media only screen and (max-width: 600px) {
    height: auto;
  }
`;
export const CarouselImage = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  filter: brightness(60%);
  @media only screen and (max-width: 600px) {
    height: 431px;
  }
`;
export const BannerCarouselCaption = styled(CarouselCaption)`
  top: 20%;
  // right: unset;
  font-family: "Florencesans Exp", sans-serif;
  bottom: unset;
  padding-top: unset;
  padding-bottom: unset;
  @media only screen and (max-width: 600px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
`;
export const BannerHeading = styled.h1`
  color: #fff;
  font-family: inherit;
  text-align: center;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 3.6rem */
  box-decoration-break: clone;
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;
export const BannerSubHeading = styled.h3`
  color: var(--Base-Base-White, #fff);
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 1.65rem */
`;

export const HeadingsContainer = styled.div`
  gap: 24px;
  padding: 48px 15px;
  position: absolute;
  bottom: 7%;
  @media only screen and (max-width: 600px) {
    bottom: 40%;
    width: 100%;
  }
`;
