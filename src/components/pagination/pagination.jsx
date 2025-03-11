import { useContext, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PageContext } from "../../contexts/page.context";
import './pagination.styles.css';

const Pagination = () => {
    const [currentNum, setCurrentNum] = useState(1)
    let index = 1;
    
    const {pagination, setPropertiesArray} = useContext(PageContext);
    const pageNum = [];
    for(let i=1; i<=pagination?.totalPages; i++){
        pageNum.push(i);
    }
    const handleNext = async () => {
        if(index < pageNum.length){
            index = index + 1
            setCurrentNum(index);
            try{
                const nextPageProperties = await fetch(`https://app.xpacy.com/property/fetch-properties?page=${index}`, {method: 'GET'});
                const response = await nextPageProperties.json();
                setPropertiesArray(response.properties);
            } catch(error) {
                console.error('Error:', error);
            }
        } else {
            return;
        }
        
    }
    const handlePrevious = async () => {
        if(index > 1){
            index = index - 1
            setCurrentNum(index)
        } else {
            index = 1
        }
        try{
            const nextPageProperties = await fetch(`https://app.xpacy.com/property/fetch-properties?page=${index}`, {method: 'GET'});
            const response = await nextPageProperties.json();
            setPropertiesArray(response.properties);
        } catch(error) {
            console.error('Error:', error);
        }
        console.log(index)
    }
    const handleNumClick = async (num) => {
        setCurrentNum(num);
        try{
            const nextPageProperties = await fetch(`https://app.xpacy.com/property/fetch-properties?page=${num}`, {method: 'GET'});
            const response = await nextPageProperties.json();
            setPropertiesArray(response.properties);
        } catch(error) {
            console.error('Error:', error);
        }
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
                                <li key={num} onClick={() => handleNumClick(num)} className={currentNum === num ? 'active': ''} >
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