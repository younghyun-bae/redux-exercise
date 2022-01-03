import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { useSelector } from 'react-redux';

const Todos = () => {
    const color = useSelector( state => state.color.color )
    return (
        <div>
            <h1 style={{color:color}}>할일만들기</h1>
            <TodoInput />
            <TodoList />
        </div>
    );
};

export default Todos;