import React from 'react';

const EditorInput = ({item, setText, changeBool, editRow, text}) => {
    return (
        <div className='editor-menu'>
            <input type="text" onChange={(e) => setText(e.target.value) } className='editor-menu__input' />
            <button onClick={() => {
                changeBool(item.id, item.bool = false)
                editRow(item.id, text)
                setText('')}}
                className='editor-menu__button'>Edit</button>
        </div>
    );
};

export default EditorInput;