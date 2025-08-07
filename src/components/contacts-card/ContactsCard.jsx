import styled from "styled-components";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
const ContactsCardContainer = styled.div`
  position: fixed;
  right: -165px;
  top: 220px;
  transition: all 0.3s;
  z-index: 9999;

  & ul {
    margin: 0px;
    padding: 0px;
    & li {
      list-style: none;
      cursor: pointer;
      display: flex;
      gap: 10px;
      align-items: center;
      background-color: #203645;
      color: #fcfcfc;
      box-shadow: 0px 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
      padding: 8px 10px;
      border-radius: 8px 0px 0px 8px;
      font-size: 18px;
      transition: all 0.3s ease-in-out;

      &:not(:last-child) {
        margin-bottom: 6px;
      }
      & a {
        color: inherit;
      }
      & svg {
        font-size: 24px;
      }
    }
    & .active {
      transform: translateX(-165px);
      text-decoration: underline;
    }
  }
`;

const ContactsCard = () => {
  return (
    <ContactsCardContainer>
      <ul>
        <ContactsList>
          <FiPhoneCall />
          <a href="tel:2349068557780" target="_blank" rel="noopener noreferrer">
            +234 906 855 7780
          </a>
        </ContactsList>
        <ContactsList>
          <MdOutlineMail />
          <a
            href="mailto:info@xpacy.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@xpacy.com
          </a>
        </ContactsList>
        <ContactsList>
          <FaWhatsapp />
          <a
            href="https://wa.me/+2348131968688?text=I'm%20interested%20in%20your%20real%20estate%20services"
            target="_blank"
            rel="noopener noreferrer"
          >
            +234 813 196 8688
          </a>
        </ContactsList>
      </ul>
    </ContactsCardContainer>
  );
};

const ContactsList = ({ children }) => {
  const [showFullCard, setShowFullCard] = useState(false);
  const handleMouseEnter = () => {
    setShowFullCard(true);
  };
  const handleMouseLeave = () => {
    setShowFullCard(false);
  };
  return (
    <li
      className={`${showFullCard ? "active" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </li>
  );
};

export default ContactsCard;
