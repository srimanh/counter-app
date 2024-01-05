import React, {Component} from "react";
class clickHandle extends Component{
    constructor(props){
        super(props)

        this.state={
            count : 0
        }
    }
    clickHandler = ()=>{
        this.setState({
            count :this.state.count + 1
        })
    }
    clickHandler2 = ()=>{
        this.setState({
            count :this.state.count - 1
        })
    }
    clickHandler3 = ()=>{
        this.setState({
            count :0
        })
    }

    render(){
        return (
            <div>
                <div className="num">{this.state.count}</div>
                <div className="buttons">
                    <button onClick={()=>this.clickHandler2()} className="sub">-</button>
                    <button onClick={()=>this.clickHandler()} className="add"> + </button>
                    <button onClick={()=>this.clickHandler3()} className="reset">Reset</button>
                </div>
            </div>
        )
    }
}
export default clickHandle