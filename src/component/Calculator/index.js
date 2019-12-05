import React from 'react';

class Calculator extends React.Component {
    constructor(){
        super()
        this.state = {
            num1: "",
            num2: "",
            num1Arr: [],
            num2Arr: [],
            result: "",
        }
        this.handleNum1Change = this.handleNum1Change.bind(this)
        this.handleNum2Change = this.handleNum2Change.bind(this)
        this.clear = this.clear.bind(this)       
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
        console.log(this.state.num1)
        console.log(this.state.num2)
        console.log(this.state.result)
        return (
            <div className="row m-3">
                <form>
                    <label>
                        <h1 onChange={this.handleNum1Change}>{this.state.num1}</h1>
                        <h1 onChange={this.handleNum2Change}>{this.state.num2}</h1> 
                        <input type="button" className="btn btn-dark m-1 btn-lg" onClick={this.getAddResult} value="+" />
                        <input type="button" className="btn btn-dark m-1 btn-lg" onClick={this.getNegResult} value="-" />
                        <input type="button" className="btn btn-dark m-1 btn-lg" onClick={this.getMultiResult} value="x" />
                        <input type="button" className="btn btn-dark m-1 btn-lg" onClick={this.getDivideResult} value="/" />
                        <h1 onChange={this.getAddResult} onChange={this.getNegResult} onChange={this.getMultiResult} onChange={this.getDivideResult}>{this.state.result}</h1>
                        <button onClick={this.clear}>Clear</button>
                    </label>
                </form>
                <div className="col-sm">
                    <h1>First Input</h1>
                    <button onClick={this.handleNum1Change} value="1" className="btn btn-dark m-1 btn-lg">1</button>
                    <button onClick={this.handleNum1Change} value="2" className="btn btn-dark m-1 btn-lg">2</button>
                    <button onClick={this.handleNum1Change} value="3" className="btn btn-dark m-1 btn-lg">3</button>
                    <br />
                    <button onClick={this.handleNum1Change} value="4" className="btn btn-dark m-1 btn-lg">4</button>
                    <button onClick={this.handleNum1Change} value="5" className="btn btn-dark m-1 btn-lg">5</button>
                    <button onClick={this.handleNum1Change} value="6" className="btn btn-dark m-1 btn-lg">6</button>
                    <br />
                    <button onClick={this.handleNum1Change} value="7" className="btn btn-dark m-1 btn-lg">7</button>
                    <button onClick={this.handleNum1Change} value="8" className="btn btn-dark m-1 btn-lg">8</button>
                    <button onClick={this.handleNum1Change} value="9" className="btn btn-dark m-1 btn-lg">9</button>
                    <br />
                    <button onClick={this.handleNum1Change} value="0" className="btn btn-dark m-1 btn-lg">0</button>
                    <button onClick={this.handleNum1Change} value="." className="btn btn-dark m-1 btn-lg">.</button>
                </div>
                <div className="col-sm">
                    <h1>Second Input</h1>
                    <button onClick={this.handleNum2Change} value="1" className="btn btn-dark m-1 btn-lg">1</button>
                    <button onClick={this.handleNum2Change} value="2" className="btn btn-dark m-1 btn-lg">2</button>
                    <button onClick={this.handleNum2Change} value="3" className="btn btn-dark m-1 btn-lg">3</button>
                    <br />
                    <button onClick={this.handleNum2Change} value="4" className="btn btn-dark m-1 btn-lg">4</button>
                    <button onClick={this.handleNum2Change} value="5" className="btn btn-dark m-1 btn-lg">5</button>
                    <button onClick={this.handleNum2Change} value="6" className="btn btn-dark m-1 btn-lg">6</button>
                    <br />
                    <button onClick={this.handleNum2Change} value="7" className="btn btn-dark m-1 btn-lg">7</button>
                    <button onClick={this.handleNum2Change} value="8" className="btn btn-dark m-1 btn-lg">8</button>
                    <button onClick={this.handleNum2Change} value="9" className="btn btn-dark m-1 btn-lg">9</button>
                    <br />
                    <button onClick={this.handleNum2Change} value="0" className="btn btn-dark m-1 btn-lg">0</button>
                    <button onClick={this.handleNum2Change} value="." className="btn btn-dark m-1 btn-lg">.</button>
                </div>
            </div>
        )
    }
}



export default Calculator