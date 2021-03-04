// action 类型
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

let nextTodoId = 0

// action 创建函数
export function addTodo(text) {
    return { type: ADD_TODO, id: nextTodoId++, text }
}

export function toggleTodo(id) {
    return { type: TOGGLE_TODO, id }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}

// 其他常量
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// redux-thunk: dispatch a function, which is called
// and given dispatch and getState as parameters
// function thunkActionCreator(someValue) {
//     return (dispatch, getState) => {
//         dispatch({type : "REQUEST_STARTED"});

//         myAjaxLib.post("/someEndpoint", {data : someValue})
//         .then(response => dispatch({type : "REQUEST_SUCCEEDED", payload : response}))
//         .catch(error => dispatch({type : "REQUEST_FAILED", error : error}));
//     };
// }