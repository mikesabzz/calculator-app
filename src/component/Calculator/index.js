import React from 'react';
import { Link, Route } from 'react-router-dom'
import FirstInput from '../FirstInput'
import SecondInput from '../SecondInput'

class Calculator extends React.Component {
    constructor(){
        super()
        this.state = {
            num1: "",
            num2: "",
            result: "",
            operation: ""
        }
        this.clear = this.clear.bind(this) 
        this.handleNum1Change = this.handleNum1Change.bind(this)
        this.handleNum2Change = this.handleNum2Change.bind(this)
    }
    clear() {
        this.reset()
    }
    handleNum1Change(event) {
        this.setState({
            num1: [...this.state.num1, event.target.value].join('')
        })
    }     
    handleNum2Change(event) {
        this.setState({
            num2: [...this.state.num2, event.target.value].join('')
        })
    }
    getAddResult = (event) => {
        const{num1, num2} = this.state
        this.setState({ 
            result: (parseFloat(num1) + parseFloat(num2))
        })
        this.setState({ 
            operation: event.target.value
        })
    }
    getNegResult = (event) => {
        const{num1, num2} = this.state
        this.setState({ 
            result: (parseFloat(num1) - parseFloat(num2))
        })
        this.setState({ 
            operation: event.target.value
        })
    }
    getMultiResult = (event) => {
        const{num1, num2} = this.state
        this.setState({ 
            result: (parseFloat(num1) * parseFloat(num2))
        })
        this.setState({ 
            operation: event.target.value
        })
    }
    getDivideResult = (event) => {
        const{num1, num2} = this.state
        this.setState({ 
            result: (parseFloat(num1) / parseFloat(num2)).toFixed(2)
        })
        this.setState({ 
            operation: event.target.value
        })
    }
   
    render() {
        return (
            <div className="row m-3">
                <div className="navbar-toggler font-weight-bold">
                    First Input
                    <h1 className="border border-info" onChange={this.handleNum1Change}>{this.state.num1}</h1>
                    <h2 onChange={this.getAddResult} onChange={this.getNegResult} onChange={this.getMultiResult} onChange={this.getDivideResult}>{this.state.operation}</h2>
                    <br />
                    Second Input
                    <h1  className="border border-info" onChange={this.handleNum2Change}>{this.state.num2}</h1>
                    <br />
                    Result
                    <h1  className="border border-info" onChange={this.getAddResult} onChange={this.getNegResult} onChange={this.getMultiResult} onChange={this.getDivideResult}>{this.state.result}</h1>
                    <br />
                    <form>
                        <button className="btn btn-danger" onClick={this.clear}>Clear</button>
                    </form>
                </div>
                <div className="col-sm">
                    <Link to="/firstinput" className="btn btn-secondary active m-2">First Input</Link>
                    <Link to="/secondinput" className="btn btn-secondary active m-2">Second Input</Link>
                    <Route path="/firstinput" component={() => <FirstInput handleNum1Props={this.handleNum1Change} />} />
                    <Route path="/secondinput" component={() => <SecondInput handleNum2Props={this.handleNum2Change} />} />
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