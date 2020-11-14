import React from 'react';
import Botao1 from './Botao1';

function eventButton2() {
    console.log('click botao 2');
}

class Botao2 extends React.Component {
    render() {
        return (
            <button className='Botao2' onClick={eventButton2}>Botao2</button>
        ) 
    }
}

export default Botao2;