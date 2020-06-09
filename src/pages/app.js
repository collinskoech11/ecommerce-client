import React, { Component } from "react"
import { connect } from "react-redux"
import { Router } from "@reach/router"
import { Link } from "gatsby"

import loadable from "@loadable/component"
const DynamicPage = loadable(() => import("../components/DynamicPage"))

export class App extends Component {
  render() {
    return (
      <div>
        <h2>App home</h2>
        {/* test reducer  */}
        <div>
          <h2> Static data</h2>
          <p>
            Static text. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.{" "}
          </p>
          <h2> Data from reducer</h2>
          <p>{this.props.example}</p>
        </div>
        {/* test lazy loaded page  */}
        <div>
          <p>
            Go to page<Link to="/app/dynamicpage"> /app/dynamicpage</Link>
          </p>
          <p>
            Go to page<Link to="/app"> /app</Link>
          </p>
          <br />
        </div>
        <div>
          <Router basepath="/app">
            <DynamicPage path="/dynamicpage" />
          </Router>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  example: state.exampleReducer.example,
})

export default connect(mapStateToProps)(App)
