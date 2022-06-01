import React, { Component } from 'react'
import ComponentF from './ComponentF'
import userContext from './Context'

ComponentE.contextType = userContext

class ComponentE extends Component {
    render() {
        return (
            <div>
                E Component: {this.context}
                <ComponentF />
            </div>
        )
    }
}

export default ComponentE