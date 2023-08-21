import React, { useState } from 'react';
import './AddHeader.css';

const AddHeader = (props) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddClick = () => {
        props.onAdd(inputValue); 
        setInputValue(''); 
    };

    return (
    <div className="add-header">
        <input
            className="app-header__enter"
            value={inputValue}
            onChange={handleInputChange}
        />
        <button className="app-header__add" onClick={handleAddClick}>
            Add
        </button>
    </div>
    );
};

export default AddHeader;