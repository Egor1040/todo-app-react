import React from 'react';

const RowIcons = ({item, changeBool, deleteRow}) => {
    return (
        <div className='descr-item__icons'>
            <img className='descr-item__edit' 
                onClick={ () => changeBool(item.id, item.bool)}
                src={ item.edit } 
                alt="" />
            <img className='descr-item__remove'
                onClick={() => deleteRow(item.id)} 
                src={item.delete}
                alt=''/>
        </div>
    );
};

export default RowIcons;