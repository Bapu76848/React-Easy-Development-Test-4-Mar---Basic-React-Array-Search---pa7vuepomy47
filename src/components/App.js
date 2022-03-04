import React,{useState} from 'react'

import '../styles/App.css';


const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]
const App = () => {
  const [value, setValue] = useState('');
  return(
    <>
    <h2>Search</h2>
    <div>
      <input type="text" onChange={(e)=>setValue(e.target.value)} value={value} />
    </div>
    <h2>Result</h2>
    <div>
      <ul>
        {
          searchArray.filter((val)=>{
            if(value == ''){
              return val='';
            }
            else if(val.toLowerCase().includes(value.toLowerCase())){
              return val;
            }
          }).map((val,key)=>{
            return(
              <li key={key}>
                {val}
              </li>
            )
          })
        }
      </ul>
    </div>
    </>
  )
}

export default App;
