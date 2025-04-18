// input field add items button 
// funct add the items in ul btnClick clear input field non empty useState

import React,{useState} from 'react'

const New = () => {

    const [input,setInput] = useState("");
    const [items,setItems] = useState([]);

    const handleInput = (e) => {
        setInput(e.target.value)
       
    }

    const addItems = () => {
        if (input.trim() === "") {
            alert("please ente a value");
            return;
        }

        setItems([...items,input]);
        setInput("");
        
    }
    return(
        <div>
           <input 
           value={input}
           onChange={handleInput}
           type='text' placeholder='enter the item'/> <br/> <br/> <br/>

           <button
           onClick={addItems}> add item </button>



        <ul>
            {
               items.map((item,index) => (
                <li 
                value={index}>{item}</li>
               )) 
            }
        </ul>
        </div>
    );
}

export default New;