

import React,{useState} from 'react'
import New from './New';

const App = () => {

    const [input,setInput] = useState("") //handle input
    const [items,setItems] = useState([]);


    //handle/store the input changes

    const handleInputChanges = (e) => {
        setInput(e.target.value);

    }

    //to add the values

    const addItems = () => {

        if(input.trim() === "") {
            alert("please fill the field"); 
            return;

        } 
        setItems([...items,input]);
        setInput("");
    }
    return(
        <div>
            <h2> Items Adition Q1</h2>

            <input type='text' placeholder='enter the item name'
            value={input}
            onChange={handleInputChanges}/>
            <br/><br/>

            <button 
            onClick={addItems}> add item</button>

            <ul>
                {
                items.map((item,index) => (
                    <li key={index}>{item}</li>
                ))

                }
            </ul>

            <New/>
        </div>
    );
}

export default App