import React from 'react';

class SecondInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            num2: props.num2
        }
        // this.handleNum2Change = this.handleNum2Change.bind(this)
    }
    // handleNum2Change(event) {
    //     console.log("num2")
    //     this.setState({
    //         num2: [...this.state.num2, event.target.value].join('')
    //     })
    // }
    render(){
        return (
            <div>
                <button onClick={this.props.handleNum2Change} value="1" className="btn btn-warning m-1 btn-lg">1</button>
                <button onClick={this.props.handleNum2Change} value="2" className="btn btn-warning m-1 btn-lg">2</button>
                <button onClick={this.props.handleNum2Change} value="3" className="btn btn-warning m-1 btn-lg">3</button>
                <br />
                <button onClick={this.props.handleNum2Change} value="4" className="btn btn-warning m-1 btn-lg">4</button>
                <button onClick={this.props.handleNum2Change} value="5" className="btn btn-warning m-1 btn-lg">5</button>
                <button onClick={this.props.handleNum2Change} value="6" className="btn btn-warning m-1 btn-lg">6</button>
                <br />
                <button onClick={this.props.handleNum2Change} value="7" className="btn btn-warning m-1 btn-lg">7</button>
                <button onClick={this.props.handleNum2Change} value="8" className="btn btn-warning m-1 btn-lg">8</button>
                <button onClick={this.props.handleNum2Change} value="9" className="btn btn-warning m-1 btn-lg">9</button>
                <br />
                <button onClick={this.props.handleNum2Change} value="0" className="btn btn-warning m-1 btn-lg">0</button>
                <button onClick={this.props.handleNum2Change} value="." className="btn btn-warning m-1 btn-lg">.</button>
            </div>
        )
    }
}
export default SecondInput