import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/userContext';
import './user-dashboard.styles.css';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const navigate = useNavigate()
    const {userdata} = useContext(UserContext);
    // useEffect(() => {
    //     if(!userdata.success) {
    //         console.log(userdata)
    //         // navigate('/auth/log-in');
    //     }
    // }, [])
    console.log(userdata)
    return(
        <h1>This is the user dashboard route</h1>
    )
}

export default UserDashboard;