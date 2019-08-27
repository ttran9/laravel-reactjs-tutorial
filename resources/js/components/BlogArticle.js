import React, { Component, Fragment } from "react";
import axios from "axios";

export default class BlogArticle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {}
        };
    }

    componentDidMount() {
        axios
            .get("/api/blog/" + this.props.match.params.id)
            .then(response => {
                this.setState({
                    post: response.data[0]
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { post } = this.state;
        let content = <Fragment />;

        console.log(post);

        if (post !== undefined) {
            content = (
                <div>
                    <h1>{post.name}</h1>
                    <p>{post.body}</p>
                </div>
            );
        }
        return { content };
    }
}
