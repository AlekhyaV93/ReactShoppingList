import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function AddToList({textValue,setul,addTextValue,listItemValue}){ 
  return(
    <>
      <form>
      <input type='text'className='task' placeholder='Enter the items' required value={textValue} onChange={(e)=>addTextValue(e.target.value)} ></input>
      <button onClick={(e)=>handleClick(textValue,e)}>Add</button>
      </form>
      <br/>
    </>
  )
  function handleClick(value,e){
    e.preventDefault();
    if(value  !== ''){
      setul([...listItemValue,value]);
      console.log(listItemValue);
     }
  }

}
function ListOut({listItemValue}){
  /* Add key to li and delete that particular li */
  return(
    <>
      <ul>  
      {listItemValue.map(item => <li>{item} 
      <button>Delete</button>
      </li>)}
      </ul>
    </>
  )
}
function App() {
  const [textValue,setTextValue]= useState('');
  const [listItemValue,setListItemValue] = useState([]);
  /*function setTextValue(){

  }*/
  return (
    <div className="App">
      <AddToList textValue={textValue} setul={setListItemValue} addTextValue={setTextValue} listItemValue={listItemValue}/>
      <ListOut listItemValue={listItemValue}/>
      
    </div>
  );
}

export default App;
