import React from 'react';
import Square from './Square';

const Board = ({squares,onClick}) =. {
    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={()=> onClick(i)} />
    };


    return (
        <div>
            <div className="bpard-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            
        </div>
    )
}
