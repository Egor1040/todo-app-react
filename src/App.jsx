import { useState } from 'react';
import './App.css';
import shortid from 'shortid';
import AddHeader from './components/AddHeader/AddHeader';
import AddTable from './components/AddTable/AddTable';

function App() {
    const [data, setData] = useState([
        {id: 'K36Y2LhNS', text: 'JS', icon: 'img/icons8-close-30.png'},
        {id: 'oO7Z74kGA', text: 'React', icon: 'img/icons8-close-30.png'},
        {id: 'Q1rvGl3tj', text: 'jQuery', icon: 'img/icons8-close-30.png'}
    ]);

    const addRow = (text) => {
        if(text) {
            const newRow = { id: shortid.generate(), text: text, icon: 'img/icons8-close-30.png' };
            setData([...data, newRow]);
        }
    };

    const deleteRow = (id) => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
    };

    return (
        <div className="App">
            <h2 className='App-title'>REACT TODO APP</h2>
            <div className="todo-app">
                <AddHeader onAdd={addRow} />
                <AddTable data={data} onDelete={deleteRow}/>
            </div>
        </div>
    );
}

export default App;