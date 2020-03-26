import React from 'react';
import FirstInput from '../FirstInput'

class Calculator extends React.Component {
    constructor(){
        super()
        this.state = {
            inputField: ""
        }
        this.clear = this.clear.bind(this) 
        this.handleChange = this.handleChange.bind(this)
    }
    clear() {
        window.location.reload(false)
    }
    handleChange(event) {
        this.setState({
            inputField: [...this.state.inputField, event.target.value].join('')
        })
    }  
    squareRoot = () => {
        const{inputField} = this.state
        this.setState({
            inputField: [Math.sqrt(inputField)].join('')
        })
    }  
    getResult = () => {
        const{inputField} = this.state
        this.setState({
            inputField: [eval(inputField)].join('')
        })
    }
   
    render() {
        return (
            <div className="row m-3">
                <div className="navbar-toggler font-weight-bold">
                    <h1 onChange={this.handleChange}>{this.state.inputField}</h1>
                    <br />
                    <FirstInput
                        clear={this.clear}
                        handleinputFieldProps={this.handleChange}
                        squareRoot={this.squareRoot}
                        result={this.getResult}
                    />
                </div>
            </div>
        )
    }
}

export default Calculator