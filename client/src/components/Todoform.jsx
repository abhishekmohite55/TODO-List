import { useState } from "react";
import { addNewTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const Todoform = () =>{
    const[text, setText] = useState("");

    const dispatch = useDispatch

    const onFormSubmit = (e) =>{
        e.preventDefault();

        dispatch(addNewTodo(text));
    }

    const onInputChange = (e) =>{
        setText(e.target.value);
    }

    return(
        <form className="form" onSubmit={onFormSubmit}>
            <input 
                placeholder="Enter New TODO..."
                className="input"
                onChange={onInputChange}
            />
        </form>
    )
}

export default Todoform;