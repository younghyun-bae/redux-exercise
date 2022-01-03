import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../store/modules/count';
import { reset } from './../../store/modules/count';

const Count = () => {
    const num = useSelector( state => state.count.num )
    const dispatch  = useDispatch()

    return (
        <div>
            <h1>카운트: {num} </h1>
            <p>
                <button onClick={() => dispatch( increment(10) )}>10증가</button>
                <button onClick={() => dispatch( decrement(50) )}>50감소</button>
                <button onClick={() => dispatch( reset() )}>초기화</button>
            </p>
        </div>
    );
};

export default Count;