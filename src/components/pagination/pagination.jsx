import { useContext } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PageContext } from "../../contexts/page.context";
import './pagination.styles.css';

const Pagination = () => {
    let index = 1;
    const {pagination, setPropertiesArray} = useContext(PageContext);
    const pageNum = [];
    for(let i=1; i<=pagination.totalPages; i++){
        pageNum.push(i);
    }
    const handleNext = async () => {
        index = index + 1
        try{
            const nextPageProperties = await fetch(`https://app.xpacy.com/property/fetch-properties?page=${index}`, {method: 'GET'});
            const response = await nextPageProperties.json();
            setPropertiesArray(response.properties);
        } catch(error) {
            console.error('Error:', error);
        }
    }
    const handlePrevious = async () => {
        if(index > 1){
            index = index - 1
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
                                <li key={num}>
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