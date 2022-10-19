import React, {useState} from 'react';

function TodoInput({inputArr}) {

    const [str, setStr] = useState('');

    const changeHandler = (e) => {
        setStr(e.target.value)
    }

    const clickHandler = (str) => {
        inputArr(str)
        setStr('')
    }

    return (
        <div>
            <input value={str} onChange={(e) => {changeHandler(e)}}/>
            &nbsp; &nbsp;
            <button onClick={() => {clickHandler(str)}}>INPUT</button>
        </div>
    );
}

export default TodoInput;