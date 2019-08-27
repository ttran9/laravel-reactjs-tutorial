import React, { Component } from "react";
import axios from "axios";

export default class BlogArticlePost extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            body: ""
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        const { name, body } = this.state;

        const newBlogPost = {
            name,
            body
        };

        axios
            .post("/api/blog", newBlogPost)
            .then(response => {
                console.log(response);
                this.setState({
                    name: "",
                    body: ""
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Create Blog Post</div>

                            <div className="card-body">
                                <form
                                    id="blogForm"
                                    onSubmit={this.handleSubmit.bind(this)}
                                >
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter blog name"
                                            onChange={this.handleChange.bind(
                                                this
                                            )}
                                            value={this.state.name}
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            name="body"
                                            placeholder="Enter blog body"
                                            onChange={this.handleChange.bind(
                                                this
                                            )}
                                            value={this.state.body}
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
