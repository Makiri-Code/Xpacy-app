import { Routes, Route } from 'react-router-dom';
import './admin.styles.css';
import AdminMangement from '../../components/admin-mangement/admin.component';
import BookServices from '../services/bookServices';

const Management = () => {
    return (
        <>
            <Routes>
                <Route index element = {<AdminMangement/>} />
                <Route path='/book-services' element = {<BookServices/>} /> 
            </Routes>
        </>
    )
}; 

export default Management;