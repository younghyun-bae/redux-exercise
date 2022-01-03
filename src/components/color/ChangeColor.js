import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from './../../store/modules/changecolor';

const ChangeColor = () => {
    const color = useSelector( state  => state.changecolor.color )
    const dispatch  = useDispatch()

    return (
        <div>
            <h1 style={{color:color}}>ChangeColor: { color } </h1>
            <p>
                <button onClick={ ()  => dispatch( changeColor('red') )}>red</button>
                <button onClick={ ()  => dispatch( changeColor('green') )}>green</button>
                <button onClick={ ()  => dispatch( changeColor('blue') )}>blue</button>
            </p>
        </div>
    );
};

export default ChangeColor;