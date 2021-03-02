import React from 'react'
import { Route, Switch, Link, withRouter, Prompt } from 'react-router-dom'

// 可以通过 withRouter 高阶组件访问 history 对象的属性和最近的 <Route> 的 match
export default withRouter(function RouterComponent(props) {
    console.log(props.history)
    console.log(props.match)
    return (
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/users">Users</Link></li>
            </ul>

            <Switch>
                {/* exact 代表精准匹配 */}
                <Route exact path="/about"><About /></Route>

                {/* 使用 url传参，可通过 props.match.params.id 来获取参数 */}
                <Route path="/users/:id" component={UrlParams}></Route>
                <Route exact path="/users"><Users /></Route>

                <Route path="/home"><Home /></Route>
                {/* 如果没有匹配的路由，使用404兜底 */}
                <Route><NotFound /></Route>
                
                <Prompt message="Are you sure you want to leave?" />
            </Switch>
        </nav>
    )
})

function Home() {
    return <h2>Home</h2>
}

function About() {
    return <h2>About</h2>
}

function Users() {
    return <h2>Users</h2>
}
function NotFound() {
    return <h2>404, not found!</h2>
}

function UrlParams({match}) {
    return <h2>ID: {match.params.id}</h2>
}