import { useState, useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import { useNavigate } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import SideBarNav from '../../components/side-bar-nav/sideBarNav';
import DashboardPage from '../../components/user-dashboard/userDashboard';
import Notification from '../notification/notification';
import SavedProperties from '../saved-properties/savedProperties';

const UserDashboard = () => {
    const navigate = useNavigate()
    const {userProfile} = useContext(UserContext);
    // useEffect(() => {
    //     if(!userProfile.firstname){
    //         navigate('/auth/log-in');
    //     }
    // }, []);
    
    return(
        <>
            {
                userProfile.firstname ? 
                (<PulseLoader style={{display: 'flex', justifyContent: 'center' ,alignItems: 'center', flexBasis: '100%', height: '100vh'}} margin={5}/>) :
                (
                    <Routes >
                        <Route path='/' element= {<SideBarNav />} >
                            <Route index element={<DashboardPage userProfile={userProfile} />} />
                            <Route path='notification' element={<Notification/>} />
                            <Route path='saved-properties' element={<SavedProperties/>} />
                        </Route>
                    </Routes>     
                )
            }
        </>
    )
}
export default UserDashboard