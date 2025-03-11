import { Routes, Route } from 'react-router-dom';
import './admin.styles.css';
import AdminMangement from '../../components/admin-mangement/admin.component';
import BookServices from '../services/bookServices';
import NotFound from '../not-found/not-found';
const Management = ({userProfile}) => {
    return (
        <>
            <Routes>
                <Route index element = {<AdminMangement/>} />
                <Route path='/book-services' element = {<BookServices userProfile={userProfile} />} />
                <Route path="*" element={<NotFound/>}/> 
            </Routes>
        </>
    )
}; 

export default Management;