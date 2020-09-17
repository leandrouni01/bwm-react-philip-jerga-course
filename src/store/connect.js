
import React from 'react';
import { StateContext } from "./Provider";

const connect = selectStates => Component => {
    class Connect extends React.Component {

        constructor(props, context){
            super(props);

            this.state = {
                slice: selectStates(context.getState())
            }

            this.unsubscribe = context.subscribe(() => {this.handleStateChange(context)}); 
        }

        componentWillUnmount() {
            this.unsubscribe();
        };

        handleStateChange = (context) => {
            const rootState = context.getState();
            this.setState({slice: selectStates(rootState)})
        }

        render() {
            const { dispatch } = this.context;
            const { slice } = this.state
            return <Component {...slice} dispatch={dispatch}></Component>
        }
    }
    Connect.contextType = StateContext;
    return Connect;
}

export default connect;
