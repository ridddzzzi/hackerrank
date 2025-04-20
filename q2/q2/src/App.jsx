import React,{useState} from 'react'
// import "h8k-components";
// import "./App.css";
const App = () => {
    const [input,setInput] = useState ({name:"",email:"",address:""})
    const [display,setDisplay] = useState([])

    const handleChange = (e) => {
        const {id,value} = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [id]:value
        }));

    };

    const handleSubmit = (e) => {
        e.preventDefault(); // ⛔️ prevents page refresh
        if (!input.name || !input.email || !input.address ){
            alert("input field cannot be empty");
        }
        setDisplay([...display,input])
    }
  return(
    <div>
     <form>
         <h1>Contact Form</h1>

         <input
             onChange={handleChange}
             type='text' placeholder='name' id='name'
         value={input.name}/> <br/> <br/>
         <input
             onChange={handleChange}
             type='email' placeholder='email' id='email'
         value={input.email}/>  <br/> <br/>
         <textarea placeholder='address' id='address'
                   onChange={handleChange} value={input.address}/> <br/>
          <br/> <br/>

         <button onClick={handleSubmit}>submit</button>



     </form>

        <div>
            {
                display.map((entry,index) => (
                  <div key={index}>

                    <p > {entry.name}</p>
                <p >{entry.email}</p>
        <p >{entry.address}</p>

                  </div>
        ))
        }
    </div>
    </div>
  );
}

export default App;