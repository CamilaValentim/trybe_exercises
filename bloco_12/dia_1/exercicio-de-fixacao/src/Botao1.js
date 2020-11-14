import React from 'react';


class Botao1 extends React.Component {
    constructor() {
        super()
        this.eventBotton = this.eventBotton.bind(this);
    }

    eventBotton() {
        console.log(this);
        console.log("click");
    
    }
    render() {
        return (
            <button className='Botao1' onClick={this.eventBotton}>Botao1</button>
        )
    }
}

export default Botao1;