import { useState, useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from '../../../contexts/userContext';
import { useNavigate } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import SideBarNav from '../../../components/side-bar-nav/sideBarNav';
import DashboardPage from '../../../components/user-dashboard/userDashboard';
import Notification from '../notification/notification';
import SavedProperties from '../saved-properties/savedProperties';
import UserPayments from '../user-payments/userPayments';
import ProfileSettings from '../profile-settings/profileSettings';
import HelpAndSupport from '../help-support/help';
import Referral from '../referral/referral';
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
                (<PulseLoader style={{display: 'flex', justifyContent: 'center' ,alignItems: 'center', alignSelf: 'stretch', height: '100vh'}} margin={5}/>) :
                (
                    <Routes >
                        <Route path='/' element= {<SideBarNav />} >
                            <Route index element={<DashboardPage userProfile={userProfile} />} />
                            <Route path='notification' element={<Notification/>} />
                            <Route path='saved-properties' element={<SavedProperties/>} />
                            <Route path='payments' element={<UserPayments/>} />
                            <Route path='profile-settings' element={<ProfileSettings/>} />
                            <Route path='support' element={<HelpAndSupport/>} />
                            <Route path='referral' element={<Referral/>} />
                        </Route>
                    </Routes>     
                )
            }
        </>
    )
}
export default UserDashboard;