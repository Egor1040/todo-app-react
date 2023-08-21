import React from 'react';
import './AddTable.css';

const Table = ({ data, onDelete }) => {
  return (
    <table className='main-table'>
        <tbody className='table-desc'>
            {data.map(item => (
                <tr className='desc-items' key={item.id}>
                    <td className='descr-item descr-item__id'>{item.id}</td>
                    <td className='descr-item descr-item__text'>{item.text}</td>
                    <td className='descr-item descr-item__remove'>
                        <img onClick={() => onDelete(item.id)} src={item.icon} data-id={ item.id } alt=''/>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  );
};

export default Table;