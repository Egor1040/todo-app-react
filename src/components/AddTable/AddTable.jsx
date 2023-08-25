import React, { useState } from 'react';
import './AddTable.css';

const Table = ({ data, editRow, onDelete, changeAct }) => {
    const [inputText, setInputText] = useState('');
    const [visib, setVisib] = useState(false);
    const [editingItemId, setEditingItemId] = useState(null);

    console.log(visib)

    return (
        <table className='main-table'>
            <tbody className='table-desc'>
                {data.map(item => (
                    <tr className='descr-items' key={item.id}>
                        <td className='descr-item descr-item__id'>{item.id}</td>
                        <td className='descr-item descr-item__text'>{item.text}</td>
                        <td className='descr-item'>
                            <div className={ !item.bool ? 'descr-item__icons active' : 'descr-item__icons unactive'}>
                                {console.log(item)}
                                <img className='descr-item__edit' onClick={() => {
                                    changeAct(item.id,item.bool,item.text)
                                    setVisib(!visib)
                                    setEditingItemId(item.id)}} src={ item.edit } 
                                    alt="" />
                                <img className='descr-item__remove' 
                                    value={inputText} 
                                    onClick={() => onDelete(item.id)} 
                                    src="img/icons8-close-30.png" data-id={ item.id } 
                                    alt=''/>
                            </div>
                            <div className={ `editor-menu ${visib && item.id === editingItemId ? 'active' : '' }`}>
                                <input type="text" 
                                    value={inputText}  
                                    onChange={(e) => setInputText(e.target.value)} 
                                    className='editor-menu__input' />
                                <button onClick={() => {
                                    changeAct(item.id,item.bool,item.text)
                                    editRow(item.id, inputText); 
                                    setVisib(!visib);
                                    setInputText('');
                                }} className='editor-menu__button'>Edit</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;