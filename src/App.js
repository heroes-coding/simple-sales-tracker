import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeName } from './redux/actions'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.changeName('Lucy')
  }
  render() {
    const {userName} = this.props
    return (
      <div className='container-flud' >
        <div className="row">
          <div className='col-xl-1' />
          <div className='col-sm-12 col-xl-10' id="contentHolder">
            <div id="hello">Hello {userName}</div>
          </div>
          <div className='col-xl-1' />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const { userName } = state
  return { ownProps, userName }
}

export default connect(mapStateToProps, {changeName})(App)
