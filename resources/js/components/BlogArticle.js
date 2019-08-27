import React, { Component, Fragment } from "react";
import axios from "axios";

export default class BlogArticle extends Component {
    constructor(props) {
        super(props);

        this._isMounted = false;
        this.state = {
            post: {}
        };
    }

    componentDidMount() {
        this._isMounted = true;
        axios
            .get("/api/blog/" + this.props.match.params.id)
            .then(response => {
                if (this._isMounted) {
                    this.setState({
                        post: response.data[0]
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let content = <Fragment />;
        const { post } = this.state;
        if (post !== undefined) {
            if (post.hasOwnProperty("name") && post.hasOwnProperty("body")) {
                content = (
                    <div>
                        <h1>{post.name}</h1>
                        <p>{post.body}</p>
                    </div>
                );
            }
        }
        return content;
    }
}
