import { IoIosCheckmarkCircle } from "react-icons/io";
import { SuccesContainer, SucessContent, Heading } from './account-success-styles';
import Button from '../button/button';
import { useNavigate } from 'react-router-dom';
const AccountSuccess = () => {
    const navigate = useNavigate()
    return (
        <SuccesContainer>
            <SucessContent>
                <div>
                    <Heading>Your Account Has Been Verified!</Heading>
                    <IoIosCheckmarkCircle style={{width: '100px', height: '100px', marginBottom: '64px', color: '#203645'}}/>
                    <p>Congratulations! <br/>
                    Your email has been successfully verified. You can now log in and start exploring properties.</p>
                </div>
                <Button buttonType={{primaryBtn: true}} onClick={() => navigate("/auth/log-in")}>Log Into Your Account</Button>
            </SucessContent>
        </SuccesContainer>
    );
};

export default AccountSuccess;