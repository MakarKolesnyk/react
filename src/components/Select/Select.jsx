import PropTypes from 'prop-types';
import { useState } from 'react';


const Select = (props) => {
    const {list} = props
    const [selectOption, setSelectOption] = useState("");
    const changeSelectOption = (event) =>{
        setSelectOption(event.target.value)
    }
    const showOption = (elem)=><option key={elem.value} value={elem.value}>{elem.label}</option>
    return (
        <>
            <select value={selectOption} onChange={changeSelectOption}>
                <option value="" disabled>choose country</option>
                {list.map(showOption)}
            </select>
        </>
    );
};


Select.propTypes = {
    list: PropTypes.array,
};


export default Select;
