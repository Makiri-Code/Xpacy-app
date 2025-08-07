import { useRef, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon01 from "../../assets/homepage-assets/services-section-images/icon-1.svg";
import Icon02 from "../../assets/homepage-assets/services-section-images/icon-2.svg";
import Icon03 from "../../assets/homepage-assets/services-section-images/icon-3.svg";
import Icon04 from "../../assets/homepage-assets/services-section-images/icon-4.svg";
import Icon05 from "../../assets/homepage-assets/services-section-images/icon-5.svg";
import Faq from "../../components/faq/faq.component";
import Image1 from "../../assets/homepage-assets/getintouch-section-images/image1.png";
import Image2 from "../../assets/homepage-assets/getintouch-section-images/image2.png";
import Image3 from "../../assets/homepage-assets/getintouch-section-images/image3.png";
import lmpimg from "../../assets/homepage-assets/listproperty-section-images/listproperty-image.png";
import mobileimg from "../../assets/homepage-assets/download-section-images/mobile-img.png";
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
import {
  Brow,
  Heading,
  SubHeading,
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
import "aos/dist/aos.css";
import Hero from "../../components/Hero/hero.component.jsx";
import Filter from "../../components/search-filter/filter.component.jsx";
import ContactsCard from "./../../components/contacts-card/ContactsCard";
import Featured from "../../components/featured/Featured.jsx";
const Home = ({ isMobile, formFields, onSetFormFields }) => {
  AOS.init();
  const { faqs, featuredProperties } = useContext(PageContext);
  const navigate = useNavigate();
  // const featuredCard = useRef(null);

  // const handleFeatureClick = (e) => {
  //   const name = e.target.getAttribute("name");
  //   if (name && featuredCard.current) {
  //     if (name === "fclickright") {
  //       featuredCard.current.scrollBy({ left: 500, behavior: "smooth" });
  //     } else {
  //       featuredCard.current.scrollBy({ left: -500, behavior: "smooth" });
  //     }
  //   }
  // };
  const backgroundImg = [
    "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1668911493514-2aeed8439227?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://cdn.pixabay.com/photo/2024/03/22/21/32/ai-generated-8650513_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/06/09/15/29/bedroom-8052036_1280.png",
  ];
  const icons = [Icon01, Icon02, Icon03, Icon04, Icon05];
  const hoverDetails = [
    {
      title: "Property Sale",
      body: "Find your ideal home or investment property with ease. Our curated listings and expert guidance make the buying process smooth and secure.",
    },
    {
      title: "Property Rental",
      body: "Discover rental properties that fit your lifestyle and budget. From short stays to long leases, we make finding your next home effortless.",
    },
    {
      title: "Property Listing",
      body: "Showcase your property to the right audience. Our end-to-end list services handles everything from marketing to management, making it easy to sell or rent your property.",
    },
    {
      title: "Facility Management",
      body: "Keep your property in top shape with our reliable facility management services. From maintenance to security, we handle the details so you can enjoy peace of mind",
    },
    {
      title: "Space-Planning & Design",
      body: "Transform your space with our expert planning and design services. We create functional, beautiful enviroments tailored to your unique vision",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero isMobile={isMobile} />
      <Filter
        isMobile={isMobile}
        formFields={formFields}
        onSetFormFields={onSetFormFields}
      />
      {/* Contacts Card */}
      <ContactsCard />
      {/* Featured Section */}
      <Featured featuredProperties={featuredProperties} isMobile={isMobile} />
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
              imageSrc={backgroundImg}
              iconSrc={icons}
              hoverDetails={hoverDetails}
            />
          </ServicesImgContainer>
        </ServicesContent>
      </ServicesContainer>
      {/* Testimonial Section */}
      <Reviews scrollWidth={"100%"} />
      {/* Frequently asked questions session */}
      {/* FAQs */}
      <Faqs>
        <Brow
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-anchor-placement="top-bottom"
        >
          <Heading>Frequently asked questions</Heading>
          <SubHeading>Everything you need to know about the Xpacy.</SubHeading>
        </Brow>
        <FaqScroll>
          {faqs?.map(({ question, answer }, index) => (
            <Faq
              showDivider={index ? true : false}
              heading={question}
              answer={answer}
              key={index}
            />
          ))}
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
          <div className="lmp-content-title">Want to list your property ?</div>
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
            Our mobile app for seamless property mangement at a go is coming
            soon.
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
              Expert Advice, Tips and Trends to Make the Most of Your Property
              Journey
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
                <div className="insight-card-name">Property Investement</div>
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
  );
};

export default Home;
