import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello world</h1>
            </div>);
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))