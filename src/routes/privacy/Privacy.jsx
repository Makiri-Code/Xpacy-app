import styled from "styled-components";
const PrivacyContainer = styled.div`
  padding: 24px 7%;
  line-height: 150%;
  letter-spacing: 0.16px;
  text-align: justify;
  & h2 {
    font-family: "Florencesans Exp";
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 18px;
  }
  & p {
    font-family: "Unitext Regular";
    font-size: 1.14rem;
    font-style: normal;
    font-weight: 400;
  }
  & h5 {
    font-family: "Unitext Regular";
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
  }
  @media only screen and (max-width: 600px) {
    text-align: start;
    & h2 {
      font-size: 24px;
      margin-bottom: 14px;
    }
    & p {
      font-size: 1rem;
    }
    & h5 {
      font-size: 1.14rem;
    }
  }
`;
function Privacy() {
  return (
    <PrivacyContainer>
      <h2>Privacy Policy – Introduction</h2>
      <p>
        Xpacy (“we,” “our,” or “us”) is committed to protecting your privacy.
        This Privacy Policy outlines how we collect, use, disclose, and
        safeguard your Personal Data (also referred to as personal information
        or personally identifiable information).
      </p>
      <p>
        By accessing or using our services, submitting your personal
        information, or clicking “Accept,” you consent to the collection and
        processing of your data as outlined in this Policy, to the extent
        permitted by law. You may withdraw your consent at any time, subject to
        legal or regulatory obligations requiring continued processing.
      </p>
      <p>
        We take your privacy seriously and handle your personal information,
        including your name, address, phone number, email, and other
        identifiable data, under applicable data protection laws and this
        Privacy Policy.
      </p>
      <p>
        We may update this Policy periodically. When we do, we’ll revise the
        “Last Updated” date and may notify you via email or platform alerts. We
        encourage you to review this Policy regularly to stay informed about how
        your information is handled.
      </p>
      <h5>
        <strong>1. What This Privacy Policy Covers</strong>
      </h5>
      <p>This policy explains:</p>
      <ul>
        <li>
          How we collect your information (through website use, transactions,
          and communications)
        </li>
        <li>
          How we protect your data (safeguarding its confidentiality, integrity,
          and security)
        </li>
        <li>
          How we use and share your personal information (including who we share
          it with and why)
        </li>
        <li>
          Compliance with data protection laws (under applicable regulations)
        </li>
        <li>
          Your rights as a data subject, such as access, correction, deletion,
          and withdrawal of consent
        </li>
      </ul>
      <p>
        <strong>Please note:</strong> This policy applies only to Xpacy.com and
        does <em>not</em> cover data practices of third-party sites, agents, or
        individuals beyond our direct control.
      </p>
      <h5>
        <strong>2. Collection of Personally Identifiable Information</strong>
      </h5>
      <p>
        Xpacy collects personal information to provide seamless access to our
        property listings, facility management, space design services, and
        customer support. This includes:
      </p>
      <ul>
        <li>
          Information you provide, such as name, contact details, property
          details, and preferences, when you sign up, request a service, or list
          a property.
        </li>
        <li>
          Usage data: including device/browser type, IP address, location, and
          interactions with the Xpacy platform.
        </li>
        <li>
          Customer support records: chats, calls, or emails to help resolve
          issues and improve service.
        </li>
        <li>
          Third-party data: from platforms you link or engage with (e.g.,
          Google, Meta), which help personalize your experience.
        </li>
      </ul>
      <h5>
        <strong>3. Use of Personal Data</strong>
      </h5>
      <p>We use your data to:</p>
      <ul>
        <li>
          Facilitate smooth onboarding for property owners, tenants, and service
          users
        </li>
        <li>
          Match users with relevant properties and services based on preferences
          and behavior
        </li>
        <li>
          Deliver prompt facility management updates and space planning
          consultations
        </li>
        <li>Send notifications, reminders, and service alerts</li>
        <li>Provide secure transaction and booking experiences</li>
        <li>
          Improve our platform through customer feedback and usage insights
        </li>
        <li>Meet legal, regulatory, or compliance requirements</li>
      </ul>
      <p>
        By using Xpacy, you consent to the collection and use of your data
        strictly for improving service delivery across our real estate and
        facility management ecosystem.
      </p>
      <h5>
        <strong>4. Demographic &amp; Profile Data</strong>
      </h5>
      <p>
        To enhance your experience and improve our service offerings, Xpacy
        collects and analyzes demographic and profile data related to user
        activity on our platform.
      </p>
      <p>We may:</p>
      <ul>
        <li>
          Use your IP address to troubleshoot technical issues, administer the
          platform, and understand regional trends
        </li>
        <li>
          Request participation in optional surveys to gather insights such as
          age range, location, property interests, or income level
        </li>
        <li>
          Use collected data to personalize your property search, service
          recommendations, and platform experience
        </li>
      </ul>
      <p>
        All data is used responsibly to ensure that our real estate, facility
        management, and space planning services remain relevant, efficient, and
        customer-focused.
      </p>
      <h5>
        <strong>5. Cookies</strong>
      </h5>
      <p>
        Xpacy uses cookies to personalize your experience on our platform.
        Cookies are small data files stored on your device that help remember
        your preferences. These cookies do not contain personally identifiable
        information and are used solely to enhance usability, improve service
        delivery, and tailor content based on user behavior.
      </p>
      <h5>
        <strong>6. Data Retention</strong>
      </h5>
      <p>
        We retain your personal data only for as long as necessary to fulfill
        the purposes for which it was collected or to meet legal, regulatory, or
        internal policy requirements.
      </p>
      <h5>
        <strong>7. Data Storage &amp; Transfers</strong>
      </h5>
      <p>
        Your personal data may be stored or processed outside Nigeria. By using
        our platform, you consent to this transfer. Xpacy ensures that
        appropriate safeguards are in place to protect your data and that such
        transfers comply with applicable data protection laws.
      </p>
      <h5>
        <strong>8. Your Rights as a Data Subject</strong>
      </h5>
      <p>
        Under data protection laws, you have certain rights concerning your
        personal information held by Xpacy. These include:
      </p>
      <ul>
        <li>
          Right of Access: You may request a copy of the personal data we hold
          about you.
        </li>
        <li>
          Right to Rectification: You may request corrections to inaccurate or
          incomplete data.
        </li>
        <li>
          Right to Erasure ("Right to Be Forgotten"): You can request deletion
          of your data where we have no legal basis to continue processing it.
        </li>
        <li>
          Right to Restrict Processing: You may request that we limit how your
          data is used in certain cases.
        </li>
        <li>
          Right to Data Portability: You can request your data be transferred to
          another service provider.
        </li>
        <li>
          Right to Object: You can object to how we use your personal data for
          direct marketing or certain other purposes.
        </li>
        <li>
          Right to Lodge a Complaint: If you believe your rights have been
          violated, you may contact the Nigeria Data Protection Commission
          (NDPC) via
          <a href="https://ndpc.gov.ng/">
            {" "}
            <u>ndpc.gov.ng</u>
          </a>{" "}
          or email{" "}
          <a href="mailto:info@ndpb.gov.ng">
            <u>info@ndpb.gov.ng</u>
          </a>
          . &nbsp;For rights-related requests, please contact our Data
          Protection Officer at info@xpacy.com.
        </li>
      </ul>
      <h5>
        <strong>9. Disclosure of Information</strong>
      </h5>
      <p>Xpacy may share personal information:</p>
      <ul>
        <li>
          With trusted partners to support service delivery (e.g., facility
          management, space inspection, or maintenance teams).
        </li>
        <li>
          If required by law or to protect our legal rights or safety of others.
        </li>
        <li>
          In the event of a merger or acquisition, where the new entity must
          uphold this policy.
        </li>
      </ul>
      <p>
        We will never sell your personal information. Where required, we will
        seek your consent before sharing data or transferring it outside Nigeria
        to a jurisdiction without adequate data protection laws.
      </p>
      <h5>
        <strong>10. Links to Third-Party Sites</strong>
      </h5>
      <p>
        Xpacy.com may link to third-party websites. We are not responsible for
        the content or privacy practices of these sites. We encourage you to
        review their privacy policies before sharing any personal information.
      </p>
      <h5>
        <strong>11. Security Measures</strong>
      </h5>
      <p>
        We implement industry-standard security protocols to protect your
        personal data from loss, misuse, or unauthorized access. Account
        information is secured using encryption, and we limit access to personal
        data on a need-to-know basis only.
      </p>
      <h5>
        <strong>12. Data Breach Notifications</strong>
      </h5>
      <p>If a security breach involving your personal data occurs:</p>
      <ul>
        <li>We will notify the NDPC within 72 hours.</li>
        <li>
          If the breach is likely to impact your rights, we will notify you
          within 7 days, including how we’re addressing it.
        </li>
      </ul>
      <h5>
        <strong>Privacy Policy – Introduction</strong>
      </h5>
      <p>
        Xpacy (“we,” “our,” or “us”) is committed to protecting your privacy.
        This Privacy Policy outlines how we collect, use, disclose, and
        safeguard your Personal Data (also referred to as personal information
        or personally identifiable information).
      </p>
      <p>
        By accessing or using our services, submitting your personal
        information, or clicking “Accept,” you consent to the collection and
        processing of your data as outlined in this Policy, to the extent
        permitted by law. You may withdraw your consent at any time, subject to
        legal or regulatory obligations requiring continued processing.
      </p>
      <p>
        We take your privacy seriously and handle your personal information,
        including your name, address, phone number, email, and other
        identifiable data, under applicable data protection laws and this
        Privacy Policy.
      </p>
      <p>
        We may update this Policy periodically. When we do, we’ll revise the
        “Last Updated” date and may notify you via email or platform alerts. We
        encourage you to review this Policy regularly to stay informed about how
        your information is handled.
      </p>
      <h5>
        <strong>1. What This Privacy Policy Covers</strong>
      </h5>
      <p>This policy explains:</p>
      <ul>
        <li>
          How we collect your information (through website use, transactions,
          and communications)
        </li>
        <li>
          How we protect your data (safeguarding its confidentiality, integrity,
          and security)
        </li>
        <li>
          How we use and share your personal information (including who we share
          it with and why)
        </li>
        <li>
          Compliance with data protection laws (under applicable regulations)
        </li>
        <li>
          Your rights as a data subject, such as access, correction, deletion,
          and withdrawal of consent
        </li>
      </ul>
      <p>
        <strong>Please note:</strong> This policy applies only to Xpacy.com and
        does <em>not</em> cover data practices of third-party sites, agents, or
        individuals beyond our direct control.
      </p>
      <h5>
        <strong>2. Collection of Personally Identifiable Information</strong>
      </h5>
      <p>
        Xpacy collects personal information to provide seamless access to our
        property listings, facility management, space design services, and
        customer support. This includes:
      </p>
      <ul>
        <li>
          Information you provide, such as name, contact details, property
          details, and preferences, when you sign up, request a service, or list
          a property.
        </li>
        <li>
          Usage data: including device/browser type, IP address, location, and
          interactions with the Xpacy platform.
        </li>
        <li>
          Customer support records: chats, calls, or emails to help resolve
          issues and improve service.
        </li>
        <li>
          Third-party data: from platforms you link or engage with (e.g.,
          Google, Meta), which help personalize your experience.
        </li>
      </ul>
      <h5>
        <strong>3. Use of Personal Data</strong>
      </h5>
      <p>We use your data to:</p>
      <ul>
        <li>
          Facilitate smooth onboarding for property owners, tenants, and service
          users
        </li>
        <li>
          Match users with relevant properties and services based on preferences
          and behavior
        </li>
        <li>
          Deliver prompt facility management updates and space planning
          consultations
        </li>
        <li>Send notifications, reminders, and service alerts</li>
        <li>Provide secure transaction and booking experiences</li>
        <li>
          Improve our platform through customer feedback and usage insights
        </li>
        <li>Meet legal, regulatory, or compliance requirements</li>
      </ul>
      <p>
        By using Xpacy, you consent to the collection and use of your data
        strictly for improving service delivery across our real estate and
        facility management ecosystem.
      </p>
      <h5>
        <strong>4. Demographic &amp; Profile Data</strong>
      </h5>
      <p>
        To enhance your experience and improve our service offerings, Xpacy
        collects and analyzes demographic and profile data related to user
        activity on our platform.
      </p>
      <p>We may:</p>
      <ul>
        <li>
          Use your IP address to troubleshoot technical issues, administer the
          platform, and understand regional trends
        </li>
        <li>
          Request participation in optional surveys to gather insights such as
          age range, location, property interests, or income level
        </li>
        <li>
          Use collected data to personalize your property search, service
          recommendations, and platform experience
        </li>
      </ul>
      <p>
        All data is used responsibly to ensure that our real estate, facility
        management, and space planning services remain relevant, efficient, and
        customer-focused.
      </p>
      <h5>
        <strong>5. Cookies</strong>
      </h5>
      <p>
        Xpacy uses cookies to personalize your experience on our platform.
        Cookies are small data files stored on your device that help remember
        your preferences. These cookies do not contain personally identifiable
        information and are used solely to enhance usability, improve service
        delivery, and tailor content based on user behavior.
      </p>
      <h5>
        <strong>6. Data Retention</strong>
      </h5>
      <p>
        We retain your personal data only for as long as necessary to fulfill
        the purposes for which it was collected or to meet legal, regulatory, or
        internal policy requirements.
      </p>
      <h5>
        <strong>7. Data Storage &amp; Transfers</strong>
      </h5>
      <p>
        Your personal data may be stored or processed outside Nigeria. By using
        our platform, you consent to this transfer. Xpacy ensures that
        appropriate safeguards are in place to protect your data and that such
        transfers comply with applicable data protection laws.
      </p>
      <h5>
        <strong>8. Your Rights as a Data Subject</strong>
      </h5>
      <p>
        Under data protection laws, you have certain rights concerning your
        personal information held by Xpacy. These include:
      </p>
      <ul>
        <li>
          Right of Access: You may request a copy of the personal data we hold
          about you.
        </li>
        <li>
          Right to Rectification: You may request corrections to inaccurate or
          incomplete data.
        </li>
        <li>
          Right to Erasure ("Right to Be Forgotten"): You can request deletion
          of your data where we have no legal basis to continue processing it.
        </li>
        <li>
          Right to Restrict Processing: You may request that we limit how your
          data is used in certain cases.
        </li>
        <li>
          Right to Data Portability: You can request your data be transferred to
          another service provider.
        </li>
        <li>
          Right to Object: You can object to how we use your personal data for
          direct marketing or certain other purposes.
        </li>
        <li>
          Right to Lodge a Complaint: If you believe your rights have been
          violated, you may contact the Nigeria Data Protection Commission
          (NDPC) via
          <a href="https://ndpc.gov.ng/">
            {" "}
            <u>ndpc.gov.ng</u>
          </a>{" "}
          or email{" "}
          <a href="mailto:info@ndpb.gov.ng">
            <u>info@ndpb.gov.ng</u>
          </a>
          . &nbsp;For rights-related requests, please contact our Data
          Protection Officer at info@xpacy.com.
        </li>
      </ul>
      <h5>
        <strong>9. Disclosure of Information</strong>
      </h5>
      <p>Xpacy may share personal information:</p>
      <ul>
        <li>
          With trusted partners to support service delivery (e.g., facility
          management, space inspection, or maintenance teams).
        </li>
        <li>
          If required by law or to protect our legal rights or safety of others.
        </li>
        <li>
          In the event of a merger or acquisition, where the new entity must
          uphold this policy.
        </li>
      </ul>
      <p>
        We will never sell your personal information. Where required, we will
        seek your consent before sharing data or transferring it outside Nigeria
        to a jurisdiction without adequate data protection laws.
      </p>
      <h5>
        <strong>10. Links to Third-Party Sites</strong>
      </h5>
      <p>
        Xpacy.com may link to third-party websites. We are not responsible for
        the content or privacy practices of these sites. We encourage you to
        review their privacy policies before sharing any personal information.
      </p>
      <h5>
        <strong>11. Security Measures</strong>
      </h5>
      <p>
        We implement industry-standard security protocols to protect your
        personal data from loss, misuse, or unauthorized access. Account
        information is secured using encryption, and we limit access to personal
        data on a need-to-know basis only.
      </p>
      <h5>
        <strong>12. Data Breach Notifications</strong>
      </h5>
      <p>If a security breach involving your personal data occurs:</p>
      <ul>
        <li>We will notify the NDPC within 72 hours.</li>
        <li>
          If the breach is likely to impact your rights, we will notify you
          within 7 days, including how we’re addressing it.&nbsp;
        </li>
      </ul>
    </PrivacyContainer>
  );
}

export default Privacy;
