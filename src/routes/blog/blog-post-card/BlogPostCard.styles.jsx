import styled from "styled-components";

export const InsightCard = styled.div`
  text-align: center;
  overflow: hidden;
  width: 31.85%;
  .insight-card-img {
    width: 100%;
    height: 267px;
    & img {
      border-radius: 8px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease-in-out;
      &:hover {
        transform: scale(1.06);
        object-fit: cover;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const InsightCardBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  text-align: left;
  font-family: "Unitext Regular";
  font-weight: 400;
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: ${(props) => (props.isBlogSettings ? "16px" : 0)};
  .insight-card-name {
    line-height: 16.8px;
    color: var(--Primary-Primary);
  }
  & .insight-card-bottom {
    line-height: 16.8px;
    color: var(--Neutrals-Neutrals900);
  }
  & .insight-card-title {
    padding: 10px 0;
    font-family: "Unitext Regular";
    font-size: 18px;
    line-height: 21.6px;
    font-weight: 700;
    text-align: left;
    &:hover {
      cursor: pointer;
      color: rgba(248, 67, 67, 0.801);
    }
  }
`;
