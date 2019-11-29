import React from 'react';
// import Num2 from '../Num2'

class Num2 extends React.Component {
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            result: 0,
            num1Clicked: false,
            num2Clicked: false,
        }
        this.handleNum1Change = this.handleNum1Change.bind(this)
        this.handleNum2Change = this.handleNum2Change.bind(this)
    }
    
    handleNum1Change(event) {
        console.log(event.target.value)
        this.setState({
            num1: event.target.value 
        })
        this.setState({
            num1Clicked: false
        })
    }
    handleNum2Change(event) {
        console.log(event.target.value)
        this.setState({
            num2: event.target.value 
        })
        this.setState({
            num2Clicked: true
        })
    }


    getAddResult = () => {
        const{num1, num2} = this.state
        this.setState({ 
            result: (parseInt(num1) + parseInt(num2))
        })
        this.setState({clicked: true})
    }
    getNegResult = () => {
        const{num1, num2} = this.state
        this.setState({ 
            result: (parseInt(num1) - parseInt(num2))
        })
        this.setState({clicked: true})
    }
    getMultiResult = () => {
        const{num1, num2} = this.state
        this.setState({ 
            result: (parseInt(num1) * parseInt(num2))
        })
        this.setState({clicked: true})
    }
    getDivideResult = () => {
        const{num1, num2} = this.state
        this.setState({ 
            result: (parseInt(num1) / parseInt(num2))
        })
        this.setState({clicked: true})
    }
    
    
    render() {
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
                    </label>
                </form>
                <div className="col-sm">
                    <h1>Num 2</h1>
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
                </div>
            </div>
        )
    }
}
export default Num2