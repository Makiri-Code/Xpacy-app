import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import managementHero from '../../assets/management-hero-img.png'
import Button from '../button/button';
import card01 from '../../assets/facility-management/card-img01.png';
import card02 from '../../assets/facility-management/card-img02.png';
import card03 from '../../assets/facility-management/card-img03.png';
import card04 from '../../assets/facility-management/card-img04.png';
import card05 from '../../assets/facility-management/card-img05.png';
import card06 from '../../assets/facility-management/card-img06.png';
import card07 from '../../assets/facility-management/card-img07.png';
import card08 from '../../assets/facility-management/card-img08.png';
import card09 from '../../assets/facility-management/card-img09.png';
import Image1 from '../../assets/facility-management/Image1.png';
import Image2 from '../../assets/facility-management/Image2.png';
import Image3 from '../../assets/facility-management/Image3.png';
import Reviews from '../reviews/reviews';
import GetInTouch from '../get-in-touch/getInTouch';
import './admin.styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const AdminMangement = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        };
       
    }, []);
    AOS.init();
    const navigate = useNavigate();
    const facilityService = [
        {
            cardImage: card01,
            heading: 'Plumbing Services',
            message: "Our expert plumbers are available for all your plumbing needs, from repairs to installations. Whether it's a leaky faucet, a broken pipe, or a full bathroom remodel, we’ve got you covered.",
        },
        {
            cardImage: card02,
            heading: 'Cleaning Services',
            message: "Keep your property spotless with our professional cleaning services. From routine cleanings to deep cleans, we cater to residential and commercial spaces of all sizes.",
        },
        {
            cardImage: card03,
            heading: 'Electrical Repairs',
            message: "Need electrical work done? Our certified electricians can handle everything from minor repairs to full rewiring. We ensure your home’s electrical system is safe and up to code.",
        },
        {
            cardImage: card04,
            heading: 'Security Guard Services',
            message: "Ensure the safety of your property with our professional security guard services. We provide trained, reliable security personnel to monitor and protect your premises, offering peace of mind.",
        },
        {
            cardImage: card05,
            heading: 'Pest Control',
            message: "Protect your property from unwanted pests with our reliable pest control services. We handle infestations, prevention, and routine treatments for homes and businesses.",
        },
        {
            cardImage: card06,
            heading: 'Painting & Wall Care',
            message: "Protect your property from unwanted pests with our reliable pest control services. We handle infestations, prevention, and routine treatments for homes and businesses.",
        },
        {
            cardImage: card07,
            heading: 'Landscaping & Lawn Care',
            message: "Create a beautiful outdoor space with our landscaping and lawn care services. We provide lawn mowing, tree trimming, garden design, and seasonal maintenance for a lush, green property.",
        },
        {
            cardImage: card08,
            heading: 'Waste Management',
            message: "Ensure your property stays clean and eco-friendly with our waste management services. We provide scheduled trash collection for residential and commercial properties.",
        },
        {
            cardImage: card09,
            heading: 'Appliance Repairs',
            message: "Our skilled technicians offer quick and efficient appliance repair services. From refrigerators to washing machines, we’ll get your appliances back up and running in no time.",
        },
    ]
    return (
        <>
            {/* Hero section */}
            <section className='management-hero-container'>
                <img src={managementHero} alt="" />
                <div className="hero-content">
                    <h1>Comprehensive Facility Management For Your Property</h1>
                    <p>Book Trusted Maintenance Services Today!</p>
                    <Button 
                        buttonType={{primaryBtn: true}}
                        onClick={() => navigate('/admin/book-services')}
                    >
                        Book A Service
                    </Button>
                </div>

            </section>
            {/* Services section */}
            <section className="services-section">
                <div className="heading">
                    <h1>How It Works</h1>
                    <p>Book our facility management services in these 3 simple steps.</p>
                </div>
                <div className="services-cards">
                    <div className="card">
                        <h2>01</h2>
                        <h3>Choose a service</h3>
                        <p>Select the service you need from our range of options.</p>
                    </div>
                    <div className="card">
                        <h2>02</h2>
                        <h3>Schedule A Time</h3>
                        <p>Pick a convenient date and time that works for you.</p>
                    </div>
                    <div className="card">
                        <h2>03</h2>
                        <h3>Confirm And Manage Booking</h3>
                        <p>Confirm your booking and track its progress easily.</p>
                    </div>
                </div>
            </section>
            {/* Facility services cards */}
            <section className="facility-services">
                <div className="heading">
                    <h1>Our Facility Management Services</h1>
                    <p>Comprehensive Care for Your Property, Tailored to Your Needs.</p>
                </div>
                <div className="facilty-services-cards">
                    {
                        facilityService.map((cardItem, index) => {
                            const {cardImage, heading, message} = cardItem;
                            return(
                                <div className="service-card" key={index}>
                                    <div className="card-img" style={{background: `url(${cardImage}) lightgray 50% / cover no-repeat` }}/>
                                    <div className="card-main">
                                        <h3>{heading}</h3>
                                        <p>{message}</p>
                                    </div>
                                    <Button
                                        buttonType={{primaryBtn: true}}
                                        className = 'align-self-stretch'
                                        onClick={() => {
                                            navigate('/admin/book-services');
                                        }}
                                    >
                                        Book Now
                                    </Button>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            {/* Client Reviews */}
            <Reviews
                background={'linear-gradient(180deg, #E3ECF2 0%, #FCFCFC 100%)'}
                width={'100%'}
                cardPadding={'padding: 48px 0px 48px 100px'}
                headingFont={'1.7rem'}
                subHeadingFont={'1.125rem'}
                subHeadinFontFamily={'Unitext Regular'}
            />
            <GetInTouch
                width={isMobile ? '100%' : '85.9%'}
                marginBottom={'72px'}
                Image1={Image1}
                Image2={Image2}
                Image3={Image3}
                heading={'Your Property Is In Safe Hands With Us!'}
                message={'Ready to experience ease with our facility management services?'}
                buttonText={'Get Started'}
            />
        </>
    );
}

export default AdminMangement;