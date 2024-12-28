import { useState, useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import { useNavigate } from 'react-router-dom';
import fetchServer from '../../utils/serverutils/fetchServer';
import SideBarNav from '../../components/side-bar-nav/sideBarNav';
import DashboardPage from '../../components/user-dashboard/userDashboard';


const UserDashboard = () => {
    const navigate = useNavigate()
    const {userdata, server, userToken, userProfile, getUserProfile} = useContext(UserContext);
    // console.log(userToken)
    // Cookies.remove('gt-jwt-br')
    useEffect(()=>{
        getUserProfile();
    }, [])

    console.log(userProfile)
    return(
        <>
            <Routes  >
                <Route path='/' element= <SideBarNav /> >
                    <Route index element=<DashboardPage userProfile={userProfile}/> />

                </Route>
            </Routes>     
        </>
    )
}
export default UserDashboard