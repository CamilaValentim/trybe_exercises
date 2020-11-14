import React from 'react';

class Botao3 extends React.Component {
    constructor() {
        super()
        this.eventButton3 = this.eventButton3.bind(this)
    }
    
    eventButton3() {
        console.log(this);
        console.log('click botaoo 3');
    }
    render() {
        return (
            <button className='Botao3' onClick={this.eventButton3}>Botao3</button>
        )
    }
}

export default Botao3;