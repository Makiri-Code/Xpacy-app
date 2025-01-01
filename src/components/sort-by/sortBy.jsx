import './sortby.styles.css';

const SortBy = ({selectOptions}) => {
    
    // const {option1, option2, option3, option4} = selectOption
    return (
        <div className="sort">
            <span>Sort by:</span>
            <select name="sort" id="">
                {
                    selectOptions.map((item) => {
                        const {option} = item;
                        return(
                            <option value={option} key={option}>{option}</option>
                        )
                    })
                }
            </select>
        </div>
    );
}

export default SortBy;