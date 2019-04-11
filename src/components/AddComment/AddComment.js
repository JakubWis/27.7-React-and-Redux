import React, { Component } from 'react';

import { addComment } from '../../redux/actions';

class AddComment extends Component {

    constructor(props){
        super(props);
        this.state =  {
            text: ''
        }
    }

    handleChange = (e) => {
        this.setState({
           text: e.target.value 
        })    
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.text);
        this.props.addComment(this.state.text)
        this.setState({text: ''})
    }

    render() {
        return(
        <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.text} onChange={e => this.handleChange(e)}/>
        </form>
        );
    }
    
}

export default AddComment;