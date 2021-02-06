import React from 'react';

class Botao3 extends React.Component {
    constructor() {
        super()
        this.eventButton3 = this.eventButton3.bind(this)
        this.state = {
            numeroDeClicks : 0
        }
    }
    
    eventButton3() {
       this.setState((numeroAnterior, _props) => ({
           numeroDeClicks: numeroAnterior.numeroDeClicks + 1
       }))
    }
    render() {
        console.log(this);
        return (
            <button className='Botao3' onClick={this.eventButton3}>Botao3</button>
        )
    }
}

export default Botao3;