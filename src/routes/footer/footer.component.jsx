import Logo from "../../assets/xpacy-footer-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { LogoContainer, NavLogo } from "../navigation/navigation.styles";
import Button from "../../components/button/button";
import {
  Company,
  ContactText,
  FooterContainer,
  FooterContent,
  FooterInfo,
  FooterInfoTitle,
  FooterInfoTop,
  FooterLogo,
  Newsletter,
  ContactInfo,
  Copywright,
} from "./footer.style";
import { useContext, useRef, useState } from "react";
import fetchServer from "../../utils/serverutils/fetchServer";
import { UserContext } from "../../contexts/userContext";
import { toast } from "sonner";

const Footer = () => {
  const navigate = useNavigate();
  const btnRef = useRef(null);
  const { server } = useContext(UserContext);
  const year = new Date().getFullYear();
  const [subscribeEmail, setSubscribeEmail] = useState({
    email: "",
  });
  const { email } = subscribeEmail;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubscribeEmail({
      ...subscribeEmail,
      [name]: value,
    });
  };
  const handleSubscribe = async () => {
    if (!email) return;
    btnRef.current.disabled = true;
    const response = await fetchServer(
      "POST",
      subscribeEmail,
      "",
      "newsletter/subscribe",
      server
    );
    if (!response.err) toast.error(response.message);
    setSubscribeEmail({
      email: "",
    });
    btnRef.current.disabled = false;
  };

  return (
    <>
      <FooterContainer>
        <FooterContent>
          <FooterInfo>
            <FooterInfoTop>
              <LogoContainer onClick={() => navigate("/")}>
                <FooterLogo src={Logo} />
              </LogoContainer>
              <FooterInfoTitle>
                Experience Ease, Find Your Dream Property
              </FooterInfoTitle>
            </FooterInfoTop>
            <ContactInfo>
              <ContactText>
                <strong>Address:</strong> No. 1 Joe Akonobi Street, Ojodu
                Berger.
              </ContactText>
              <ContactText>
                <strong>Email:</strong> info@xpacy.com
              </ContactText>
              <ContactText>
                <strong>Phone:</strong> 09068557780
              </ContactText>
            </ContactInfo>
            <div className="footer-info-bottom"></div>
          </FooterInfo>
          <Company>
            <h5 className="footer-company-title">COMPANY</h5>
            <div className="footer-company-links">
              <Link to={"/"}>Home</Link>
              <Link to={"/buy"}>Buy</Link>
              <Link to={"/rent"}>Rent</Link>
              <Link to={"/admin"}>Management</Link>
              <Link to={"/contacts"}>Contact</Link>
            </div>
          </Company>
          <Company>
            <div className="footer-company-title">HELP</div>
            <div className="footer-company-links">
              <Link to={"/contact"}>Customer Support</Link>
              <Link to={"/terms"}>Terms & Conditions</Link>
              <Link to={"/privacy"}>Privacy Policy</Link>
            </div>
          </Company>
          <Company>
            <div className="footer-company-title">NEWSLETTER</div>
            <Newsletter>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
              <Button
                buttonType={{ primaryBtn: false }}
                background={"var(--Secondary-Secondary500)"}
                onClick={handleSubscribe}
                btnRef={btnRef}
              >
                Subscribe Now
              </Button>
            </Newsletter>
          </Company>
        </FooterContent>
        <Copywright>
          &copy; Copyright {year}, All Rights Reserved by Xpacy
        </Copywright>
      </FooterContainer>
    </>
  );
};

export default Footer;
