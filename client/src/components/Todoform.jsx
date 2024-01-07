import { useState } from "react";

const Todoform = () =>{
    const[text, setText] = useState("");

    const onFormSubmit = () =>{
        console.log(text);
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