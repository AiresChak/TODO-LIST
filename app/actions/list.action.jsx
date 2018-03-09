export const ADD = "ADD";
export const DEL = "DEL";
export const EDIT = "EDIT";

export function add(data){
    return {
        type:ADD,
        data
    }
}
export function del(data){
    return {
        type:DEL,
        data
    }
}
export function edit(data){
    return {
        type:EDIT,
        data
    }
}