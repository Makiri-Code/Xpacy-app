import { useEffect, useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MdOutlineManageAccounts } from "react-icons/md";
import DashboardTopNav from '../../routes/users/dashoard-top-nav/dashboardTopNav';
import { BiBuildings } from "react-icons/bi";
import { FaBuildingUser } from "react-icons/fa6";
import { TbUsersGroup } from "react-icons/tb";
import { LuCalendarCheck } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { IoCardOutline } from "react-icons/io5";
import Card from '../card/card.component';
import { PulseLoader } from 'react-spinners';
import {PageContext} from '../../contexts/page.context'
import { SlOptionsVertical } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { 
    ContentLayout,
    UserDashboardContainer,
    ProfileName,
    PropertyServicesContainer,
    PropertySection,
    PropertyList,
    ServicesSection,
    PropertySectionTitle,
    BookedTable,
    NotificationIconContainer, 
    NotificationSection,
    NotificationList,
    NotificationsPaymentContainer,
    NotificationContent,
    UserDashboardMain,
    PaymentSection,
    UserDashboardTopNav,
    MenuOption,
    MenuOptionContent,
    MenuItem,
    Divider,

} from './user-dashboard.styles';
import EmptySavedProperty from '../empty-saved-property/emptySavedProperty';

const DashboardPage = ({userProfile, savedPropertiesArray, isMobile, setShowDashboardSidebar, showDashboardSideBar, bookedServices, notifications, profileImage}) => {
    const navigate = useNavigate();
    const [showMenuOption, setShowMenuOption] = useState(false);
    const cardStytles = {
        cardWidth: '209px',
        cardHeight: '294px',
        titleSize: '12px',
        headingSize: '14px',
        priceSize: '14px',
        iconWidth: '16px',
        iconHeight: '16px',
        imgHeight: '140px',
        likeIconSize: '32px',
        bodyGap: '8px',
        headerGap: '4px',
        showDivider: false,
        showButtons: false,
        bodyPadding: '8px 10px',

    }
    const convertDateToTimeAndDays = (dateStr) => {
        const givenDate = new Date(dateStr);
        const currentDate = new Date(); // User's current date

            // Convert both dates to UTC (ignoring time differences)
        const givenUTC = new Date(givenDate.getUTCFullYear(), givenDate.getUTCMonth(), givenDate.getUTCDate());
        const currentUTC = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate());

            // Calculate the difference in milliseconds and convert to days
        const differenceInDays = Math.round((currentUTC - givenUTC) / (1000 * 60 * 60 * 24));
        if(differenceInDays > 0){
            return `${differenceInDays} days ago`
        } else {
            const timeDifferenceMs = currentDate - givenDate;

            // Convert milliseconds to hours, minutes, and seconds
            const differenceInHours = Math.floor(timeDifferenceMs / (1000 * 60 * 60));
            const differenceInMinutes = Math.floor((timeDifferenceMs % (1000 * 60 * 60)) / (1000 * 60));
            if(differenceInHours > 0){
                return `${differenceInHours} hours ago`
            } else {
                return `${differenceInMinutes} mins ago`
            }
        }
    }
    const paymentLists = [
        // {
        //     icon: IoCardOutline,
        //     title: 'Rent',
        //     status: 'unpaid',
        //     message: '3-bedroom in Abuja'
        // },
        // {
        //     icon: IoCardOutline,
        //     title: 'Rent',
        //     status: 'paid',
        //     message: '3-bedroom in Abuja'
        // },
    ]
    return (
        <>
            {
                savedPropertiesArray && userProfile && bookedServices && notifications  ? 
                (<UserDashboardContainer>
                    <DashboardTopNav dashboardRoute={'Dashboard Overview'} isMobile={isMobile} setShowDashboardSidebar={setShowDashboardSidebar} showDashboardSidebar={showDashboardSideBar} profileImage={profileImage} notifications={notifications}/>
                    {/* Mobile only Screen */}
                    {
                        isMobile && (
                            <UserDashboardTopNav>
                                <h5>Dashboard</h5>
                                <SlOptionsVertical style={{width: '24px', height: '24px'}} onClick={() => setShowMenuOption(!showMenuOption)}/>
                            </UserDashboardTopNav>
                        )
                    }
                    {/* Mobile only Screen */}
                    {
                        isMobile && (
                            <>
                            {
                                <>
                                    {
                                        showMenuOption && (
                                        <MenuOption>
                                            <MenuOptionContent>
                                                <MenuItem>
                                                    <CiSearch style={{width: '20px', height: '20px'}}/>
                                                    <span>Search Properties</span>
                                                </MenuItem>
                                                <Divider/>
                                                <MenuItem onClick={() => {
                                                    setShowMenuOption(!showMenuOption)
                                                    navigate('/dashboard/user/book-services')
                                                }}>
                                                    <LuCalendarCheck style={{width: '20px', height: '20px'}}/>
                                                    <span>Book Services</span>
                                                </MenuItem>
                                            </MenuOptionContent>
                                        </MenuOption>
                                        )
                                    }
                                    </>
                            }
                            </>
                        )
                    }
                    <UserDashboardMain>
                        <ProfileName>Welcome {userProfile.firstname},</ProfileName>
                        {/* {isMobile && <div className='divider'/>} */}
                        <ContentLayout>
                            <PropertyServicesContainer>
                                <PropertySection>
                                    <PropertySectionTitle>
                                        <h3>Saved Properties</h3>
                                        {
                                            savedPropertiesArray?.length > 0 && (<Link to={'/dashboard/user/saved-properties'}>View All</Link>)
                                        }
                                    </PropertySectionTitle>
                                    <PropertyList>
                                        {
                                            savedPropertiesArray?.length > 0 ?
                                            <>
                                                {savedPropertiesArray?.toSpliced(3).map((properties) => {
                                                    return(
                                                        <Card propertise={properties.propertySaved} cardStyles={cardStytles} savedProperty={true}/>
                                                    )
                                                })}
                                            </> :
                                            <EmptySavedProperty
                                                message={'Oops!... You have no saved properties yet.'}
                                                btnTxt={'Explore New Properties'}
                                                link={'/buy'}
                                            />
                                        }
                                    </PropertyList>
                                </PropertySection>
                                <ServicesSection>
                                    <PropertySectionTitle>
                                        <h3>Booked Services</h3>
                                        {
                                            bookedServices.length > 0 && (<Link to={'/dashboard/user/book-services'}>View All</Link>)
                                        }
                                    </PropertySectionTitle>
                                    {
                                        !isMobile ? (
                                            // Desktop screen only
                                            <>
                                                {
                                                    bookedServices.length > 0 ?
                                                    (
                                                        <BookedTable>
                                                            <thead>
                                                                <tr>
                                                                    <th>Services Type</th>
                                                                    <th>Property</th>
                                                                    <th>Date</th>
                                                                    <th>Status</th>
                                                                </tr>
                                                            </thead>
                                                            {
                                                                bookedServices.toSpliced(4).map((tableData, index) => {
                                                                    const {service_type, address, scheduled_date, service_status,} = tableData
                                                                    const formattedDate = new Date(scheduled_date)
                                                                                                .toLocaleDateString('en-GB')
                                                                                                .split("/")
                                                                                                .map((part, index) => (index === 2 ? part.slice(-2) : part) )
                                                                                                .join("/")
                                                                        return(
                                                                        <tbody key={index}>
                                                                            <tr>
                                                                                <td>{service_type}</td>
                                                                                <td>{address}</td>
                                                                                <td>{formattedDate}</td>
                                                                                <td ><span className={service_status.toLowerCase()}>{service_status}</span></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    )
                                                                })
                                                            }
                                                        </BookedTable>
                                                    ) :
                                                    (
                                                        <EmptySavedProperty
                                                            message={'Oops!... You have no booked services yet.'}
                                                            btnTxt={'Book A Service'}
                                                            link={'/admin/book-services'}
                                                        />
                                                    )
                                                }
                                            </>
                                        ):
                                        <>
                                            {/* Moible Screen Only */}
                                            {
                                                bookedServices.length > 0 ?
                                                (
                                                    <BookedTable>
                                                        {
                                                            bookedServices.map((tableData, index) => {
                                                                const {service_type, address, scheduled_date, service_status,} = tableData
                                                                const formattedDate = new Date(scheduled_date)
                                                                                                .toLocaleDateString('en-GB')
                                                                                                .split("/")
                                                                                                .map((part, index) => (index === 2 ? part.slice(-2) : part) )
                                                                                                .join("/")
                                                                return(
                                                                    <tbody key={index}>
                                                                        <tr>
                                                                            <tr>
                                                                                <td colSpan={2}>{formattedDate}</td>
                                                                            </tr>
                                                                        <tr>
                                                                            <td>{service_type} </td>
                                                                            <td><span className={service_status.toLowerCase()}>{service_status}</span></td>
                                                                        </tr>
                                                                            <tr>
                                                                                <td>Property</td>
                                                                                <td>{address}</td>
                                                                            </tr>
                                                                        </tr>
                                                                    </tbody>
                                                                )
                                                            })
                                                        }
                                                    </BookedTable>
                                                ): 
                                                (
                                                    <EmptySavedProperty
                                                    message={'Oops!... You have no booked services yet.'}
                                                    btnTxt={'Book A Service'}
                                                    link={'/admin/book-services'}
                                                    />
                                                )
                                            }
                                        </>

                                    }
                                </ServicesSection>
                            </PropertyServicesContainer>
                                <NotificationsPaymentContainer>
                                        {
                                            !isMobile && (
                                                    <NotificationSection>
                                                        <PropertySectionTitle>
                                                            <h3>Notification</h3>
                                                            <Link to={'/dashboard/user/notification'}>View All</Link>
                                                        </PropertySectionTitle>
                                                        {
                                                            notifications.toSpliced(3).map((item, index) => {
                                                                const {  notification_type, date, message} = item;

                                                                
                                                                return(
                                                                    <NotificationList key={index}>
                                                                        <NotificationIconContainer>
                                                                            {
                                                                                 notification_type === 'Properties' && (<CiHeart style={{width: '24px', height: '24px'}} />)
                                                                            }
                                                                            {
                                                                                 notification_type === 'Payment' && (<IoCardOutline style={{width: '24px', height: '24px'}} />)
                                                                            }
                                                                            {
                                                                                 notification_type === 'Services' && (<LuCalendarCheck style={{width: '24px', height: '24px'}} />)
                                                                            }
                                                                        </NotificationIconContainer> 
                                                                        <NotificationContent>
                                                                            <div className="notification-title">
                                                                                <p>{notification_type}</p>
                                                                                <span>{convertDateToTimeAndDays(date)}</span>
                                                                            </div>
                                                                            <p>{message}</p>
                                                                        </NotificationContent>
                                                                    </NotificationList>
                                                                )
                                                            })
                                                        }
                                                    </NotificationSection>
                                            )
                                        }
                                        <PaymentSection>
                                            <PropertySectionTitle>
                                                <h3>Payment</h3>
                                                <Link to={'/dashboard/user/payments'}>View All</Link>
                                            </PropertySectionTitle>
                                            {
                                                paymentLists?.length > 0 ? 

                                                (<>
                                                    {
                                                        paymentLists.map((item, index) => {
                                                            const {title, status, message} = item
                                                            return(
                                                                <NotificationList key={index}>
                                                                    <NotificationIconContainer>
                                                                        <item.icon style={{width:'24px', height:'24px'}}/>
                                                                    </NotificationIconContainer> 
                                                                    <NotificationContent>
                                                                        <div className="notification-title">
                                                                            <p>{title}</p>
                                                                            <span className={status}>{status}</span>
                                                                        </div>
                                                                        <p>{message}</p>
                                                                    </NotificationContent>
                                                                </NotificationList>
                                                            )
                                                        })
                                                    }
                                                </>):
                                                (
                                                    <EmptySavedProperty
                                                    message={'Oops!... You have no payment yet.'}
                                                    btnTxt={'Buy or Rent Now'}
                                                    link={'/admin/book-services'}
                                                    />
                                                )
                                            }
                                        </PaymentSection>
                                    </NotificationsPaymentContainer>

                        </ContentLayout>
                    </UserDashboardMain>
                </UserDashboardContainer>) :
                (<PulseLoader
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  height: "100vh",
                }}
                margin={5}
              />)
            }
        </>
    );
}

export default DashboardPage;

