import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../store/actions'

const mapStateToProps = state => {
    return {
        loading: state.fetchReducer.loading,
        data: state.fetchReducer.data,
        error: state.fetchReducer.error
    }
}

// const mapDispatchToProps = dispatch => ({
//     fetchData: () => dispatch(fetchData())
// })
// 或者
const mapDispatchToProps = {
    fetchData
}

class ReduxAsyncComponent extends Component {
    componentDidMount() {
        this.props.fetchData()
    }

    render() {
        const { loading, data, error } = this.props
        if(loading) {
            return <div>正在加载数据...</div>
        }
        if(error) {
            return <div>哎呀，报错了。报错信息：<code>{error}</code></div>
        }
        return (
            <div>请求的的数据：
                <ul>
                {
                    Object.values(data).map(item => <li key={item}>{item}</li>)
                }
                </ul>
            </div>
        )
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxAsyncComponent);