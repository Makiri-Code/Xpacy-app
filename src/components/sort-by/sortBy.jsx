import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';
import {ReactComponent as SortIcon} from '../../assets/sort-icon.svg';
import './sortby.styles.css';
import { useState } from 'react';

const SortBy = ({selectOptions, isMobile}) => {
    const [showDropdown, setShowDropDown] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Default');
    // const {option1, option2, option3, option4} = selectOption
    const handleClick = (option) => {
        setSelectedOption(option);
    }
    return (
        <>
            {
                isMobile ? 
                (
                    <div className="sort-icon-container">
                        <SortIcon onClick={() => setShowDropDown(!showDropdown)}/>
                        {
                            showDropdown && (
                                <ul className="sort-dropdown" id="">
                                    {
                                        selectOptions.map((item) => {
                                            const {option} = item;
                                            return(

                                                <li value={option} key={option} onClick={() => {
                                                    setSelectedOption(option);
                                                    setShowDropDown(!showDropdown)
                                                }}>{option}</li>
                                            )
                                        })
                                    }
                                </ul>
                            )
                        }
                    </div>
                ) : 
                (
                    <div className="sort">
                        <div className="sort-dropdown-container">
                            <span>Sort by:</span>
                            <div className="sort-dropdown-content" onClick={() => setShowDropDown(!showDropdown)}>
                                <span>{selectedOption}</span>
                               { showDropdown ?  <MdOutlineArrowDropUp style={{width: '16px', height: '16px'}} /> :  <MdOutlineArrowDropDown style={{width: '16px', height: '16px'}}/>}
                            </div>
                        </div>
                        {
                            showDropdown && (
                                <ul className="sort-dropdown" id="">
                                {
                                    selectOptions.map((item) => {
                                        const {option} = item;
                                        return(

                                            <li value={option} key={option} onClick={() => {
                                                setSelectedOption(option);
                                                setShowDropDown(!showDropdown)
                                            }}>{option}</li>
                                        )
                                    })
                                }
                                </ul>
                            )
                        }
                    </div>
            )
            }
        </>
    );
}

export default SortBy;