import React from 'react';

function eventBotton() {
    console.log("click");

}
class Botao1 extends React.Component {
    render() {
        return (
            <button className='Botao1' onClick={eventBotton}>Botao1</button>
        )
    }
}

export default Botao1;