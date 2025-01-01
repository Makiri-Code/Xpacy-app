import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import './pagination.styles.css';

const Pagination = () => {
    return(
        <section className="pagination-container">
            <div className="pagination-controls">
                <div className="pagination-link">
                    <MdKeyboardArrowLeft style={{width: '16px', height: '16px'}} />
                    <span>Previous</span>
                </div>
                <ul className="page-numbers">
                    <li>1</li>
                    <li>2</li>
                    <li>...</li>
                    <li>4</li>
                </ul>
                <div className="pagination-link">
                    <span>Next</span>
                    <MdKeyboardArrowRight style={{width: '16px', height: '16px'}} />
                </div>
            </div>
        </section>
    )
}

export default Pagination;