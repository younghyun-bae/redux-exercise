import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../../store/modules/todos';
import { toggle } from './../../store/modules/todos';

const TodosItem = ({ todo }) => {
    const { id , text , isChecked } = todo 
    const dispatch  = useDispatch() 

    return (
        <li style={{color: isChecked ? 'tomato' :'#000' }}>
            <input type="checkbox" checked={ isChecked } 
                   onChange={() => dispatch( toggle(id)) }/>
            {id}번 / {text} <button onClick={ () => dispatch(remove(id))}>삭제</button>
        </li>
    );
};

export default TodosItem;