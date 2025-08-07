import { useContext } from "react";
import { CarouselItem } from "react-bootstrap";
import { 
    CarouselContainer, 
    CarouselImage,
    BannerCarouselCaption,
    BannerHeading,
    BannerSubHeading, 
    HeadingsContainer,
} from "./hero.styles";
import { PulseLoader } from "react-spinners";
import { UserContext } from "../../contexts/userContext";

const Hero = ({isMobile}) => {
      const {homePageBanners} = useContext(UserContext);
    return (
        <>
            {
                homePageBanners ? 
                (
                    <>
                        <CarouselContainer controls={false}  indicators={false} slide={true}>    
                            {
                                homePageBanners?.map((banner, index) => {
                                    const {image_url, title} = banner
                                    return (
                                    <CarouselItem key={index}>
                                        <CarouselImage
                                        src={`https://app.xpacy.com/src/upload/homepage_slider/${image_url}`}
                                        alt="Hero-image"
                                        />
                                        <BannerCarouselCaption>
                                            <BannerHeading className="carousel-caption-txt">
                                                {title}
                                            </BannerHeading>
                                        </BannerCarouselCaption>
                                    </CarouselItem>
                                    )
                                })
                            }
                            
                        </CarouselContainer>
                         {  isMobile && 
                        (<HeadingsContainer>
                            <BannerSubHeading>
                                Search, buy, or rent properties across Nigeria
                            </BannerSubHeading>
                        </HeadingsContainer>)
                    }
                    </>
                 ) :
                (<PulseLoader
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "stretch",
                        height: "100vh",
                    }}
                    margin={5}
                />)
            }
        </>

    )
};

export default Hero; 