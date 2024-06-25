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
      const objValue = {
        value : value,
        key : Math.floor(Math.random()*1000)
      }
      setul([...listItemValue,objValue]);
     }
     addTextValue("");
  }

}
function ListOut({listItemValue,setul}){
  /* Add key to li and delete that particular li */
  return(
    <>
      <ul>  
      {listItemValue.map(item => <li key={item.key}>{item.value} 
      <button onClick={(e)=>handleDelete(e,item.key)}>Delete</button>
      </li>)}
      </ul>
    </>
  )

  function handleDelete(e,delKey){
    
    e.preventDefault();
    var index;
     for( let i=0;i<listItemValue.length;i++){
      if(listItemValue[i].key == delKey){
        index=i;
        console.log(index);
      }
    }
    listItemValue.splice(index,1)
    //console.log(listItemValue);
    setul([...listItemValue]);
  }
}
function App() {
  const [textValue,setTextValue]= useState('');
  const [listItemValue,setListItemValue] = useState([]);
  return (
    <div className="App">
      <AddToList textValue={textValue} setul={setListItemValue} addTextValue={setTextValue} listItemValue={listItemValue}/>
      <ListOut listItemValue={listItemValue} setul={setListItemValue}/>
      
    </div>
  );
}

export default App;
