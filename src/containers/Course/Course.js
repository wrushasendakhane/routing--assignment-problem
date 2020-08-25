import React, { Component } from 'react';

class Course extends Component {

    state = {
        show: false,
        id: 0,
        title: ""
    }
    componentDidMount() {
        const urlParams = new URLSearchParams(this.props.location.search);
        if (this.state.id !== this.props.match.params.id) {
            this.setState({ show: true, id: this.props.match.params.id, title: urlParams.get("title") })
        }
    }
    componentDidUpdate() {
        const urlParams = new URLSearchParams(this.props.location.search);
        if (this.state.id !== this.props.match.params.id) {
            this.setState(prevState => {
                return { show: true, id: this.props.match.params.id, title: urlParams.get("title") }
            })
        }
    }
    render() {
        return (
            this.state.show ?
                <div>
                    <h1>{this.state.title}</h1>
                    <p>You selected the Course with ID: {this.state.id}</p>
                </div> : null
        );
    }
}

export default Course;