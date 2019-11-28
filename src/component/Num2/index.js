import React from 'react'
import Num1 from "../Num1"

class Num2 extends React.Component {
    constructor(){
        super()
        this.state = {
            num2: 0,
            result: 0,
            clicked: true
        }
        this.handleNum2Change = this.handleNum2Change.bind(this)
    }
    

    handleNum2Change(event) {
        console.log(event.target.value)
        this.setState({
            num2: event.target.value
        })
        this.setState({
            clicked: false
        })
    }
    // getAddResult = () => {
    //     const{num1, num2} = this.state
    //     console.log(this.state)
    //     this.setState({ 
    //         result: (parseInt(num1) + parseInt(num2))
    //     })
    //     this.setState({clicked: false})
    // }
    
    render() {
        if (this.state.clicked == false) {
            console.log(this.state)
        return <Num1 />    
        }
        return (
            <div className="row m-3">
                <form>
                    <label>
                        <h1 onChange={this.handleNum2Change}>{this.state.num2}</h1>
                        {/* <input type="button" onClick={this.getAddResult} value="+" />
                        <h1>{this.state.result}</h1> */}
                    </label>
                </form>
                <div className="col-sm">
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