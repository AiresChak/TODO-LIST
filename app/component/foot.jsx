import React from 'react';
import {connect} from 'react-redux';
import {change} from '../actions/foot.action';

class Foot extends React.Component{
    render(){
        return (
            <div className="footer">
                <a onClick={()=>{
                    this.props.dispatch(change("all"));
                }} href="javascript:;">全部</a>
                <a onClick={()=>{
                    this.props.dispatch(change("complete"));
                }} href="javascript:;">已完成</a>
                <a onClick={()=>{
                    this.props.dispatch(change("uncomplete"));
                }} href="javascript:;">未完成</a>
            </div>
        )
    }
}
export default connect(state=>{
    return {
        footer:state.footer
    };
})(Foot);