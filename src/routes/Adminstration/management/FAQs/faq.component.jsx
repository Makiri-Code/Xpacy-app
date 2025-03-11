import { Container, ManagementDashboardContainer, ManagementDashboardContent, } from "../dashboard/management_dashboard.styles"
import TopNav from "../navigation/topnav/top-nav"
import { NotificationTable } from "../dashboard/management_dashboard.styles"
import { FaPlus } from "react-icons/fa6";
import { AddAndDeleteContainer, FaqModal, HeaderContainer } from "./faq.styles";
import Button from "../../../../components/button/button";
import { MdOutlineEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import ModalComponent from "../../../../components/modal/modal";
import { IoClose } from "react-icons/io5";

const FaqComponent = ({isMobile}) => {
    const [editFaq, setEditFaq] = useState({
        questions: '',
        answers: '',
    });
    const [showEditFaq, setShowEditFaq] = useState(false);
    

    const handleChange = (e) => {
        const {name, value} = e.target
        setEditFaq({
            ...editFaq,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        console.log(editFaq);

    }
    const AddFaqClick = () => {
        setEditFaq({
            questions: 'Type question here',
            answers: 'Type answer here',
        });
        setShowEditFaq(!showEditFaq)
    }
    const handleEditClick = (data) => {
        setEditFaq({
            ...editFaq,
            questions: data.questions,
            answers: data.answers,
        });
        setShowEditFaq(!showEditFaq);
        
    }
    const faqTableData = [
        {
            id: 1,
            questions: 'How do I list my property?',
            answers: "To list your property, simply submit a 'Request New Property Listing' through your account. Our team will handle everything from photography to marketing, ensuring your property reaches the right audience. Once approved, the admin will manage the listing process for you.",
            date_created: '19/09/24',
            time_created: '12:00pm',
            date_updated: '19/09/24',
            time_updated: '12:00pm'
        },
        {
            id: 2,
            questions: 'How do I book facility management services?',
            answers: "To book facility management services, log in to your account and navigate to the ‘Facility Management’ section. Select the service you need, complete the booking form, and our team will handle the rest. You’ll receive updates as we manage the request.",
            date_created: '19/09/24',
            time_created: '12:00pm',
            date_updated: '19/09/24',
            time_updated: '12:00pm'
        },
        {
            id: 3,
            questions: 'Can I edit my property details?',
            answers: "Currently, property owners cannot edit their property details directly. Our team manages all aspects of the listing, including updates and marketing. If you need changes, simply contact us, and we’ll make the updates for you.",
            date_created: '19/09/24',
            time_created: '12:00pm',
            date_updated: '19/09/24',
            time_updated: '12:00pm'
        },
        {
            id: 4,
            questions: 'How do I receive updates on my properties?',
            answers: "You’ll receive regular updates on your properties through notifications in your dashboard. You can also adjust your notification preferences under Profile Settings to receive alerts via email or SMS for important updates on payments, maintenance, and service requests.",
            date_created: '19/09/24',
            time_created: '12:00pm',
            date_updated: '19/09/24',
            time_updated: '12:00pm'
        },
        {
            id: 5,
            questions: 'What payment methods are supported?',
            answers: "We support a range of secure payment methods, including bank transfers, credit and debit cards. You can select your preferred payment method during the checkout process.",
            date_created: '19/09/24',
            time_created: '12:00pm',
            date_updated: '19/09/24',
            time_updated: '12:00pm'
        },
        {
            id: 6,
            questions: 'How do I rent properties?',
            answers: "To rent a property, browse our available listings and select a property that suits your needs. You can schedule a viewing, review rental terms, and submit your application directly through your account. Our team will guide you through the rest of the rental process.",
            date_created: '19/09/24',
            time_created: '12:00pm',
            date_updated: '19/09/24',
            time_updated: '12:00pm'
        },
    ];

    const [tableData, setTableData] = useState(faqTableData);
    return(
        <ManagementDashboardContainer>
            <TopNav dashboardRoute={'FAQs'} isMobile={isMobile} />
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
                                tableData.map((data) => {
                                    const {id, questions, answers, date_created, time_created, date_updated, time_updated} = data;

                                    return(
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{questions}</td>
                                            <td><p style={{width: '446px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{answers}</p></td>
                                            <td>{date_created} <br/> {time_created}</td>
                                            <td>1{date_updated} <br/> {time_updated}</td>
                                            <td><AddAndDeleteContainer><MdOutlineEdit style={{width: '24px', height: '24px', cursor: 'pointer'}} onClick={() => handleEditClick(data)}/> <RxCross2 style={{width: '24px', height: '24px', cursor: 'pointer'}} onClick={() => {
                                                setTableData(tableData.filter((item) => item !== data))
                                            }}/></AddAndDeleteContainer></td>
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
                                        <h3>Edit FAQ</h3>
                                        <div>
                                            <label htmlFor="questions">Question</label>
                                            <textarea name="questions" id="questions" value={editFaq.questions} onChange={handleChange}></textarea>
                                        </div>
                                        <div>
                                            <label htmlFor="answers">Answer</label>
                                            <textarea name="answers" id="answers" value={editFaq.answers} onChange={handleChange}></textarea>
                                        </div>
                                    </form>
                                    <Button buttonType={{primaryBtn: true}} onClick={handleSubmit}>
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