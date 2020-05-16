import React, { Component } from 'react'

export default class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    componentDidMount(){
        document.title = `clicked ${this.state.count} times`
    }
    componentDidUpdate(){
        document.title = `clicked ${this.state.count} times`
    }

    render() {
        return (
            <div onClick={
                ()=>{
                    this.setState(
                        {
                            count: this.state.count +1
                        }
                    )
                }
            }>
                <button>Click {this.state.count} times</button>
            </div>
        )
    }
}
