import React from 'react';
import { Link, Route } from 'react-router-dom'
import FirstInput from '../FirstInput'
import SecondInput from '../SecondInput'

class Calculator extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            num1: "",
            num2: "",
            result: ""
        }
        this.clear = this.clear.bind(this) 
        this.handleNum1Change = this.handleNum1Change.bind(this)
        this.handleNum2Change = this.handleNum2Change.bind(this)
    }
    clear() {
        this.reset()
    }
    
    
    handleNum1Change(event) {
        console.log("hello")
        this.setState({
           num1: [...this.state.num1, event.target.value].join('')
          })
    } 
        
    handleNum2Change(event) {
        this.setState({
            num2: [...this.state.num2, event.target.value].join('')
        })
    }
   
    getAddResult = () => {
        const{num1, num2} = this.state
        this.setState({ 
            result: (parseFloat(num1) + parseFloat(num2))
        })
    }
    getNegResult = () => {
        const{num1, num2} = this.state
        this.setState({ 
            result: (parseFloat(num1) - parseFloat(num2))
        })
    }
    getMultiResult = () => {
        const{num1, num2} = this.state
        this.setState({ 
            result: (parseFloat(num1) * parseFloat(num2))
        })
    }
    getDivideResult = () => {
        const{num1, num2} = this.state
        this.setState({ 
            result: (parseFloat(num1) / parseFloat(num2))
        })
    }

    render() {
        return (
            <div className="row m-3">
                <div>
                    <h1 onChange={this.handleNum1Change}>{this.state.num1}</h1>
                    <h1 onChange={this.handleNum2Change}>{this.state.num2}</h1>
                    <br />
                    <h1 onChange={this.getAddResult} onChange={this.getNegResult} onChange={this.getMultiResult} onChange={this.getDivideResult}>{this.state.result}</h1>
                    <br />
                    <form>
                        <button className="btn btn-danger" onClick={this.clear}>Clear</button>
                    </form>
                </div>
                <div className="col-sm">
                    <Link to="/firstinput">First Input</Link>
                    <Link to="/secondinput">Second Input</Link>
                    <Route path="/firstinput" component={FirstInput} />
                    <Route path="/secondinput" component={SecondInput} />
                    <br />
                    <input type="button" className="btn btn-dark m-1 btn-lg" onClick={this.getAddResult} value="+" />
                    <input type="button" className="btn btn-dark m-1 btn-lg" onClick={this.getNegResult} value="-" />
                    <input type="button" className="btn btn-dark m-1 btn-lg" onClick={this.getMultiResult} value="x" />
                    <input type="button" className="btn btn-dark m-1 btn-lg" onClick={this.getDivideResult} value="/" />
                </div>
            </div>
        )
    }
}



export default Calculator