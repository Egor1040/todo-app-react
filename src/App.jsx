import { useState } from 'react';
import './App.css';
import shortid from 'shortid';
import AddHeader from './components/AddHeader/AddHeader';
import AddTable from './components/AddTable/AddTable';

function App() {
    const [data, setData] = useState([
        {id: 'K36Y2LhNS', text: 'JS', edit: 'img/icons8-edit-30.png', delete: 'img/icons8-close-30.png'},
        {id: 'oO7Z74kGA', text: 'React', edit: 'img/icons8-edit-30.png', delete: 'img/icons8-close-30.png'},
        {id: 'Q1rvGl3tj', text: 'jQuery', edit: 'img/icons8-edit-30.png', delete: 'img/icons8-close-30.png'}
    ]);

    const addRow = (text) => {
        if(text) {
            const newRow = { id: shortid.generate(), text: text, edit: 'img/icons8-edit-30.png', delete: 'img/icons8-close-30.png' };
            setData([...data, newRow]);
        }
    };

    const editRow = (id,value) => {
        const newData = data.map(item => {
            if(value) {
                if(item.id === id) {
                    return {...data, id: id, text: value};
                }
            }
            return item;
        })
        setData(newData);
    }

    const deleteRow = (id) => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
    };

    return (
        <div className="App">
            <h2 className='App-title'>REACT TODO APP</h2>
            <div className="todo-app">
                <AddHeader onAdd={addRow} />
                <AddTable data={data} editRow={editRow} onDelete={deleteRow}/>
            </div>
        </div>
    );
}

export default App;