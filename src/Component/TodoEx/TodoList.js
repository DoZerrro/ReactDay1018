import React from 'react';

function TodoList({arr, setArr, requestMod}) {

    const arrList = arr.map((item) => {

        const deleteHandler = (index) => {
            setArr(arr.filter(obj => obj.index !== index))
        }

        const modifyHandle = (index) => {
            requestMod(index)
        }

        return (
            <li key={item.index}>
                {item.str}
                &nbsp; &nbsp;
                <button onClick={() => {deleteHandler(item.index)}}>DEL</button>
                &nbsp;
                <button onClick={() => {modifyHandle(item.index)}}>MOD</button>
            </li>
        );
    })

    return (
        <div>
            {arrList}
        </div>
    );
}

export default TodoList;