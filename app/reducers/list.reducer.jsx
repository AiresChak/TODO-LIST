import {ADD,DEL,EDIT} from '../actions/list.action';

export default function list(state=[],action){
    switch(action.type){
        case ADD:
            return [...state,action.data];
            break;
        case EDIT:
            return state.map(v=>{
                if(v.id==action.data.id){
                    return Object.assign({},v,action.data);
                }
                return v;
            });
            break;
        default:
            return state;
    }
}