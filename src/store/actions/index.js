// 1. 引入 redux-thunk ✅
// 2. 创建异步请求相关的action
// 3. 放到react componentDidMount 生命周期中
export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';

export const fetchDataBegin = () => ({
    type: FETCH_DATA_BEGIN
})
export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
})
export const fetchDataFailed = error => ({
    type: FETCH_DATA_FAILED,
    payload: error
})

export function fetchData (){
    return (dispatch, getState) =>  {
        dispatch(fetchDataBegin())
        return fetch('https://hacker-news.firebaseio.com/v0/user/jl.json')
            .then(res => res.json())
            .then(json => {
                dispatch(fetchDataSuccess(json))
                return json
            })
            .catch(error => {
                dispatch(fetchDataFailed(error))
            })
    }
}