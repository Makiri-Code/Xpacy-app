import Button from "../button/button";
import { useNavigate } from "react-router-dom";
import { 
    EmptyContainer,
    EmptySvg 
} from "./emptySavedProperty.styles";
const EmptySavedProperty = ({message, btnTxt, link}) => {
    const navigate = useNavigate()
    return (
        <EmptyContainer>
            <EmptySvg/>
            <p>{message}</p>
            <Button
                buttonType={{primaryBtn: true}}
                onClick = {() => navigate(link)}
            >
                {btnTxt} 
            </Button>
        </EmptyContainer>
    )
};

export default EmptySavedProperty;