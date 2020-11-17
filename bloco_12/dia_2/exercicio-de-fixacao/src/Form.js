import React from 'react';
import Estado from './Estado';

class Form extends React.Component {
    constructor() {
        super()
        this.handler = this.handler.bind(this)

        this.state = {
            estado: '',
            email: '',
            nome: '',
            idade: 0,
            verdadeirooufalso: false
        }
    }

    handler({ target }) {
        const { name } = target
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        })

    }

    render() {
        return (
            <div>
                <form>
                   < Estado value={this.state.estado} handler={this.handler} />

                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handler}
                    />

                    <input
                        type="text"
                        name="nome"
                        value={this.state.nome}
                        onChange={this.handler}
                    />

                    <input
                        type="checkbox"
                        name="verdadeirooufalso"
                        value={this.state.verdadeirooufalso}
                        onChange={this.handler}
                    />

                    
                </form>
            </div>
           
        )
    }
}


export default Form;