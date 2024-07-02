import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, FormGroup } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';

function AddToList({textValue,setul,addTextValue,listItemValue}){ 
  return(
    <>   
      <Form>
      <FormGroup className="formGroup">
      <Form.Control type='text' className='task' placeholder='Add Items to List' required value={textValue} onChange={(e)=>addTextValue(e.target.value)} />
      <Button variant='dark' onClick={(e)=>handleClick(textValue,e)}>Add</Button>
      </FormGroup>
      </Form>
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
      <ListGroup variant='flush' as='ol' numbered>
      {listItemValue.map(item => <ListGroup.Item as='li' className='d-flex justify-content-between align-items-start' key={item.key}>{item.value} 
      <Button variant='dark' onClick={(e)=>handleDelete(e,item.key)}>Delete</Button>
      </ListGroup.Item>)}
      </ListGroup>
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
    setul([...listItemValue]);
  }
}
function App() {
  const [textValue,setTextValue]= useState('');
  const [listItemValue,setListItemValue] = useState([]);
  return (
    <div className="App">
      <Container className='p-5 mt-5 bg-light rounded-4'>
      <h2>Shopping List</h2>
      <AddToList textValue={textValue} setul={setListItemValue} addTextValue={setTextValue} listItemValue={listItemValue}/>
      <ListOut listItemValue={listItemValue} setul={setListItemValue}/>
      </Container>    
    </div>
  );
}

export default App;
