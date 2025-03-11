import { useNavigate } from "react-router-dom"
import Button from "../../components/button/button"
import { NotFoundContainer } from "./not-found.styles";

const NotFound = () => {
    const navigate = useNavigate();

    return(
        <NotFoundContainer>
            <h1>
                Opps!.. This page is Not found
            </h1>
            <Button
                buttonType={{primaryBtn: true}}
                onClick={() => navigate('/')}
            >
                Go Back Home    
            </Button>        
        </NotFoundContainer>
    )
};

export default NotFound;