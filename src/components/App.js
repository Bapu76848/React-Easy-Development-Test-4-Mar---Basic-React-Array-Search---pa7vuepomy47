import React,{useState} from 'react'

import '../styles/App.css';


const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]
const App = () => {
  const [value, setValue] = useState('');
  const [todo,setTodo] = useState([]);

  const handleonClick = () =>{
    if(value !== 0 && todo !== 0){
      setTodo([...todo,value]);
      setValue('');
    }
  }
  
  return (
    <>
    <div id="main">
      <h2>Search</h2>
    </div>
    <div id="search-input">
      <input type="text" onChange={(e)=>{setValue(e.target.value)}} value={value}/>
    </div>
    <div>
      <h2>Result</h2>
    </div>
    <div>
      <ul>
        {
          <li>{value}</li>
        }
      </ul>
    </div>
    </>
  )
}


export default App;
