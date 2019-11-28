import React from 'react';
import Num2 from '../Num2'

class Num1 extends React.Component {
    constructor(){
        super()
        this.state = {
            num1: 0,
            result: 0,
            clicked: false
        }
        this.handleNum1Change = this.handleNum1Change.bind(this)
    }
    
    handleNum1Change(event) {
        console.log(event.target.value)
        this.setState({
            num1: event.target.value 
        })
        this.setState({
            clicked: true
        })
    }

    getAddResult = () => {
        const{num1, num2} = this.state
        this.setState({ 
            result: (parseInt(num1) + parseInt(num2))
        })
        this.setState({clicked: true})
    }
    
    
    render() {
        if (this.state.clicked == true) {
            console.log(this.state)
        return <Num2 />
        }
        return (
            <div className="row m-3">
                <form>
                    <label>
                        <h1 onChange={this.handleNum1Change}>{this.state.num1}</h1>
                        <input type="button" onClick={this.getAddResult} value="=" />
                        <h1>{this.state.result}</h1>
                    </label>
                </form>
                <div className="col-sm">
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
                </div>
                <div className="col-sm">
                <button name="+" className="btn btn-dark m-1 btn-lg">+</button>
                <button name="-" className="btn btn-dark m-1 btn-lg">-</button>
                <button name="x" className="btn btn-dark m-1 btn-lg">x</button>
                <button name="/" className="btn btn-dark m-1 btn-lg">/</button>
            </div>
            </div>
        )
    }
}
export default Num1