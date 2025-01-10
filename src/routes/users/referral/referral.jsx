import { useState } from 'react';
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

const Referral = () => {
    const [showCopied, setShowCopied] = useState(false);
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
    return(
        <div className="notification-container">
            <DashboardTopNav dashboardRoute={'Referral'}/>
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
                                    <span>fidamilolaolojede/xpacy.com</span>
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
                            <h3>400 points</h3>
                        </div>
                    </div>
                    <div className="right-container">
                        <div className="referral-users">
                            <div className="referral-users-content">
                                <div className="d-flex justify-content-between align-self-stretch align-items-center referral-header">
                                    <h5>Refferd Users</h5>
                                    <SortBy selectOptions={selectOptions}/>
                                </div>
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
                                            referralTable.map((tableData, index) => {
                                                const {name, email, dateSent, status} = tableData
                                                return(
                                                    <tr>
                                                        <td>{name}</td>
                                                        <td>{email}</td>
                                                        <td>{dateSent}</td>
                                                        <td><span className={status}>{status}</span></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <Pagination/>
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
                                                const {rank, name, points, trendIndicator,icon} = tableData
                                                console.log(icon.toString())
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
        </div>
    );
}

export default Referral;