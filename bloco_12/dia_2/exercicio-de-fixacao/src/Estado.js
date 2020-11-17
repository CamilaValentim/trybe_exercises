import React from 'react';


class Estado extends React.Component {
    render() {
        const { value, handler } = this.props

        let error = undefined
        if(value.length > 120)
            error = "texto grande"

        return(
            <label>
            Estado 
            <textarea name="estado"
             value={value} 
             onChange={handler} 
            />
            <span>{error ? error : ""}</span>
        </label>
        )
    }
}






export default Estado;