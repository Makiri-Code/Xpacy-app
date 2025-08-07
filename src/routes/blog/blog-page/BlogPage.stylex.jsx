import styled from "styled-components";

export const BlogFeaturedSection = styled.section`
  display: block;
  margin-top: 48px;
  margin-bottom: 120px;
  color: var(--Base-Base-Black, #333);

  & .featured__heading {
    font-size: 1.125rem;
    font-family: "Florencesans Exp";
  }
  & .featured-box {
    margin-top: 16px;
    display: flex;
    gap: 24px;
    justify-content: space-between;
    flex-wrap: ${(props) => (props.isBlogSettings ? "wrap" : "no-wrap")};
    & .featured-box__content {
      width: ${(props) => (props.isBlogSettings ? "45%" : "50%")};

      & .featured-box__image-1 {
        width: 100%;
        margin-bottom: 16px;
        flex: 1;
        img {
          border-radius: 8px;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &-small {
        display: flex;
        gap: 8px;
        justify-content: space-between;
        flex-wrap: wrap;
        & .card-footer-buttons {
          flex-basis: 100%;
        }
        .small-content {
          padding: 16px 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
        }

        .w-371 {
          width: 371px;
        }
      }
      .mb-24 {
        margin-bottom: 24px;
      }
    }

    & .featured__content {
      &-title {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        font-size: 24px;
        color: #333;
        .featured-arrow {
          width: 24px;
          height: 24px;
        }
        .w-60 {
          width: 60%;
        }
      }
      &-heading {
        padding: 10px 0;
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 120%;
        margin-bottom: 0;
      }
      &-title:hover {
        cursor: pointer;
        color: rgba(248, 67, 67, 0.801);
      }
      &-txt {
        color: #477899;
        font-size: 0.875rem;
        margin-bottom: 8px;
        line-height: 120%;
      }
      .grey {
        color: #585858;
        margin-bottom: 0;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    margin-bottom: 40px;
    & .featured-box {
      flex-direction: column;
      & .featured-box__content {
        width: 100%;
        &-small {
          flex-direction: column;
        }
      }
    }
  }
`;
export const InsightCardContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: ${(props) => (props.isBlogSettings ? "24px" : "120px")};
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
    gap: 48px;
  }
`;
export const Heading = styled.p`
  font-family: "Florencesans Exp";
  font-size: 1.125rem;
  line-height: 120%;
  color: #333;
`;
