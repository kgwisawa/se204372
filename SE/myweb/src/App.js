import React, { Component } from 'react'
import { Route } from 'react-router-dom'

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>

class App extends Component {
  render() {
    return (
      <div className="my-app">
        <nav
          className="navbar is-light"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://devahoy.com">
                <img
                  src="https://devahoy.com/assets/images/devahoy-text-logo.png"
                  alt="DEVAHOY LOGO"
                  width="112"
                  height="28"
                />
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <a href="/" className="navbar-item">
                  Home
                </a>
                <a href="/posts" className="navbar-item">
                  Posts
                </a>
                <a href="/projects" className="navbar-item">
                  Projects
                </a>
                <a href="/about" className="navbar-item">
                  About
                </a>
                <a class="navbar-item" href="https://github.com/phonbopit" target="_blank" >Star on <i className="fab fa-github"></i></a>
              </div>
            </div>
          </div>
        </nav>
        <div className="App container">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/post" component={Post} />
          <Route path="/project" component={Project} />
        </div>
      </div>
    )
  }
}

export default App