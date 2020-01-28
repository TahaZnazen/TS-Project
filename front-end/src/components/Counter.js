import React, { Component } from 'react'
import {connect} from "react-redux"
 class Counter extends Component {
    
   
    render() {
        return (
            <div>
                <input onChange={onchange}type="text" placeholder="name"/>
                <h1>{this.props.name}</h1>
                <h1 >my counter is</h1>
                <h1>{this.props.counter}</h1> 
                <button onClick={this.props.onTenAdd}>add 10</button> 
                <button onClick={this.props.onIncrement}>increment</button> 
                <button onClick={()=>this.props.onStoreResult(this.props.count )} >store result</button> 
                <ul> 
                    {this.props.storeResult.map(elm=>(
                <li key={elm.id} onClick={()=>this.props.onDeleteResult(elm.id)}>{elm.value}</li>
                    ))}
                </ul>
                
            </div>
        )
    }
}
//this one is to add state from the store to your component
//check the reducer
const mapStateToProps = state=>{
    return{
        counter:state.count.counter,
        name:state.items.name,
        storeResult:state.items.result
    }
}
//this is to pass function (actions) as props
//check the reducer

const mapDispatchToProps = (dispatch)=>{
    return {
        onIncrement : ()=>dispatch({type:"INCREMENT"}),
        onTenAdd : ()=> dispatch({type:"ADD_VALUE",value:20}),
        onStoreResult:(result)=> dispatch({type:"STORE_RESULT",counter:result}),
        onDeleteResult:(id)=> dispatch({type:"DELETE_RESULT",resultId:id})

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)