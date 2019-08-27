import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class Blog extends Component {
    constructor() {
        super();
        this.state = {
            blogs: []
        };
    }

    componentDidMount() {
        axios
            .get("/api/blog")
            .then(response => {
                this.setState({
                    blogs: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container">
                <ul>
                    {this.state.blogs.map(blog => (
                        <li key={blog.id}>{blog.body}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Blog />, document.getElementById("example"));
}
