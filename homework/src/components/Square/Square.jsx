import React from 'react';
import { useGameStore } from '../../context';
import './Square.scss';

export default function Square({ value, onClick }) {
    const classes = ['btn'];
    const [state] = useGameStore();
    
    if (value||state.winner){
        classes.push('disabled');
    }
    
    return (
        <button className={classes.join(' ')} onClick={onClick} disabled={value||state.winner} >
            {value}
        </button>
    );
}