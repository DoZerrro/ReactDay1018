import React, {useState} from 'react';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoModify from "./TodoModify";

let index = 0;

function TodoContainer() {

    const [arr, setArr] = useState([]);
    const [item, setItem] = useState();

    const inputArr = (str) => {
        setArr([...arr, {index: index++, str: str}])
    }

    console.log(arr)

    const requestMod = (index) => {
        const target = arr.filter(obj => obj.index === index)[0]
        setItem(target)
    }

    const modFilter = (index, str) => {
        const find = arr.find(obj => obj.index === index)
        find.str = str
        setArr([...arr])
        setItem(null)
        console.log(arr)
    }

    return (
        <div>
            <h1>TODO</h1>
            <TodoInput inputArr={inputArr}></TodoInput>
            <TodoList arr={arr} setArr={setArr} requestMod={requestMod}></TodoList>
            {item == null ? <></> : <TodoModify item={item} modFilter={modFilter}></TodoModify>}
        </div>
    );
}

export default TodoContainer;