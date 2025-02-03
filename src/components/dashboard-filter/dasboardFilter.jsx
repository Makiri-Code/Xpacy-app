import { MdFilterList } from 'react-icons/md';
import { useState } from 'react';
import './dashboard-filter.style.css';

const DashboardFilter = ({dropdownOptions}) => {
    const [showDropdown, setShowDropDown] = useState(false);
    return(
        <div className="filter-icon-container" onClick={()=> setShowDropDown(!showDropdown)} >
            <MdFilterList style={{width: '24px', height: '24px'}} />
            {
                showDropdown && (
                    <div className="dropdown-hover">
                        {
                            dropdownOptions.map((option) => {
                                return(
                                    <span key={option}>{option}</span>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

export default DashboardFilter;