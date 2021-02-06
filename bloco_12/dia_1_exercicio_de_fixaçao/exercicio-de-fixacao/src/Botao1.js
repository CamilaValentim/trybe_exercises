import React from 'react';


class Botao1 extends React.Component {
    constructor() {
        super()
        this.eventBotton = this.eventBotton.bind(this);
        this.state = {
            numeroDeClicks : 0
        }
    }

    eventBotton() {
        this.setState((estadoAnterior, _props) => ({
            numeroDeClicks: estadoAnterior.numeroDeClicks + 1
        }))
    
    }
    render() {
        console.log(this)
        return (
            <button className='Botao1' onClick={this.eventBotton}>Botao1</button>
        )
    }
}

export default Botao1;