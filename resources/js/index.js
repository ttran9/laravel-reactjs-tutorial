import React, { Component } from "react";
import ReactDOM from "react-dom";
import Blog from "./components/Blog";
import BlogArticle from "./components/BlogArticle";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Example from "./components/Example";

export default class Index extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/blog">Blog</Link>

                        <Route exact path="/" component={Example} />
                        <Route exact path="/blog" component={Blog} />
                        <Route
                            exact
                            path="/blog/:id"
                            render={props => <BlogArticle {...props} />}
                        />
                    </div>
                </Router>
            </div>
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Index />, document.getElementById("example"));
}
