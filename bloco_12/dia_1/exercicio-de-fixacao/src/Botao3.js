import React from 'react';

function eventButton3() {
    console.log('click botaoo 3');
}
class Botao3 extends React.Component {
    render() {
        return (
            <button className='Botao3' onClick={eventButton3}>Botao3</button>
        )
    }
}

export default Botao3;