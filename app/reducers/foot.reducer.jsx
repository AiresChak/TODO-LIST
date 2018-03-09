import {CHANGE} from '../actions/foot.action';

export default function footer(state="all",action){
    switch(action.type){
        case CHANGE:
            return action.data;
            break;
        default:
            return state;
    }
}