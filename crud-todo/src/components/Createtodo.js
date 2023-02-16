import React, { useState } from 'react';

function CreateTodo(){
 const [ value , setValue ] = useState("");
 const [ todos, setTodos ] = useState([]);
 const [ edit, setEdit ] = useState(false);
 const [ index, setIndex ] = useState(null)


function handleSubmit(event){
   event.preventDefault();
   let trimmedValue = value.trim();
   if(trimmedValue.length == 0){
    return setValue("")
   }
   if(edit){ 
    todos[index] = value;
    setTodos([...todos]);
    setEdit(false)
   } else {

       setTodos([...todos , value]);
       setValue("")
   }
 }

 function handleDelete(i){
     todos.splice(i,1);
     setTodos([...todos])
 }
 
 function handleEdit(i){
    let edit = todos[i];
    setIndex(i);
    setEdit(true);
    setValue(edit);
 }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input 
             onChange={(event)=> setValue(event.target.value) }
            placeholder='Your Todo'
            type="text"
            value={value}
            />
            <button type='submit'>Submit</button>
        </form>
        <div>
            <ul>
            { todos && todos.map((todo,i) => {
                return (
                    <>
                    <li>
                        <input type="checkbox" id={i} />
                        <label htmlFor={i} className='strike' >{todo}</label>
                    <button onClick={() => handleDelete(i)} >X</button>
                    <i onClick={() => handleEdit(i)} class="fa-solid fa-pen-to-square"></i>
                    </li>
                    </>
                )
            })}
            </ul>
        </div>
        </>
    )
}

export default CreateTodo;