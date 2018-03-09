import React from 'react';
import {connect} from 'react-redux';
import {edit} from '../actions/list.action';

class List extends React.Component{
    render(){
        const {footer,dispatch} = this.props;
        return (
            <div className="list">
                <h3>列表：</h3>
                <ul>
                    {this.props.list.map(v=>{
                        if(v.complete){
                            return (
                                <li key={v.id.toString()}>
                                    <input checked={v.complete} type="checkbox" onChange={()=>{
                                    dispatch(edit({id:v.id,complete:!v.complete}))
                                }}/><s>{v.text}</s>
                                </li>
                            )
                        }
                        return (
                            <li key={v.id.toString()}>
                                <input checked={v.complete} type="checkbox" onChange={()=>{
                                    dispatch(edit({id:v.id,complete:!v.complete}))
                                }}/>{v.text}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default connect(state=>{
    let list = [];
    switch(state.footer){
        case "all":
            list = state.list;
            break;
        case "complete":
            list = state.list.filter(v=>(v.complete));
            break;
        case "uncomplete":
            list = state.list.filter(v=>(!v.complete));
            break;
    }
    return {
        list:list
    }
})(List);