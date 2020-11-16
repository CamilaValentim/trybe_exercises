import React from 'react';


class Botao2 extends React.Component {
    constructor(){
        super()
        this.eventButton2 = this.eventButton2.bind(this);
        this.state = {
            numeroDeClicks: 0

        }
        
    }
    eventButton2() {
        this.setState((estadoAnterior, _props) => ({
            numeroDeClicks: estadoAnterior.numeroDeClicks + 1
        }))
        
    }
    render() {
        console.log(this);
        return (
            <button className='Botao2' onClick={this.eventButton2}>Botao2</button>
        ) 
    }
}

export default Botao2;