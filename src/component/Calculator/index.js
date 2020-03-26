import React from 'react';
import FirstInput from '../FirstInput'

class Calculator extends React.Component {
    constructor(){
        super()
        this.state = {
            inputField: "",
            result: ""
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
    getResult = () => {
        const{inputField} = this.state
        this.setState({
            result: eval(inputField)
        })
    }
   
    render() {
        return (
            <div className="row m-3">
                <div className="navbar-toggler font-weight-bold">
                    <h1 className="border border-info" onChange={this.handleChange}>{this.state.inputField}</h1>
                    <br />
                    Result
                    <h1  className="border border-info" >{this.state.result}</h1>
                    <br />
                    <form>
                        <button className="btn btn-danger" onClick={this.clear}>Clear</button>
                    </form>
                </div>
                <div className="col-sm">
                    <FirstInput handleinputFieldProps={this.handleChange} clear={this.clear} result={this.getResult} />
                    <br />
                    <input type="button" className="btn btn-secondary active m-1 btn-lg" onClick={this.getAddResult} value="+" />
                    <input type="button" className="btn btn-secondary active m-1 btn-lg" onClick={this.getNegResult} value="-" />
                    <input type="button" className="btn btn-secondary active m-1 btn-lg" onClick={this.getMultiResult} value="x" />
                    <input type="button" className="btn btn-secondary active m-1 btn-lg" onClick={this.getDivideResult} value="/" />
                </div>
            </div>
        )
    }
}

export default Calculator