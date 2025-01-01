import { useNavigate } from 'react-router-dom';
import { MdOutlineManageAccounts } from "react-icons/md";
import DashboardTopNav from '../../routes/dashoard-top-nav/dashboardTopNav';
import { BiBuildings } from "react-icons/bi";
import { FaBuildingUser } from "react-icons/fa6";
import { TbUsersGroup } from "react-icons/tb";
import './admin-dashboard.styles.css';

const AdminDashboardPage = ({userProfile}) => {
    const navigate = useNavigate();

    if(!userProfile){
        navigate('/auth/log-in')
        return;
    }
    const overviewCardArray = [
        {
            icon: BiBuildings,
            name: 'Properties Managed',
            number: 45
        },
        {
            icon: MdOutlineManageAccounts,
            name: 'Pending Services',
            number: 12
        },
        {
            icon: FaBuildingUser,
            name: 'Owners Managed',
            number: 25
        },
        {
            icon: TbUsersGroup,
            name: 'Tenants Managed',
            number: 20
        },
    ]
    return (
        <div className='userdashboard-container'>
            <DashboardTopNav dashboardRoute={'Dashboard Overview'}/>
            <div className="userdashboard-content">
                <h2>Welcome {userProfile.firstname},</h2>
                <div className="quick-overview-container">
                    <p>Quick Overview</p>
                    <div className="quick-overview-card-container">
                        {
                            overviewCardArray.map((card)=> {
                                const { name, number} = card;
                                return(
                                    <div className="card">
                                        <div className="building-icon">
                                            <card.icon style={{width: '24px', height: '24px'}}/>
                                        </div>
                                        <p>{name.toLocaleUpperCase()}</p>
                                        <span>{number}</span>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboardPage;

