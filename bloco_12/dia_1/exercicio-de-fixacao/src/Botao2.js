import React from 'react';
import Botao1 from './Botao1';

class Botao2 extends React.Component {
    constructor(){
        super()
        this.eventButton2 = this.eventButton2.bind(this);
        
    }
    eventButton2() {
        console.log(this);
        console.log('click botao 2');
    }
    render() {
        return (
            <button className='Botao2' onClick={this.eventButton2}>Botao2</button>
        ) 
    }
}

export default Botao2;