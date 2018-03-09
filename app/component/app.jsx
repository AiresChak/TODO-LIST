import React from 'react';
import Input from './input';
import List from './list';
import Foot from './foot';

export default class App extends React.Component{
    render(){
        return (
            <div>
                <h1><div className="box">TODO LIST</div></h1>
                <Input />
                <List />
                <Foot />
            </div>
        )
    }
}
