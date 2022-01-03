import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pink, hotpink , tomato, orange } from './../../store/modules/color';

const Color = () => {
    //const state담을이름 = useSelector( state => state.리듀서파일명.state명 )
    const color = useSelector( state => state.color.color )
    const dispatch = useDispatch()

    return (
        <div>
           <h1 style={{color:color}}> 컬러 : { color } </h1> 
           <p>
               <button onClick={ () => dispatch( pink() )}> pink </button>
               <button onClick={ () => dispatch( hotpink() )}> hotpink </button>
               <button onClick={ () => dispatch( tomato() )}> tomato </button>
               <button onClick={ () => dispatch( orange() )}> orange </button>
           </p>
        </div>
    );
};

export default Color;