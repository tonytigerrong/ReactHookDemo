import React, { Component } from 'react'

export default class ClassTimer extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            timer:0
        }
    }
    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState(
                (preState)=>({timer:preState.timer+1})
            )
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render() {
        return (
            <div>classtimer:
                {/* this.interval is variable inside of componentDidMount, but we can use it as gloable variable, when class component */}
                {this.state.timer} - <button onClick={()=>{clearInterval(this.interval)}}>clear timer</button>
            </div>
        )
    }
}
