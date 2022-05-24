import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            comments: '',
            topic: 'react'
        }
    }

    handlerUserNameChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    handleCommentsChange =  (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        const {userName, comments, topic} = this.state
        return (
            <form onSubmit={this.handleOnSubmit}>
                <div>
                    <label>UserName: </label>
                    <input type="text" value={userName} onChange={this.handlerUserNameChange}></input>
                </div>
                <div>
                    <label>Comments: </label>
                    <textarea type="text" value={comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic: </label>
                    <select type="text" value={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form