import { useEffect, useRef, useState, useContext } from "react";
import { Carousel, CarouselItem, Form } from "react-bootstrap";
import Button from "../../components/button/button";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Services01 from "../../assets/homepage-assets/services-section-images/service-1.png";
import Services02 from "../../assets/homepage-assets/services-section-images/service-2.png";
import Services03 from "../../assets/homepage-assets/services-section-images/service-3.png";
import Services04 from "../../assets/homepage-assets/services-section-images/service-4.png";
import Services05 from "../../assets/homepage-assets/services-section-images/service-5.png";
import Icon01 from "../../assets/homepage-assets/services-section-images/icon-1.svg";
import Icon02 from "../../assets/homepage-assets/services-section-images/icon-2.svg";
import Icon03 from "../../assets/homepage-assets/services-section-images/icon-3.svg";
import Icon04 from "../../assets/homepage-assets/services-section-images/icon-4.svg";
import Icon05 from "../../assets/homepage-assets/services-section-images/icon-5.svg";
import Faq from "../../components/faq/faq.component";
import Card from "../../components/card/card.component";
import ClientRating from "../../components/clientRating/clientRating";
import Image1 from "../../assets/homepage-assets/getintouch-section-images/image1.png";
import Image2 from "../../assets/homepage-assets/getintouch-section-images/image2.png";
import Image3 from "../../assets/homepage-assets/getintouch-section-images/image3.png";
import lmpimg from "../../assets/homepage-assets/listproperty-section-images/listproperty-image.png";
import mobileimg from "../../assets/homepage-assets/download-section-images/mobile-img.png";
import { FaApple } from "react-icons/fa";
import FaPlayStore from "../../assets/homepage-assets/download-section-images/play-store.png";
import insightimg1 from "../../assets/homepage-assets/insights-section-images/insight-image1.png";
import insightimg2 from "../../assets/homepage-assets/insights-section-images/insight-image2.png";
import insightimg3 from "../../assets/homepage-assets/insights-section-images/insight-image3.png";
import { ReactComponent as GooglePlay } from "../../assets/homepage-assets/play-store.svg";
import { ReactComponent as GooglePlayText } from "../../assets/homepage-assets/google-play.svg";
import { ReactComponent as ApplePlay } from "../../assets/homepage-assets/apple-store.svg";
import { PageContext } from "../../contexts/page.context";
import Reviews from "../../components/reviews/reviews";
import ServicesCard from "../../components/services-card/services-card";
import GetInTouch from "../../components/get-in-touch/getInTouch";
import { PulseLoader } from "react-spinners";
import {
  BannerContainer,
  Brow,
  BannerContent,
  BannerHeading,
  BannerSubHeading,
  CarouselContainer,
  CarouselImage,
  FilterHeading,
  FormContainer,
  SearchContainer,
  Select,
  SelectOptionContainer,
  HeadingsContainer,
  SearchButton,
  SearchIcon,
  MobileSearchContainer,
  MobileSearchForm,
  MobileOptionContainer,
  Featured,
  Heading,
  SubHeading,
  FeaturedScroll,
  FeaturedContainer,
  LeftArrowIcon,
  RightArrowContainer,
  FeaturedInnerContainer,
  LeftArrowContainer,
  HorizontalScrollBtnContainer,
  RightArrowIcon,
  ServicesContainer,
  ServicesContent,
  ServicesImgContainer,
  Faqs,
  FaqScroll,
  ListProperty,
  ListPropertyCardImg,
  ListPropertyContent,
  DownloadApp,
  DownloadIconContainer,
  StoreBtn,
  DownloadImg,
  Insight,
  InsightCardContainer,
  InsightCard,
  InsightCardBottom,
} from "./home.styles.jsx";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Home = ({ isMobile }) => {
  AOS.init();
  const { propertiesArray } = useContext(PageContext);
  const navigate = useNavigate();
  const featured = propertiesArray.filter((item) => item.featured);
  const featuredCard = useRef(null);
  const cardStyles = {
    cardWidth: "373px",
    showDivider: true,
    isMobile: isMobile,
  };
  const handleFeatureClick = (e) => {
    const name = e.target.getAttribute("name");
    if (name && featuredCard.current) {
      console.log(featuredCard);
      if (name === "fclickright") {
        featuredCard.current.scrollBy(397, 0);
      } else {
        featuredCard.current.scrollBy(-397, 0);
      }
    }
  };
  return (
    <>
      {propertiesArray ? (
        <>
          {/* Hero Section */}
          <CarouselContainer controls={false} wrap={true} indicators={false}>
            <CarouselItem>
              <CarouselImage
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hero-image"
              />
            </CarouselItem>
            <CarouselItem>
              <CarouselImage
                src="https://images.unsplash.com/photo-1633119713175-c53c29479984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hero"
              />
            </CarouselItem>
            <CarouselItem>
              <CarouselImage
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hero"
              />
            </CarouselItem>
            <CarouselItem>
              <CarouselImage
                src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hero"
              />
            </CarouselItem>
          </CarouselContainer>
          <BannerContainer>
            <BannerContent>
              <FilterHeading>
                <HeadingsContainer
                  data-aos="fade-down"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <BannerHeading>
                    Experience Ease, <br /> Find Your Dream Property
                  </BannerHeading>
                  <BannerSubHeading>
                    Search, buy, or rent properties across Nigeria
                  </BannerSubHeading>
                </HeadingsContainer>
                <SearchContainer
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  <FormContainer>
                    <SelectOptionContainer>
                      <Select>
                        <option>Purpose</option>
                        <option value={"buy"}>Buy</option>
                        <option value={"rent"}>Rent</option>
                      </Select>
                      <Select>
                        <option>Location</option>
                        <option value={"Abuja"}>Abuja</option>
                        <option value={"Aba"}>Aba</option>
                        <option value={"Benin"}>Benin</option>
                        <option value={"Calabar"}>Calabar</option>
                        <option value={"Enugu"}>Enugu</option>
                        <option value={"Ibadan"}>Ibadan</option>
                        <option value={"Ilorin"}>Ilorin</option>
                        <option value={"Lagos"}>Lagos</option>
                        <option value={"Minna"}>Minna</option>
                        <option value={"Port Harcourt"}>Port Harcourt</option>
                        <option value={"Uyo"}>Uyo</option>
                        <option value={"Warri"}>Warri</option>
                      </Select>
                      <Select>
                        <option>Type</option>
                        <option value={"All types"}>All types</option>
                        <option value={"Commercial"}>Commercial</option>
                        <option value={"Residential"}>Residential</option>
                        <option value={"Terrace"}>Terrace</option>
                        <option value={"Flat/Apartment"}>Flat/Apartment</option>
                        <option value={"Duplex"}>Duplex</option>
                        <option value={"Semi-detached"}>Semi-detached</option>
                        <option value={"Fully-detached"}>Fully-detached</option>
                        <option value={"Villa"}>Villa</option>
                      </Select>
                      <Select>
                        <option>Bedroom</option>
                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                        <option value={"4"}>4</option>
                        <option value={"5"}>5</option>
                        <option value={"6"}>6</option>
                      </Select>
                      <Select>
                        <option>Min Price</option>
                        <option value={""}>{"<N5m"}</option>
                        <option value={""}>{"<N5m"}</option>
                        <option value={""}>{"<N10m"}</option>
                        <option value={""}>{"<100m"}</option>
                        <option value={""}>{"<N200m"}</option>
                        <option value={""}>{">N200m"}</option>
                      </Select>
                      <Select>
                        <option>Max Price</option>
                        <option value={""}>{"<N5m"}</option>
                        <option value={""}>{"<N5m"}</option>
                        <option value={""}>{"<N10m"}</option>
                        <option value={""}>{"<100m"}</option>
                        <option value={""}>{"<N200m"}</option>
                        <option value={""}>{">N200m"}</option>
                      </Select>
                    </SelectOptionContainer>
                    <SearchButton buttonType={{ primaryBtn: true }}>
                      {" "}
                      <SearchIcon /> Search
                    </SearchButton>
                  </FormContainer>
                </SearchContainer>
              </FilterHeading>
            </BannerContent>
          </BannerContainer>
          {/* Mobile search container */}
          <MobileSearchContainer
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <MobileSearchForm>
              <MobileOptionContainer>
                <Select>
                  <option>Purpose</option>
                  <option value={"buy"}>Buy</option>
                  <option value={"rent"}>Rent</option>
                </Select>
                <Select>
                  <option>Location</option>
                  <option value={"buy"}>Buy</option>
                  <option value={"rent"}>Rent</option>
                </Select>
                <Select>
                  <option>Type</option>
                  <option value={"buy"}>Buy</option>
                  <option value={"rent"}>Rent</option>
                </Select>
                <Select>
                  <option>Bedroom</option>
                  <option value={"buy"}>Buy</option>
                  <option value={"rent"}>Rent</option>
                </Select>
                <Select>
                  <option>Min Price</option>
                  <option value={"buy"}>Buy</option>
                  <option value={"rent"}>Rent</option>
                </Select>
                <Select>
                  <option>Max Price</option>
                  <option value={"buy"}>Buy</option>
                  <option value={"rent"}>Rent</option>
                </Select>
              </MobileOptionContainer>
              <SearchButton buttonType={{ primaryBtn: true }}>
                {" "}
                <SearchIcon /> Search
              </SearchButton>
            </MobileSearchForm>
          </MobileSearchContainer>
          {/* Featured Section */}
          <Featured>
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
              <FeaturedContainer ref={featuredCard}>
                {/* Horizontal Scroll Buttons */}
                <HorizontalScrollBtnContainer onClick={handleFeatureClick}>
                  <LeftArrowContainer name="fclickleft">
                    <LeftArrowIcon name="fclickleft" />
                  </LeftArrowContainer>
                  <RightArrowContainer name="fclickright">
                    <RightArrowIcon name="fclickright" />
                  </RightArrowContainer>
                </HorizontalScrollBtnContainer>
                <FeaturedInnerContainer>
                  {/* Featured Cards */}
                  {featured.map((properties, id) => {
                    return (
                      <Card cardStyles={cardStyles} propertise={properties} />
                    );
                  })}
                </FeaturedInnerContainer>
              </FeaturedContainer>
            </FeaturedScroll>
          </Featured>
          {/* Services section */}
          <ServicesContainer
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
          >
            <ServicesContent>
              <Brow>
                <Heading>Our Services</Heading>
                <SubHeading>
                  Tailored Property Services to Meet Your Unique Needs
                </SubHeading>
              </Brow>
              <ServicesImgContainer>
                <ServicesCard
                  imageSrc={Services01}
                  iconSrc={Icon01}
                  cardName={"property-sale"}
                  hoverTitle={"Property Sale"}
                  hoverText={
                    "Find your ideal home or investment property with ease. Our curated listings and expert guidance make the buying process smooth and secure."
                  }
                />
                <ServicesCard
                  imageSrc={Services02}
                  iconSrc={Icon02}
                  cardName={"property-rental"}
                  hoverTitle={"Property Rental"}
                  hoverText={
                    "Discover rental properties that fit your lifestyle and budget. From short stays to long leases, we make finding your next home effortless."
                  }
                />
                <ServicesCard
                  imageSrc={Services03}
                  iconSrc={Icon03}
                  cardName={"property-listing"}
                  hoverTitle={"Property Listing"}
                  hoverText={
                    "Showcase your property to the right audience. Our end-to-end list services handles everything from marketing to management, making it easy to sell or rent your property."
                  }
                />
                <ServicesCard
                  imageSrc={Services04}
                  iconSrc={Icon04}
                  cardName={"facility-management"}
                  hoverTitle={"Facility Management"}
                  hoverText={
                    "Keep your property in top shape with our reliable facility management services. From mainteance to security, we handle the details so you can enjoy peace of mind"
                  }
                />
                <ServicesCard
                  imageSrc={Services05}
                  iconSrc={Icon05}
                  cardName={"space-planing"}
                  hoverTitle={"Space Planning & Design"}
                  hoverText={
                    "Transform yoour space with our expert planing and design services. We create functional, beautiful envirometns tailore to your unique vision"
                  }
                />
              </ServicesImgContainer>
            </ServicesContent>
          </ServicesContainer>
          {/* Testimonial Section */}
          <Reviews scrollWidth={"100%"} />
          {/* Frequently asked questions session */}
          {/* FAQ Container */}
          {/* FAQs */}
          <Faqs>
            <Brow
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              data-aos-anchor-placement="top-bottom"
            >
              <Heading>Frequently asked questions</Heading>
              <SubHeading>
                Everything you need to know about the Xpacy.
              </SubHeading>
            </Brow>
            <FaqScroll>
              <Faq
                showDivider={false}
                heading={"How do I list my property?"}
                answer={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam incidunt accusamus. Pariatur, ad id mollitia iure sit deserunt expedita nemo, repellat iusto consequatur ut, explicabo autem nisi debitis doloribus."
                }
              />
              <Faq
                showDivider={true}
                heading={"How do I book facility management services?"}
                answer={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam incidunt accusamus. Pariatur, ad id mollitia iure sit deserunt expedita nemo, repellat iusto consequatur ut, explicabo autem nisi debitis doloribus."
                }
              />
              <Faq
                showDivider={true}
                heading={"How do I book facility management services?"}
                answer={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam incidunt accusamus. Pariatur, ad id mollitia iure sit deserunt expedita nemo, repellat iusto consequatur ut, explicabo autem nisi debitis doloribus."
                }
              />
              <Faq
                showDivider={true}
                heading={"How do I book facility management services?"}
                answer={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam incidunt accusamus. Pariatur, ad id mollitia iure sit deserunt expedita nemo, repellat iusto consequatur ut, explicabo autem nisi debitis doloribus."
                }
              />
              <Faq
                showDivider={true}
                heading={"How do I book facility management services?"}
                answer={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam incidunt accusamus. Pariatur, ad id mollitia iure sit deserunt expedita nemo, repellat iusto consequatur ut, explicabo autem nisi debitis doloribus."
                }
              />
              <Faq
                showDivider={true}
                heading={"How do I book facility management services?"}
                answer={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam incidunt accusamus. Pariatur, ad id mollitia iure sit deserunt expedita nemo, repellat iusto consequatur ut, explicabo autem nisi debitis doloribus."
                }
              />
            </FaqScroll>
            <GetInTouch
              Image1={Image1}
              Image2={Image2}
              Image3={Image3}
              heading={"Still have questions?"}
              message={
                "Can't find answers you're looking for? Please chat to our friendly team"
              }
              buttonText={"Get In Touch"}
              handleClick={() => navigate("/contact")}
            />
          </Faqs>
          <ListProperty>
            <ListPropertyCardImg
              alt="Card image"
              src={lmpimg}
              data-aos="flip-left"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
            />
            <ListPropertyContent
              data-aos="flip-right"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="lmp-content-title">
                Want to list your property ?
              </div>
              <div className="lmp-content-subtext">
                At Xpacy, we manage your property listings from start to finish,
                ensuring you enjoy peace of mind while maximizing your returns.
              </div>
              <div className="lmp-button" onClick={() => navigate("/contact")}>
                List My Property
              </div>
            </ListPropertyContent>
          </ListProperty>
          <DownloadApp>
            <div
              className="download-content"
              data-aos="fade-right"
              data-aos-easing="ease-in"
              data-aos-duration="1500"
              data-aos-anchor-placement="center-center"
            >
              <h3 className="download-content-title">
                Take Xpacy with you Anywhere!
              </h3>
              <p className="download-content-subtext">
                Downlaod our mobile app and enjoy seamless property mangement at
                a go.
              </p>
              <DownloadIconContainer>
                <StoreBtn>
                  <GooglePlay />
                  <div className="d-flex flex-column align-items-start">
                    <span>GET IT ON</span>
                    <GooglePlayText />
                  </div>
                </StoreBtn>
                <StoreBtn>
                  <ApplePlay />
                  <div className="d-flex flex-column align-items-start">
                    <span>Download on the</span>
                    <p>App Store</p>
                  </div>
                </StoreBtn>
              </DownloadIconContainer>
            </div>
            <DownloadImg
              alt="download-img"
              src={mobileimg}
              data-aos="fade-up"
              data-aos-easing="ease-in"
              data-aos-duration="1500"
              data-aos-anchor-placement="top-bottom"
            />
          </DownloadApp>
          {/* Blog section */}
          <Insight>
            <div className="insight-cover">
              <div
                className="insight-content"
                data-aos="fade-down"
                data-aos-easing="ease-in"
                data-aos-duration="1500"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="insight-content-title">Xpacy Insights</div>
                <div className="insight-content-subtext">
                  Expert Advice, Tips and Trends to Make the Most of Your
                  Property Journey
                </div>
              </div>
              <InsightCardContainer>
                <InsightCard>
                  <img
                    className="insight-card-img"
                    alt="insight1"
                    src={insightimg1}
                  />
                  <div className="insight-card-title">
                    Top Tips for First-Time Property Owners: Maximize Your
                    Investment with Ease
                  </div>
                  <InsightCardBottom>
                    <div className="insight-card-name">
                      Property Investement
                    </div>
                    <div className="insight-card-bottom">
                      1st Oct, 2024 . 11 min read
                    </div>
                  </InsightCardBottom>
                </InsightCard>
                <InsightCard>
                  <img
                    className="insight-card-img"
                    alt="insight2"
                    src={insightimg2}
                  />
                  <div className="insight-card-title">
                    Top Tips for First-Time Property Owners: Maximize Your
                    Investment with Ease
                  </div>
                  <InsightCardBottom>
                    <div className="insight-card-name">Property Sale</div>
                    <div className="insight-card-bottom">
                      14th Oct, 2024 . 8 min read
                    </div>
                  </InsightCardBottom>
                </InsightCard>
                <InsightCard>
                  <img
                    className="insight-card-img"
                    alt="insight3"
                    src={insightimg3}
                  />
                  <div className="insight-card-title">
                    Top Tips for First-Time Property Owners: Maximize Your
                    Investment with Ease
                  </div>
                  <InsightCardBottom>
                    <div className="insight-card-name">Facility Management</div>
                    <div className="insight-card-bottom">
                      30 Oct, 2024 . 10 min read
                    </div>
                  </InsightCardBottom>
                </InsightCard>
              </InsightCardContainer>
            </div>
          </Insight>
        </>
      ) : (
        <PulseLoader
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            height: "100vh",
          }}
          margin={5}
        />
      )}
    </>
  );
};

export default Home;
