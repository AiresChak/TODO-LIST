import React from 'react';
import {connect} from 'react-redux';
import {add} from '../actions/list.action';

class Input extends React.Component{
    render(){
        return (
            <div className="input-box">
                <input ref="input" type="text"/>
                <input onClick={()=>{
                    this.props.dispatch(add({
                        id:Date.now()+'',
                        text:this.refs.input.value,
                        complete:false
                    }));
                    this.refs.input.value = '';
                    this.refs.input.focus();
                }} type="button" defaultValue="添加任务"/>
            </div>
        )
    }
}

export default connect(state=>{
    return state;
})(Input);