import { useContext, useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PageContext } from "../../contexts/page.context";
import './pagination.styles.css';

const Pagination = ({totalPages, currentPage, onPageChange, className=''}) => {
    const pageNum = Array.from({length: totalPages}, (_, i) => i+1);
    console.log(pageNum);
    const handleNext = () => {
        if(currentPage < totalPages){
            onPageChange(currentPage + 1);
        }
    }
    const handlePrevious = () => {
        if(currentPage > 1){
            onPageChange(currentPage - 1);
        }
    }
    const handleNumClick = (num) => {
        onPageChange(num)
    }
    return(
        <section className="pagination-container">
            <div className="pagination-controls">
                <div className="pagination-link" onClick={handlePrevious}>
                    <MdKeyboardArrowLeft style={{width: '16px', height: '16px'}} />
                    <span>Previous</span>
                </div>
                <ul className="page-numbers">
                    {
                        pageNum.map((num) => {
                            return (
                                <li key={num} onClick={() => handleNumClick(num)} className={currentPage === num ? 'active': ''} >
                                    {num}
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="pagination-link" onClick={handleNext}>
                    <span>Next</span>
                    <MdKeyboardArrowRight style={{width: '16px', height: '16px'}} />
                </div>
            </div>
        </section>
    )
}

export default Pagination;