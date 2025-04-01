import { Container, ManagementDashboardContainer, ManagementDashboardContent, } from "../dashboard/management_dashboard.styles"
import TopNav from "../navigation/topnav/top-nav"
import { NotificationTable } from "../dashboard/management_dashboard.styles"
import { FaPlus } from "react-icons/fa6";
import { AddAndDeleteContainer, FaqModal, HeaderContainer } from "./faq.styles";
import Button from "../../../../components/button/button";
import { MdOutlineEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useContext, useEffect, useRef, useState } from "react";
import ModalComponent from "../../../../components/modal/modal";
import { IoClose } from "react-icons/io5";
import fetchServer from "../../../../utils/serverutils/fetchServer";
import { UserContext } from "../../../../contexts/userContext";
import { toast } from "sonner";

const FaqComponent = ({isMobile, profileImage, faqs, setFaqs}) => {
    const btnRef = useRef(null);
    const questionRef = useRef(null);
    const answerRef = useRef(null);

    const getAllFaqs = async () => {
        const response = await fetchServer("GET", {}, userToken, 'faq/get-all-faqs', server);
        setFaqs(response.data);
    }
    console.log(faqs)
    const {userToken, server} = useContext(UserContext);
    const [editFaq, setEditFaq] = useState({
        question: '',
        answer: '',
    });
    const [showEditFaq, setShowEditFaq] = useState(false);
    const [isAddClicked, setIsAddClicked] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setEditFaq({
            ...editFaq,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        btnRef.current.disabled = true;
        if(isAddClicked){
            const response = await fetchServer("POST", editFaq, userToken, "faq/create-faq", server);
            if(!response.err) {
                toast.success(response.message);
                setEditFaq({
                    question: '',
                    answer: '',
                })
                getAllFaqs();
            }
            btnRef.current.disabled = false;
            return;
        }else{
        } 

    }
    useEffect(() => {
        if(showEditFaq){
            if(!editFaq.question && !editFaq.answer){ 
                btnRef.current.disabled = true;
            };
            if(editFaq.question && editFaq.answer){ 
                btnRef.current.disabled = false;
            }
        }
    }, [editFaq])
    const AddFaqClick = () => {
        setEditFaq({
            question: '',
            answer: '',
        });
        setShowEditFaq(!showEditFaq);
        setIsAddClicked(true);
    }
    const handleEditClick = (data) => {
        setEditFaq({
            ...editFaq,
            question: data.question,
            answer: data.answer,
        });
        setShowEditFaq(!showEditFaq);
        setIsAddClicked(false);
    }
    // const faqTableData = [
    //     {
    //         id: 1,
    //         questions: 'How do I list my property?',
    //         answers: "To list your property, simply submit a 'Request New Property Listing' through your account. Our team will handle everything from photography to marketing, ensuring your property reaches the right audience. Once approved, the admin will manage the listing process for you.",
    //         date_created: '19/09/24',
    //         time_created: '12:00pm',
    //         date_updated: '19/09/24',
    //         time_updated: '12:00pm'
    //     },
    //     {
    //         id: 2,
    //         questions: 'How do I book facility management services?',
    //         answers: "To book facility management services, log in to your account and navigate to the ‘Facility Management’ section. Select the service you need, complete the booking form, and our team will handle the rest. You’ll receive updates as we manage the request.",
    //         date_created: '19/09/24',
    //         time_created: '12:00pm',
    //         date_updated: '19/09/24',
    //         time_updated: '12:00pm'
    //     },
    //     {
    //         id: 3,
    //         questions: 'Can I edit my property details?',
    //         answers: "Currently, property owners cannot edit their property details directly. Our team manages all aspects of the listing, including updates and marketing. If you need changes, simply contact us, and we’ll make the updates for you.",
    //         date_created: '19/09/24',
    //         time_created: '12:00pm',
    //         date_updated: '19/09/24',
    //         time_updated: '12:00pm'
    //     },
    //     {
    //         id: 4,
    //         questions: 'How do I receive updates on my properties?',
    //         answers: "You’ll receive regular updates on your properties through notifications in your dashboard. You can also adjust your notification preferences under Profile Settings to receive alerts via email or SMS for important updates on payments, maintenance, and service requests.",
    //         date_created: '19/09/24',
    //         time_created: '12:00pm',
    //         date_updated: '19/09/24',
    //         time_updated: '12:00pm'
    //     },
    //     {
    //         id: 5,
    //         questions: 'What payment methods are supported?',
    //         answers: "We support a range of secure payment methods, including bank transfers, credit and debit cards. You can select your preferred payment method during the checkout process.",
    //         date_created: '19/09/24',
    //         time_created: '12:00pm',
    //         date_updated: '19/09/24',
    //         time_updated: '12:00pm'
    //     },
    //     {
    //         id: 6,
    //         questions: 'How do I rent properties?',
    //         answers: "To rent a property, browse our available listings and select a property that suits your needs. You can schedule a viewing, review rental terms, and submit your application directly through your account. Our team will guide you through the rest of the rental process.",
    //         date_created: '19/09/24',
    //         time_created: '12:00pm',
    //         date_updated: '19/09/24',
    //         time_updated: '12:00pm'
    //     },
    // ];
    

    return(
        <ManagementDashboardContainer>
            <TopNav dashboardRoute={'FAQs'} isMobile={isMobile} profileImage={profileImage} />
            <ManagementDashboardContent>
                <Container>
                    <HeaderContainer>
                        <h2>Manage FAQs</h2>
                        <Button
                            buttonType={{primaryBtn: false}}
                            onClick={AddFaqClick} 
                        >
                            <FaPlus style={{width: '24px', height: '24px'}} />
                            Add FAQ
                        </Button>
                    </HeaderContainer>
                    <NotificationTable>
                        <thead>
                            <th>S/N</th>
                            <th>Questions</th>
                            <th>Answers</th>
                            <th>Date Created</th>
                            <th>Date Updated</th>
                            <th></th>
                        </thead>
                        <tbody>
                            {
                                faqs.map((data) => {
                                    const {id, question, answer, created_at, updated_at} = data;
                                    const formatDate = (dateStr) => {
                                        const date = new Date(dateStr);
                                        return date.toLocaleDateString("en-GB").split("/")
                                        .map((part, index) => (index === 2 ? part.slice(-2) : part) )
                                        .join("/");
                                    };
                                    const formatTime = (dateStr) => {
                                        const time = new Date(dateStr); 
                                        return time.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit', hour12: true});
                                    }
                                    return(
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{question}</td>
                                            <td><p style={{width: '446px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{answer}</p></td>
                                            <td>{formatDate(created_at)} <br/> {formatTime(created_at)}</td>
                                            <td>1{formatDate(updated_at)} <br/> {formatTime(updated_at)}</td>
                                            <td><AddAndDeleteContainer><MdOutlineEdit style={{width: '24px', height: '24px', cursor: 'pointer'}} onClick={() => handleEditClick(data)}/> <RxCross2 style={{width: '24px', height: '24px', cursor: 'pointer'}}/></AddAndDeleteContainer></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </NotificationTable>
                    {
                        showEditFaq && (
                            <ModalComponent>
                                <FaqModal>
                                    <IoClose style={{width: '24px', height: '24px', alignSelf: 'end', cursor: 'pointer'}} onClick={() => setShowEditFaq(!showEditFaq)}/>
                                    <form className="faq-modal-form" onSubmit={handleSubmit}>
                                        <h3>{isAddClicked ? 'Add FAQ' : "Edit FAQ"}</h3>
                                        <div>
                                            <label htmlFor="question">Question</label>
                                            <textarea name="question" id="question" value={editFaq.question} onChange={handleChange} placeholder="Type Faq questions" required ref={questionRef} ></textarea>
                                        </div>
                                        <div>
                                            <label htmlFor="answer">Answer</label>
                                            <textarea name="answer" id="answer" value={editFaq.answer} onChange={handleChange} placeholder="Type Faq Answers" required ref={answerRef}></textarea>
                                        </div>
                                    </form>
                                    <Button buttonType={{primaryBtn: true}} onClick={handleSubmit} btnRef={btnRef}>
                                        Save Changes
                                    </Button>
                                </FaqModal>
                            </ModalComponent>
                        )
                    }
                </Container>
            </ManagementDashboardContent>
        </ManagementDashboardContainer>
    )
};

export default FaqComponent;