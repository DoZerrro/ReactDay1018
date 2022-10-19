import {useState} from "react";

function TodoModify({item, modFilter}) {

    const [text, setText] = useState(item.str);

    return (
        <div>
            <br/> <hr/>
            <h2>MOD PAGE</h2>
            <input value={text} onChange={(e) => {setText(e.target.value)}}/>
            &nbsp; &nbsp;
            <button onClick={() => {modFilter(item.index, text)}}>MOD</button>
        </div>
    );
}

export default TodoModify;