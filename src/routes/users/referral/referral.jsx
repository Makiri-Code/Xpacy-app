import { useState, useEffect, useContext } from 'react';
import DashboardTopNav from '../dashoard-top-nav/dashboardTopNav';
import { MdContentCopy } from "react-icons/md";
import {ReactComponent as Divider} from '../../../assets/referral/referral-divider.svg';
import {ReactComponent as Gmail} from '../../../assets/referral/gmail.svg';
import {ReactComponent as Facebook} from '../../../assets/referral/facebook.svg';
import {ReactComponent as Instagram} from '../../../assets/referral/instagram.svg';
import {ReactComponent as TickTok} from '../../../assets/referral/tictok.svg';
import {ReactComponent as Twitter} from '../../../assets/referral/twitter.svg';
import Pagination from '../../../components/pagination/pagination';
import SortBy from '../../../components/sort-by/sortBy';
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import './referral.styles.css';
import { SlOptionsVertical } from 'react-icons/sl';
import { UserContext } from '../../../contexts/userContext';
import { UserDashboardTopNav } from '../../../components/user-dashboard/user-dashboard.styles';
import fetchServer from '../../../utils/serverutils/fetchServer';
import styled from 'styled-components';
import EmptySavedProperty from '../../../components/empty-saved-property/emptySavedProperty';
const Referral = ({isMobile, showDashboardSidebar, setShowDashboardSidebar, userProfile, }) => {
    const EmptySavedPropertyContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    text-align: center;
    button {
        display: none;
    }
`
    const {userToken} = useContext(UserContext)

    const [showCopied, setShowCopied] = useState(false);
    const [referralDownLine, setReferralDownLine] = useState(null);
    const handleButtonClick = () => {
        // Create a temporary element to trigger the copy event
        const tempInput = document.createElement("input");
        tempInput.value = "fidamilolaolojede/xpacy.com";
        document.body.appendChild(tempInput);

        // Select and copy the text
        tempInput.select();
        document.execCommand("copy", true);

        // Remove the temporary input
        document.body.removeChild(tempInput);
        
        setShowCopied(true)
        setTimeout(() => {
            setShowCopied(false);
        }, 2000);
    };
    const selectOptions = [
        {
            option: 'Default'
        },
        {
            option: 'Last 7 days'
        },
        {
            option: 'Last 30 days'
        },
        {
            option: 'Last 90 days'
        },
    ];
    const referralTable = [
        {
            name: 'Mabel Olu',
            email: 'mabelolu@gmail.com',
            dateSent: '29/09/24',
            status: 'success'
        },
        {
            name: 'Mabel Olu',
            email: 'mabelolu@gmail.com',
            dateSent: '29/09/24',
            status: 'pending'
        },
        {
            name: 'Mabel Olu',
            email: 'mabelolu@gmail.com',
            dateSent: '29/09/24',
            status: 'success'
        },
        {
            name: 'Mabel Olu',
            email: 'mabelolu@gmail.com',
            dateSent: '29/09/24',
            status: 'pending'
        },
        {
            name: 'Mabel Olu',
            email: 'mabelolu@gmail.com',
            dateSent: '29/09/24',
            status: 'success'
        },
        {
            name: 'Mabel Olu',
            email: 'mabelolu@gmail.com',
            dateSent: '29/09/24',
            status: 'pending'
        },
        {
            name: 'Mabel Olu',
            email: 'mabelolu@gmail.com',
            dateSent: '29/09/24',
            status: 'success'
        },
    ]
    const leaderBoard = [
        {
            rank: '1st',
            name: 'John Doe',
            points: '2000 points',
            trendIndicator: '10%',
            icon: FaArrowUp

        },
        {
            rank: '1st',
            name: 'John Doe',
            points: '1000 points',
            trendIndicator: '10%',
            icon: FaArrowDown

        },
    ]
    useEffect(() => {
        const getReferralDownLine = async () => {
          try {
            const resp = await fetchServer(
              "GET",
              {},
              userToken,
              `user/fetch-downline/${userProfile.referralCode}`,
              "https://app.xpacy.com"
            );
            setReferralDownLine(resp.data.downline);
            console.log(referralDownLine)
          } catch (error) {
            console.error("Error:", error);
          }
        };
        if(userToken){
          getReferralDownLine();
        }
      }, [userToken]);
    //   Convert dateStr to date
    const getDateStr = (dateStr) => {
        const date = new Date(dateStr);

        return date.toLocaleDateString();
    }
    return(
        <div className="notification-container">
            <DashboardTopNav dashboardRoute={'Referral'} isMobile={isMobile} setShowDashboardSidebar={setShowDashboardSidebar} showDashboardSidebar={showDashboardSidebar}/>
            {
                isMobile && (
                    <UserDashboardTopNav>
                        <h5>Refferal</h5>
                        <SlOptionsVertical style={{width: '24px', height: '24px'}} onClick={() => {}}/>
                    </UserDashboardTopNav>
                )
            }
            {
                userProfile && (
                    <div className="referral-container">
                        <div className="referral-tittle">
                            <h3>Refer Friends And Earn</h3>
                            <p>Invite your friends to Xpacy and earn rewards for every successful signup. </p>
                        </div>
                        <main className="referral-content">
                            <div className="left-container">
                                <div className="referral-code-container">
                                    <div className="referral-code">
                                        <p>Referral code</p>
                                        <div className="copy-referral">
                                            <span>{userProfile.referralCode}</span>
                                            <MdContentCopy style={{height: '20px', width: '18px'}} onClick={handleButtonClick}/>
                                            {
                                                showCopied && 
                                                (
                                                    <span className="copied-text">Copied!</span>
                                                )
                                            }
                                        </div>
                                        <div className="referral-divider">
                                            <Divider className='divider'/>
                                            <span>Or</span>
                                            <Divider className='divider'/>
                                        </div>
                                        <p className='share-link-text'>Share link via</p>
                                        <div className="share-link-icons">
                                            <Gmail/>
                                            <Facebook/>
                                            <Instagram/>
                                            <TickTok/>
                                            <Twitter/>
                                        </div>
                                    </div>
                                </div>
                                <div className="referral-points">
                                    <p>Referral points</p>
                                    <h3>{userProfile.refferalPoints} points</h3>
                                </div>
                            </div>
                            <div className="right-container">
                                <div className="referral-users">
                                    <div className="referral-users-content">
                                        <div className="d-flex justify-content-between align-self-stretch align-items-center referral-header">
                                            <h5>Refferd Users</h5>
                                            {referralDownLine && referralDownLine.length > 0 && (
                                                <SortBy selectOptions={selectOptions} isMobile={isMobile}/>
                                            )}
                                        </div>
                                        {
                                            referralDownLine && 
                                            (
                                                <>
                                                    {
                                                        referralDownLine.length > 0 ? 
                                                        (
                                                            <>
                                                                {
                                                                    isMobile ? 
                                                                    (
                                                                        <table>
                                                                            <tbody>
                                                                                {
                                                                                    referralDownLine.map((tableData, index) => {
                                                                                        const {firstname, email, created_at, lastname} = tableData;
                                                                                        return(
                                                                                            <tr key={index} className='mobile-row'>
                                                                                                <tr>
                                                                                                    <td>{firstname} {lastname}</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td>{email}</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td>Date Sent</td>
                                                                                                    <td>{getDateStr(created_at)}</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td></td>
                                                                                                    <td><span className='success'>Success</span></td>
                                                                                                </tr>
                                                                                            </tr>
                                                                                            
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </tbody>
                                                                        </table>
                                                                    ):
                                                                    (
                                                                        <table>
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>Name</th>
                                                                                    <th>Email</th>
                                                                                    <th>Date sent</th>
                                                                                    <th>Status</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                {
                                                                                    referralDownLine.map((tableData, index) => {
                                                                                        const {firstname, email, created_at, lastname} = tableData;
            
                                                                                        return(
                                                                                            <tr>
                                                                                                <td>{firstname} {lastname}</td>
                                                                                                <td>{email}</td>
                                                                                                <td>{getDateStr(created_at)}</td>
                                                                                                <td><span className='success'>Success</span></td>
                                                                                            </tr>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </tbody>
                                                                        </table>
                                                                        
                                                                    )
                                                                }
                                                                <Pagination/>
                                                            </>
                                                        ):
                                                        (
                                                            <EmptySavedPropertyContainer>
                                                                <EmptySavedProperty
                                                                message={"Oops!... You are yet to refer a user. Send your unique referral code to your family and friends and get rewarded."}
                                                                btnTxt={"Explore New Properties"}
                                                                link={"/buy"}
                                                                />
                                                            </EmptySavedPropertyContainer>
                                                        )
                                                    }
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="referral-users">
                                    <div className="referral-users-content">
                                        <div className="d-flex justify-content-between align-self-stretch align-items-center referral-header">
                                            <h5>LeaderBoard</h5>
                                        </div>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Rank</th>
                                                    <th>Name</th>
                                                    <th>Points</th>
                                                    <th>Trend Indicators</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    leaderBoard.map((tableData, index) => {
                                                        const {rank, name, points, trendIndicator, icon} = tableData
                                                        return(
                                                            <tr key={index}>
                                                                <td className='rank'>{rank}</td>
                                                                <td>{name}</td>
                                                                <td>{points}</td>
                                                                <td><span className={icon === FaArrowUp ? 'faarrowup' : 'faarrowdown'}><tableData.icon style={{width: '16px', height: '16px'}}/>{trendIndicator}</span></td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <Pagination/>
                                </div>
                            </div>
                        </main>
                    </div>
                )
            }
        </div>
    );
}

export default Referral;